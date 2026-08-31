import React, { useEffect, useState } from "react";

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalScroll)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Film Grain Texture Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress" aria-hidden="true">
        <div
          className="scroll-progress-fill"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </>
  );
};
