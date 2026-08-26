import React, { useEffect, useState, useRef } from "react";
import { sound } from "../utils/audio";

interface InteractiveAvatarProps {
  expression?: "neutral" | "smile" | "curious" | "wink" | "sunglasses";
  onAvatarClick?: () => void;
}

export const InteractiveAvatar: React.FC<InteractiveAvatarProps> = ({
  expression: initialExpression = "neutral",
  onAvatarClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyeOffset, setEyeOffset] = useState({ ex: 0, ey: 0 });
  const [expression, setExpression] = useState<"neutral" | "smile" | "curious" | "wink" | "sunglasses">(initialExpression);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Clamp between -1 and 1
      const ex = Math.max(-1, Math.min(1, deltaX));
      const ey = Math.max(-1, Math.min(1, deltaY));

      setEyeOffset({ ex, ey });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleExpression = () => {
    sound.playClick();
    const modes: ("neutral" | "smile" | "curious" | "wink" | "sunglasses")[] = [
      "neutral",
      "smile",
      "curious",
      "wink",
      "sunglasses"
    ];
    const nextIndex = (modes.indexOf(expression) + 1) % modes.length;
    setExpression(modes[nextIndex]);
    if (onAvatarClick) onAvatarClick();
  };

  return (
    <div
      ref={containerRef}
      id="hero-interactive-avatar"
      onClick={toggleExpression}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full w-full cursor-pointer select-none transition-transform duration-300 hover:scale-105"
      title="Click to change Nehemiah's CEO avatar expression!"
      style={{
        ["--ex" as any]: eyeOffset.ex,
        ["--ey" as any]: eyeOffset.ey,
      }}
    >
      <svg
        viewBox="2 -2 216 219"
        className="h-full w-full overflow-visible drop-shadow-md"
        role="img"
        aria-label="Interactive Illustrated CEO portrait"
      >
        {/* Face Base */}
        <path
          d="M 48 98 C 44 126, 50 154, 64 174 C 78 193, 95 203, 110 203 C 125 203, 142 193, 156 174 C 170 154, 176 126, 172 98 C 170 88, 160 78, 146 72 C 136 67, 122 69, 110 69 C 98 69, 84 67, 74 72 C 60 78, 50 88, 48 98 Z"
          fill="#ffffff"
          stroke="#060010"
          strokeWidth="2.8"
        />

        {/* Ears */}
        <g fill="#ffffff" stroke="#060010" strokeWidth="2.4">
          <path d="M 50 118 C 40 114, 33 122, 35 134 C 37 146, 45 156, 52 154 C 48 142, 47 128, 50 118 Z" />
          <path d="M 170 118 C 180 114, 187 122, 185 134 C 183 146, 175 156, 168 154 C 172 142, 173 128, 170 118 Z" />
        </g>

        {/* Hair - Sharp Executive Cut */}
        <g fill="#060010">
          <path d="M 30 96 C 16 84, 12 58, 24 38 C 36 18, 62 4, 92 2 C 124 0, 160 6, 182 22 C 204 38, 212 66, 202 88 C 197 99, 188 106, 178 108 C 176 90, 166 76, 150 70 C 136 65, 122 67, 110 67 C 98 67, 84 65, 70 70 C 54 76, 44 90, 42 108 C 34 106, 32 101, 30 96 Z" />
          {/* Hair texture bubbles */}
          <circle cx="21" cy="48" r="13" />
          <circle cx="38" cy="32" r="12" />
          <circle cx="66" cy="18" r="11" />
          <circle cx="95" cy="14" r="14" />
          <circle cx="128" cy="12" r="13" />
          <circle cx="160" cy="16" r="14" />
          <circle cx="185" cy="32" r="12" />
          <circle cx="198" cy="52" r="11" />
        </g>

        {/* Beard / Defined Stubble Outline */}
        <g fill="#060010">
          <path d="M 50 124 C 52 160, 70 192, 110 201 C 150 192, 168 160, 170 124 C 164 158, 146 184, 110 191 C 74 184, 56 158, 50 124 Z" />
        </g>

        {/* Eyebrows */}
        <g
          fill="#060010"
          style={{
            transform: expression === "curious" ? "translateY(-4px)" : "none",
            transition: "transform 0.2s ease"
          }}
        >
          <path d="M 54 93 C 68 93, 87 100, 102 113 C 100 119, 94 120, 89 117 C 77 109, 65 104, 53 102 Z" />
          <path
            d="M 166 93 C 152 93, 133 100, 118 113 C 120 119, 126 120, 131 117 C 143 109, 155 104, 167 102 Z"
            style={{
              transform: expression === "curious" ? "translateY(-6px) rotate(-6deg)" : "none",
              transformOrigin: "140px 105px",
              transition: "transform 0.2s ease"
            }}
          />
        </g>

        {/* Eyes & Tracking Pupils (or Sunglasses) */}
        {expression === "sunglasses" ? (
          /* Boss Mode Sunglasses */
          <g fill="#060010">
            <path d="M 55 110 L 105 110 C 105 136, 60 138, 55 118 Z" />
            <path d="M 115 110 L 165 110 C 160 138, 115 136, 115 118 Z" />
            <line x1="105" y1="114" x2="115" y2="114" stroke="#060010" strokeWidth="4" />
            {/* Gloss highlight */}
            <path d="M 62 114 L 75 114 L 68 128 L 58 128 Z" fill="#ffffff" opacity="0.4" />
            <path d="M 122 114 L 135 114 L 128 128 L 118 128 Z" fill="#ffffff" opacity="0.4" />
          </g>
        ) : (
          <>
            {/* Left Eye */}
            <clipPath id="ceo-eye-left">
              <path d="M 67 125 C 74 116, 89 115, 97 123 C 91 131, 75 132, 67 125 Z" />
            </clipPath>
            <path d="M 62 126 C 69 113, 89 111, 102 122 C 96 134, 73 136, 62 126 Z" fill="#060010" />
            <path d="M 67 125 C 74 116, 89 115, 97 123 C 91 131, 75 132, 67 125 Z" fill="#ffffff" />
            <g clipPath="url(#ceo-eye-left)">
              <g
                style={{
                  transform: `translate(${eyeOffset.ex * 5}px, ${eyeOffset.ey * 3.5}px)`,
                  transition: "transform 100ms linear"
                }}
              >
                <circle cx="82" cy="124" r="6.6" fill="#060010" />
                <circle cx="84.2" cy="121.6" r="1.8" fill="#ffffff" />
              </g>
            </g>

            {/* Right Eye (Wink condition) */}
            {expression === "wink" ? (
              <path
                d="M 124 125 C 132 119, 144 119, 152 125"
                stroke="#060010"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <>
                <clipPath id="ceo-eye-right">
                  <path d="M 153 125 C 146 116, 131 115, 123 123 C 129 131, 145 132, 153 125 Z" />
                </clipPath>
                <path d="M 158 126 C 151 113, 131 111, 118 122 C 124 134, 147 136, 158 126 Z" fill="#060010" />
                <path d="M 153 125 C 146 116, 131 115, 123 123 C 129 131, 145 132, 153 125 Z" fill="#ffffff" />
                <g clipPath="url(#ceo-eye-right)">
                  <g
                    style={{
                      transform: `translate(${eyeOffset.ex * 5}px, ${eyeOffset.ey * 3.5}px)`,
                      transition: "transform 100ms linear"
                    }}
                  >
                    <circle cx="138" cy="124" r="6.6" fill="#060010" />
                    <circle cx="140.2" cy="121.6" r="1.8" fill="#ffffff" />
                  </g>
                </g>
              </>
            )}
          </>
        )}

        {/* Nose */}
        <g fill="none" stroke="#060010" strokeWidth="2.4" strokeLinecap="round">
          <path d="M 110 110 C 109 126, 106 138, 100 146 C 105 151, 112 152, 119 149" />
        </g>

        {/* Mustache / Upper Lip Contour */}
        <path
          d="M 110 158 C 101 152, 87 154, 79 162 C 90 161, 101 162, 110 166 C 119 162, 130 161, 141 162 C 133 154, 119 152, 110 158 Z"
          fill="#060010"
        />

        {/* Dynamic Mouth / Smile */}
        <g fill="none" stroke="#060010" strokeWidth="2.8" strokeLinecap="round">
          {expression === "smile" || isHovered ? (
            <path d="M 93 170 C 102 182, 118 182, 127 170" />
          ) : (
            <path d="M 95 173 C 102 171, 118 171, 125 173" />
          )}
        </g>

        {/* Cyan Lapel Pin / Badge */}
        <circle cx="48" cy="195" r="4.5" fill="#38bdf8" />
      </svg>

      {/* Floating Mode Tooltip on Hover */}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#060010] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block hidden">
        {expression.toUpperCase()} MODE
      </span>
    </div>
  );
};
