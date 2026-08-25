import React, { useEffect, useState } from "react";
import { InteractiveAvatar } from "./InteractiveAvatar";
import { CEO_PROFILE } from "../data/portfolioData";
import { sound } from "../utils/audio";
import { Sparkles, Calendar, Volume2, VolumeX, ArrowDown, Mail, Phone, ExternalLink } from "lucide-react";

interface HeroCoverProps {
  onOpenAdvisor: () => void;
  onOpenBooking: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({
  onOpenAdvisor,
  onOpenBooking,
  soundEnabled,
  onToggleSound,
}) => {
  const [parallax, setParallax] = useState({ px: 0, py: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ px, py });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero-cover"
      className="relative min-h-[92vh] lg:min-h-svh w-full flex flex-col justify-between overflow-hidden px-[4vw] pt-6 pb-10 select-none"
      aria-label="Executive Hero Cover"
    >
      {/* Background Paper Texture & Grid */}
      <div
        className="absolute inset-x-[-2.5%] inset-y-0 -z-10 paper-sheet pointer-events-none"
        style={{
          transform: `translate3d(${parallax.px * 8}px, ${parallax.py * 6}px, 0)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <div className="paper-grid h-full w-full opacity-60" />
        <div className="paper-grain absolute inset-0 opacity-40" />
        {/* Subtle Purple Radial Atmosphere Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[rgba(73,84,250,0.07)] blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* Top Utility Header Bar */}
      <header className="relative z-20 mx-auto w-full max-w-[112rem] flex items-center justify-between gap-4">
        {/* Left: Location & Status */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgba(73,84,250,0.75)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[rgba(73,84,250,1)]"></span>
          </span>
          <p className="eyebrow m-0 text-xs tracking-widest text-[#0d0a1a]/80">
            UNAI TECH • <span className="text-[rgba(73,84,250,1)] font-bold">NEHEMIAH NESANATHAN • CEO</span>
          </p>
        </div>

        {/* Right: Sound FX & Quick AI Desk Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="sound-toggle-btn"
            type="button"
            onClick={onToggleSound}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(73,84,250,0.25)] bg-white/90 backdrop-blur-sm text-xs font-bold tracking-wider hover:border-[rgba(73,84,250,0.9)] hover:text-[rgba(73,84,250,1)] transition-all shadow-xs"
            title={soundEnabled ? "Tactile Audio Active (Click to Mute)" : "Audio Muted (Click to Unmute)"}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[rgba(73,84,250,1)]" />
                <span className="hidden sm:inline text-[#0d0a1a]">TACTILE AUDIO</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-gray-400" />
                <span className="hidden sm:inline text-gray-500">MUTED</span>
              </>
            )}
          </button>

          <button
            id="quick-advisor-trigger"
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenAdvisor();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#060010] text-white text-xs font-bold tracking-wider hover:bg-[rgba(73,84,250,1)] transition-colors shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b0b8ff]" />
            <span>ASK NEHEMIAH AI</span>
          </button>
        </div>
      </header>

      {/* Main Massive Lockup */}
      <div
        className="relative z-10 my-auto flex flex-col items-center justify-center py-6 sm:py-10"
        style={{
          transform: `translate3d(${parallax.px * -4}px, ${parallax.py * -3}px, 0)`,
          transition: "transform 0.12s ease-out"
        }}
      >
        <div className="relative mx-auto w-fit text-center">
          {/* Eyebrow and Subtitle */}
          <div className="flex items-center justify-between w-full px-1 pb-1 sm:pb-2 text-ink">
            <p className="eyebrow m-0 text-left text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.2em] font-extrabold text-[#0d0a1a]">
              {CEO_PROFILE.subtitle}
            </p>
            <p className="eyebrow m-0 text-right text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-widest text-[rgba(73,84,250,1)]">
              {CEO_PROFILE.year}
            </p>
          </div>

          {/* Massive Typographic Headline: "PORTFOLIO" with avatar embedded */}
          <h1
            aria-label="PORTFOLIO"
            className="display relative m-0 select-none text-[15vw] sm:text-[14.5vw] md:text-[13.5vw] lg:text-[12.5vw] tracking-[-0.04em] leading-[0.88] text-[#0d0a1a]"
            style={{ fontStretch: "115%" }}
          >
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">P</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">O</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">R</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">T</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">F</span>

            {/* Embedded Avatar inside letter O slot */}
            <span
              className="relative inline-block align-baseline"
              style={{ width: "1.08em", height: "0.95em", verticalAlign: "middle" }}
            >
              <span className="absolute inset-0 -top-[0.08em] flex items-center justify-center">
                <div className="w-[112%] h-[112%]">
                  <InteractiveAvatar />
                </div>
              </span>
            </span>

            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">L</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">I</span>
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">O</span>
          </h1>

          {/* Underline Rule with Purple Signal Notch */}
          <div className="relative mt-2 w-full h-[3px] bg-[rgba(73,84,250,0.15)]">
            <div className="absolute left-[38%] top-0 h-full w-[24%] bg-[rgba(73,84,250,1)] shadow-[0_0_8px_rgba(73,84,250,0.5)]" />
          </div>
        </div>

        {/* Hand-drawn vector pointer arrow to Nehemiah Nesanathan identity */}
        <div
          className="pointer-events-none relative sm:absolute sm:left-[54%] sm:top-[68%] z-10 select-none mt-6 sm:mt-0 flex flex-col items-center sm:items-start"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 190 210"
            fill="none"
            className="block w-24 sm:w-32 md:w-36 overflow-visible drop-shadow-sm"
          >
            <path
              d="M 176 6 C 173 48, 156 78, 127 98 C 95 120, 55 133, 40 170 M 21 147 C 28 155, 35 161, 40 173 C 48 163, 57 156, 66 151"
              stroke="#060010"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M 29 186 L 51 186 L 40 202 Z" fill="rgba(73, 84, 250, 1)" />
          </svg>

          <div className="mt-1 flex flex-col items-start bg-white/95 px-3.5 py-1.5 rounded-md border border-[rgba(73, 84, 250, 0.3)] shadow-md backdrop-blur-xs">
            <p className="eyebrow m-0 text-base sm:text-lg md:text-xl font-black text-[#060010] tracking-[0.16em]">
              {CEO_PROFILE.nameUppercase}
            </p>
            <span className="font-hand text-sm sm:text-base text-[rgba(73,84,250,1)] font-bold">
              {CEO_PROFILE.tagline}
            </span>
          </div>
        </div>

        {/* Core Hero Overview Card */}
        <div className="mt-8 max-w-3xl mx-auto text-center px-4">
          <p className="body-copy text-lg sm:text-xl text-[#2b2738] font-medium leading-relaxed">
            {CEO_PROFILE.introParagraph}
          </p>

          {/* Intersections Chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {CEO_PROFILE.intersections.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-white border border-[rgba(73,84,250,0.25)] text-[#060010] shadow-2xs hover:border-[rgba(73,84,250,0.8)] hover:text-[rgba(73,84,250,1)] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Key Callout Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[rgba(73,84,250,0.06)] border border-[rgba(73,84,250,0.25)] text-center">
            <p className="eyebrow text-xs sm:text-sm text-[#4b4661] font-bold">
              {CEO_PROFILE.coreBeliefCallout}
            </p>
            <p className="display text-xl sm:text-2xl font-black text-[rgba(73,84,250,1)] mt-1">
              "{CEO_PROFILE.coreBeliefPunchline}"
            </p>
          </div>

          {/* Direct Contact Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#4b4661]">
            <a
              href={`tel:${CEO_PROFILE.contactPhone}`}
              className="inline-flex items-center gap-1.5 hover:text-[rgba(73,84,250,1)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[rgba(73,84,250,1)]" />
              <span>Contact: {CEO_PROFILE.contactPhone}</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${CEO_PROFILE.contactEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-[rgba(73,84,250,1)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[rgba(73,84,250,1)]" />
              <span>{CEO_PROFILE.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation & Anchor Links */}
      <footer className="relative z-20 mx-auto w-full max-w-[112rem] flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(73,84,250,0.15)]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#about"
            onClick={() => sound.playPaperRustle()}
            className="group inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#060010] hover:text-[rgba(73,84,250,1)] transition-colors"
          >
            <span>ABOUT ME</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href="#leadership"
            onClick={() => sound.playPaperRustle()}
            className="text-xs font-extrabold uppercase tracking-widest text-[#4b4661] hover:text-[rgba(73,84,250,1)] transition-colors"
          >
            LEADERSHIP & VISION
          </a>

          <a
            href="#unai-tech"
            onClick={() => sound.playPaperRustle()}
            className="text-xs font-extrabold uppercase tracking-widest text-[#4b4661] hover:text-[rgba(73,84,250,1)] transition-colors"
          >
            UNAI TECH
          </a>

          <a
            href="#ventures"
            onClick={() => sound.playPaperRustle()}
            className="text-xs font-extrabold uppercase tracking-widest text-[#4b4661] hover:text-[rgba(73,84,250,1)] transition-colors hidden sm:inline-block"
          >
            PRODUCTS & VENTURES
          </a>

          <a
            href="#roadmap"
            onClick={() => sound.playPaperRustle()}
            className="text-xs font-extrabold uppercase tracking-widest text-[#4b4661] hover:text-[rgba(73,84,250,1)] transition-colors hidden md:inline-block"
          >
            ROADMAP (2026-2030+)
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenBooking();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#060010] bg-transparent text-xs font-black uppercase tracking-wider text-[#060010] hover:bg-[rgba(73,84,250,1)] hover:border-[rgba(73,84,250,1)] hover:text-white transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[rgba(73,84,250,1)]" />
            <span>CONNECT & SCHEDULE</span>
          </button>
        </div>
      </footer>
    </section>
  );
};
