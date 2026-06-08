import { useEffect, useState } from "react";

const LUMINANCE_THRESHOLD = 145;

function getTopStripLuminance(image) {
  const canvas = document.createElement("canvas");
  const width = 48;
  const height = 24;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return 0;
  }

  context.drawImage(image, 0, 0, width, height);

  const pixels = context.getImageData(0, 0, width, height).data;
  let total = 0;
  let count = 0;

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    total += 0.2126 * r + 0.7152 * g + 0.0722 * b;
    count += 1;
  }

  return count ? total / count : 0;
}

export default function useHeroStatusTone(imageSrc) {
  const [tone, setTone] = useState("light");

  useEffect(() => {
    if (!imageSrc) {
      setTone("light");
      return;
    }

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";

    const setToneFromImage = () => {
      try {
        const luminance = getTopStripLuminance(image);
        setTone(luminance > LUMINANCE_THRESHOLD ? "dark" : "light");
      } catch {
        // Cross-origin or canvas-security failures should not block rendering.
        setTone("light");
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

    themeMeta.setAttribute(
      "content",
      tone === "dark" ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
    );
  }, [tone]);

  return tone;
}
