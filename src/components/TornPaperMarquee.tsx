import React from "react";
import { Sparkles, Cpu, ShieldCheck } from "lucide-react";

export const TornPaperMarquee: React.FC = () => {
  return (
    <div className="relative z-10 w-full overflow-hidden my-4 sm:my-8 select-none">
      {/* Top Torn Edge SVG with Noise Filters */}
      <div className="relative w-full -mb-[1px]">
        <svg
          className="block w-full h-[clamp(2.5rem,7.5vw,7.5rem)]"
          viewBox="0 0 1600 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="fray-top" x="-4%" y="-40%" width="108%" height="180%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.028 0.6" numOctaves="4" seed="17" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="soften-top" x="-4%" y="-40%" width="108%" height="180%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Paper shadow */}
          <path
            d="M 0 66 Q 400 85 800 35 T 1600 60 L 1600 134 L 0 134 Z"
            fill="none"
            stroke="rgba(73, 84, 250, 0.25)"
            strokeWidth="9"
            transform="translate(0, -7)"
            filter="url(#soften-top)"
          />

          {/* Torn edge path in dark background */}
          <g filter="url(#fray-top)">
            <path
              d="M 0 66 Q 200 85 400 45 T 800 35 T 1200 75 T 1600 60 L 1600 134 L 0 134 Z"
              fill="#060010"
            />
          </g>
        </svg>
      </div>

      {/* Cyber Noir Center Marquee Band */}
      <div className="relative bg-[#060010] text-white py-12 sm:py-16 overflow-hidden border-y border-[#392e4e]">
        {/* Subtle noise grain */}
        <div className="paper-grain absolute inset-0 opacity-10" />

        {/* Ambient Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[rgba(73,84,250,0.18)] blur-3xl pointer-events-none rounded-full" />

        {/* Marquee Ticker Track 1: NEHEMIAH , UNAI TECH , CEO , */}
        <div className="marquee-track flex items-center whitespace-nowrap" style={{ ["--marquee-duration" as any]: "20s" }}>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="display inline-block text-[clamp(2.5rem,8vw,9.5rem)] tracking-[-0.04em] font-black px-6 text-white transition-colors hover:text-[rgba(73,84,250,1)]"
            >
              NEHEMIAH <span className="text-[rgba(73,84,250,1)]">&bull;</span> UNAI TECH <span className="text-[rgba(73,84,250,1)]">&bull;</span> CEO <span className="text-[rgba(73,84,250,1)]">&bull;</span>&nbsp;
            </span>
          ))}
        </div>

        {/* Centered Floating Pill with Electric Purple Glow */}
        <div className="relative z-10 mx-auto w-fit my-6 flex flex-col items-center">
          <div className="relative">
            {/* Purple Ambient Glow */}
            <div className="absolute -inset-3 bg-[rgba(73,84,250,0.4)] blur-xl rounded-full" />
            
            <div className="relative px-6 py-2 rounded-full border border-[rgba(73,84,250,0.8)] bg-[#060010]/80 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(73,84,250,0.35)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(73,84,250,1)] animate-pulse shadow-[0_0_8px_rgba(73,84,250,1)]" />
              <span className="eyebrow text-xs sm:text-sm tracking-[0.25em] text-white font-black">
                NEHEMIAH &bull; UNAI TECH &bull; CEO &bull; SCALE &bull; GOVERNANCE
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(73,84,250,1)] animate-pulse shadow-[0_0_8px_rgba(73,84,250,1)]" />
            </div>
          </div>
        </div>

        {/* Marquee Ticker Track 2 (Rightwards / Alternate Accent) */}
        <div
          className="marquee-track flex items-center whitespace-nowrap"
          style={{
            ["--marquee-duration" as any]: "26s",
            transform: "rotate(-0.6deg)"
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="display inline-block text-[clamp(1.75rem,5.5vw,5.5rem)] tracking-[-0.03em] font-bold px-6 text-[#b0b8ff]/60 hover:text-white transition-colors"
            >
              nehemiah <span className="text-[rgba(73,84,250,0.8)]">,</span> UNAI TECH <span className="text-[rgba(73,84,250,0.8)]">,</span> CEO <span className="text-[rgba(73,84,250,0.8)]">,</span>&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Torn Edge SVG */}
      <div className="relative w-full -mt-[1px]">
        <svg
          className="block w-full h-[clamp(2.5rem,7.5vw,7.5rem)]"
          viewBox="0 0 1600 112"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="fray-bot" x="-4%" y="-40%" width="108%" height="180%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.028 0.6" numOctaves="4" seed="31" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="soften-bot" x="-4%" y="-40%" width="108%" height="180%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Shadow */}
          <path
            d="M 0 -24 L 1600 -24 L 1600 50 Q 1200 25 800 65 T 0 50 Z"
            fill="none"
            stroke="rgba(73, 84, 250, 0.25)"
            strokeWidth="9"
            transform="translate(0, 7)"
            filter="url(#soften-bot)"
          />

          {/* Bottom torn path in dark */}
          <g filter="url(#fray-bot)">
            <path
              d="M 0 -24 L 1600 -24 L 1600 50 Q 1200 25 800 65 T 0 50 Z"
              fill="#060010"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
