import { useEffect, useState } from "react";

const LUMINANCE_THRESHOLD = 145;
const SAMPLE_WIDTH = 64;
const SAMPLE_HEIGHT = 4;
const FALLBACK_ASPECT_RATIO = 390 / 220;

// Finds the element that's actually painting `imageSrc` as its CSS
// background, so we can read its on-screen size.
function findHeroElement(imageSrc) {
  const candidates = document.querySelectorAll('[style*="background-image"]');
  for (const element of candidates) {
    if (getComputedStyle(element).backgroundImage.includes(imageSrc)) {
      return element;
    }
  }
  return null;
}

// Samples the slice of the source image that ends up along the very top
// edge of the hero once `background-size: cover; background-position:
// center` has scaled and cropped it - i.e. the part that sits behind the
// status bar - and averages it into a single color.
function getVisibleTopEdgeColor(image, heroElement) {
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;
  if (!imageWidth || !imageHeight) {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = SAMPLE_WIDTH;
  canvas.height = SAMPLE_HEIGHT;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return null;
  }

  const rect = heroElement?.getBoundingClientRect();
  const containerWidth = rect?.width || window.innerWidth;
  const containerHeight =
    rect?.height || containerWidth / FALLBACK_ASPECT_RATIO;

  const scale = Math.max(
    containerWidth / imageWidth,
    containerHeight / imageHeight
  );
  const cropTop = Math.max(0, (imageHeight - containerHeight / scale) / 2);
  const cropLeft = Math.max(0, (imageWidth - containerWidth / scale) / 2);

  context.drawImage(
    image,
    cropLeft,
    cropTop,
    imageWidth - cropLeft * 2,
    SAMPLE_HEIGHT,
    0,
    0,
    SAMPLE_WIDTH,
    SAMPLE_HEIGHT
  );

  const pixels = context.getImageData(0, 0, SAMPLE_WIDTH, SAMPLE_HEIGHT).data;
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let i = 0; i < pixels.length; i += 4) {
    r += pixels[i];
    g += pixels[i + 1];
    b += pixels[i + 2];
    count += 1;
  }

  if (!count) {
    return null;
  }

  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);

  return { r, g, b, luminance: 0.2126 * r + 0.7152 * g + 0.0722 * b };
}

function toHex(value) {
  return value.toString(16).padStart(2, "0");
}

export default function useHeroStatusTone(imageSrc) {
  const [tone, setTone] = useState("light");
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!imageSrc) {
      setTone("light");
      setColor(null);
      return;
    }

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";

    const setToneFromImage = () => {
      try {
        const heroElement = findHeroElement(imageSrc);
        const sample = getVisibleTopEdgeColor(image, heroElement);
        if (!sample) {
          setTone("light");
          setColor(null);
          return;
        }

        setTone(sample.luminance > LUMINANCE_THRESHOLD ? "dark" : "light");
        setColor(`#${toHex(sample.r)}${toHex(sample.g)}${toHex(sample.b)}`);
      } catch {
        // Cross-origin or canvas-security failures should not block rendering.
        setTone("light");
        setColor(null);
      }
    };

    image.onload = setToneFromImage;
    image.src = imageSrc;

    return () => {
      image.onload = null;
    };
  }, [imageSrc]);

  useEffect(() => {
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      return;
    }

    // Match the status bar to the hero's own top-edge color so it reads as
    // a seamless extension of the photo instead of a separate solid bar.
    themeMeta.setAttribute(
      "content",
      color ?? (tone === "dark" ? "#ffffff" : "#000000")
    );

    return () => {
      // Restore the default light status bar so non-flush pages (white
      // topbar) keep matching once we navigate away from this hero.
      themeMeta.setAttribute("content", "#ffffff");
    };
  }, [tone, color]);

  return tone;
}
