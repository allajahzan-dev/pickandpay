// SmoothBottomBlur.tsx
import React from "react";

interface SmoothBottomBlurProps {
  height?: string;     // how tall the blur area is
  layers?: number;     // number of overlapping blur layers
  strength?: number;   // base blur strength
  opacity?: number;    // overall transparency
}

const SmoothBottomBlur: React.FC<SmoothBottomBlurProps> = ({
  height = "8rem",
  layers = 6,
  strength = 2,
  opacity = 1,
}) => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full overflow-hidden"
      style={{ height, opacity }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        // creates progressively stronger blur and fades it out
        const progress = i / (layers - 1);
        const blur = (progress + 0.2) * strength * 10; // smooth blur curve
        const transparency = 1 - progress ** 2; // fades toward transparent

        return (
          <div
            key={i}
            className="absolute inset-0 backdrop-blur-md"
            style={{
              backdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(to top, rgba(0,0,0,${transparency}) 0%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,${transparency}) 0%, transparent 100%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SmoothBottomBlur;
