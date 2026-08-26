import React, { useState } from "react";
import { sound } from "../utils/audio";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

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
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="hero-cover"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#E54823] text-white select-none font-['Inter',sans-serif]"
      aria-label="Nehemiah Portfolio Hero Section"
    >
      {/* Custom Styles for Hero Grid & Effects */}
      <style>{`
        .hero-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: calc(33.33vw) calc(33.33vh);
          background-position: center;
        }
        .hero-crosshair {
          position: absolute;
          width: 10px;
          height: 10px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          font-size: 14px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hero-crosshair:nth-child(1) { top: 12%; left: 8%; }
        .hero-crosshair:nth-child(2) { top: 12%; left: 35%; }
        .hero-crosshair:nth-child(3) { top: 12%; left: 63%; }
        .hero-crosshair:nth-child(4) { top: 12%; left: 91%; }
        
        .hero-crosshair:nth-child(5) { top: 37%; left: 8%; }
        .hero-crosshair:nth-child(6) { top: 37%; left: 91%; }
        
        .hero-crosshair:nth-child(7) { top: 64%; left: 8%; }
        .hero-crosshair:nth-child(8) { top: 64%; left: 91%; }
        
        .hero-crosshair:nth-child(9) { top: 90%; left: 8%; }
        .hero-crosshair:nth-child(10) { top: 90%; left: 91%; }

        .hero-bg-text {
          color: rgba(255, 255, 255, 0.08);
          font-size: 20vw;
          font-weight: 900;
          line-height: 0.8;
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          white-space: nowrap;
          pointer-events: none;
        }
        .hero-main-title {
          font-size: clamp(3.5rem, 10vw, 10.5rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.9;
        }
      `}</style>

      {/* Main Container with Grid Background */}
      <div className="relative w-full max-w-[1920px] min-h-screen hero-grid-bg overflow-hidden flex flex-col justify-between z-10">
        
        {/* Crosshairs for Grid Intersections */}
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>
        <div className="hero-crosshair">+</div>

        {/* Background Large Watermark Text 'NEHEMIAH' */}
        <div className="hero-bg-text tracking-tighter select-none" aria-hidden="true">
          NEHEMIAH
        </div>

        {/* BEGIN: Header Section */}
        <header className="w-full flex justify-between items-center px-6 sm:px-12 lg:px-24 py-8 z-50 relative" data-purpose="site-header">
          <div className="text-2xl font-bold tracking-tight">
            Portfolioa<sup className="text-xs font-medium ml-0.5">®</sup>
          </div>

          <nav className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium">
            <a
              className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white hover:opacity-80 transition-opacity"
              href="#hero-cover"
              onClick={() => sound.playPaperRustle()}
            >
              Hero
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-white transition-opacity"
              href="#about"
              onClick={() => sound.playPaperRustle()}
            >
              About
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-white transition-opacity"
              href="#ventures"
              onClick={() => sound.playPaperRustle()}
            >
              Work <span className="opacity-50 text-xs ml-1">(12)</span>
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-white transition-opacity"
              href="#services"
              onClick={() => sound.playPaperRustle()}
            >
              Services <span className="opacity-50 text-xs ml-1">(08)</span>
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-white transition-opacity"
              href="#contact"
              onClick={() => sound.playPaperRustle()}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              className="flex flex-col space-y-[6px] group cursor-pointer p-1 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-purpose="mobile-menu-button"
            >
              <span className="w-8 h-[2px] bg-white group-hover:bg-gray-200 transition-colors"></span>
              <span className="w-8 h-[2px] bg-white group-hover:bg-gray-200 transition-colors"></span>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-50 mx-6 mb-4 p-5 bg-[#c7310e] rounded-2xl border border-white/20 shadow-xl flex flex-col gap-4">
            <a
              href="#hero-cover"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-white"
            >
              Hero
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90"
            >
              About
            </a>
            <a
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90"
            >
              Work (12)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90"
            >
              Services (08)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90"
            >
              Contact
            </a>
          </div>
        )}

        {/* BEGIN: Main Content Area */}
        <section className="flex-grow relative flex w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 z-20 py-4" data-purpose="main-content">
          
          {/* Central Character Image Container: Nehemiah */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] h-[82vh] max-h-[780px] z-10 pointer-events-none flex items-end justify-center" data-purpose="hero-image-container">
            <img
              alt="Nehemiah - CEO & Founder @ UNAI TECH"
              className="w-auto h-full max-h-[82vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              src="/images/nehemiah-hero.png"
              style={{
                maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)"
              }}
            />
          </div>

          {/* Left Side Text Content */}
          <div className="w-full md:w-1/3 flex flex-col justify-center mt-12 md:mt-24 z-20" data-purpose="intro-text">
            <p className="text-xs sm:text-sm tracking-wide leading-relaxed font-medium uppercase max-w-xs text-white/90">
              I DESIGN USER-CENTERED DIGITAL<br />
              EXPERIENCES THAT ARE SIMPLE<br />
              SMART AND IMPACTFUL
            </p>
          </div>

          {/* Right Side Empty Spacer so character is unobstructed */}
          <div className="hidden md:flex md:w-2/3" aria-hidden="true" />
        </section>

        {/* BEGIN: Bottom Section */}
        <div className="relative w-full px-6 sm:px-12 lg:px-24 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end z-40 gap-6" data-purpose="bottom-bar">
          
          {/* Foreground Name */}
          <div className="flex flex-col justify-end">
            <span className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white/80">©2026</span>
            <h1 className="hero-main-title text-white">NEHEMIAH</h1>
          </div>

          {/* UNAI TECH Hyperlink Floating Element (Replaces Let's Talk Button) */}
          <a
            href="https://unaitech.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="group block bg-black/80 hover:bg-black text-white p-3.5 rounded-2xl border border-white/25 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#ea431b] w-full sm:w-[320px] self-end cursor-pointer"
            title="Visit UNAI TECH Official Platform (unaitech.com)"
            data-purpose="unai-floating-widget"
          >
            <div className="flex items-center space-x-3.5">
              {/* UNAI TECH Logo Badge */}
              <div className="w-13 h-13 rounded-xl bg-gradient-to-tr from-[#ea431b] to-[#ff7347] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(234,67,27,0.7)] border border-white/20">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-white">
                  <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" opacity="0.9" />
                  <circle cx="24" cy="24" r="5" fill="white" />
                  <line x1="24" y1="6" x2="24" y2="18" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
                  <line x1="42" y1="32" x2="30" y2="28" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
                  <line x1="6" y1="32" x2="18" y2="28" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Info Text */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#ea431b] animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">OFFICIAL PLATFORM</span>
                </div>
                <p className="font-black text-sm text-white tracking-wide truncate" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  UNAI TECH
                </p>
                <p className="text-[11px] font-mono text-amber-300 group-hover:text-white transition-colors truncate flex items-center gap-1">
                  <span>unaitech.com</span>
                  <span className="text-xs">↗</span>
                </p>
              </div>

              {/* Arrow Action Button */}
              <div className="w-9 h-9 bg-white/10 group-hover:bg-[#ea431b] text-white rounded-xl flex items-center justify-center transition-colors shrink-0 border border-white/15">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="16">
                  <line x1="7" x2="17" y1="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

