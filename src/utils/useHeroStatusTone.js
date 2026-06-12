import { useEffect, useState } from "react";

const LUMINANCE_THRESHOLD = 145;

function getTopStripColor(image) {
  const canvas = document.createElement("canvas");
  const width = 48;
  const height = 24;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return null;
  }

  context.drawImage(image, 0, 0, width, height);

  const pixels = context.getImageData(0, 0, width, height).data;
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
        const sample = getTopStripColor(image);
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
