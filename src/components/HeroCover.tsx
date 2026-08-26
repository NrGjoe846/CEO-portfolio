import React, { useState, useEffect } from "react";
import { sound } from "../utils/audio";
import { Phone, Globe, Linkedin, ArrowUpRight } from "lucide-react";

interface HeroCoverProps {
  onOpenAdvisor: () => void;
  onOpenBooking: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero-cover"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#0a1226] text-white select-none font-['Inter',sans-serif]"
      aria-label="Nehemiah Portfolio Hero Section"
    >
      {/* Custom Styles for Hero Grid & Effects */}
      <style>{`
        .hero-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
          background-size: calc(33.33vw) calc(33.33vh);
          background-position: center;
        }
        .hero-crosshair {
          position: absolute;
          width: 10px;
          height: 10px;
          color: rgba(56, 189, 248, 0.5);
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
          color: rgba(56, 189, 248, 0.04);
          font-size: 24vw;
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

      {/* Main Container with Grid Background & Ambient Lighting */}
      <div className="relative w-full max-w-[1920px] min-h-screen hero-grid-bg overflow-hidden flex flex-col justify-between z-10 bg-gradient-to-b from-[#060b19] via-[#0a1226] to-[#0e1a38]">
        
        {/* Ambient Top Cyber Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#1d4ed8]/25 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#38bdf8]/10 blur-3xl pointer-events-none rounded-full" />

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

        {/* Background Large Watermark Text 'UNAI' */}
        <div className="hero-bg-text tracking-tighter select-none" aria-hidden="true">
          UNAI
        </div>

        {/* BEGIN: Header Section - Bigger Executive Navbar */}
        <header className="w-full flex justify-between items-center px-6 sm:px-12 lg:px-24 py-10 z-50 relative" data-purpose="site-header">
          {/* UNAI Navbar Logo & Brand */}
          <a
            href="#hero-cover"
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => sound.playClick()}
          >
            <div className="h-12 sm:h-14 px-3.5 sm:px-4 py-2 bg-white/95 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.45)] border border-cyan-400/50 transition-transform group-hover:scale-105">
              <img
                src="/images/unai-logo.png"
                alt="UNAI Logo"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
            <span className="text-2xl sm:text-4xl font-black tracking-wider text-white group-hover:text-[#38bdf8] transition-colors" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              UNAI
            </span>
          </a>

          {/* Nav Links - Bigger Font and Spacing */}
          <nav className="hidden md:flex space-x-8 lg:space-x-14 text-base lg:text-lg font-bold">
            <a
              className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#38bdf8] text-white hover:text-[#38bdf8] transition-colors tracking-wide"
              href="#hero-cover"
              onClick={() => sound.playPaperRustle()}
            >
              Hero
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#38bdf8] text-white/80 hover:text-white transition-colors tracking-wide"
              href="#about"
              onClick={() => sound.playPaperRustle()}
            >
              About
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#38bdf8] text-white/80 hover:text-white transition-colors tracking-wide"
              href="#ventures"
              onClick={() => sound.playPaperRustle()}
            >
              Work <span className="opacity-50 text-xs ml-1 text-cyan-300">(12)</span>
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#38bdf8] text-white/80 hover:text-white transition-colors tracking-wide"
              href="#services"
              onClick={() => sound.playPaperRustle()}
            >
              Services <span className="opacity-50 text-xs ml-1 text-cyan-300">(08)</span>
            </a>
            <a
              className="relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#38bdf8] text-white/80 hover:text-white transition-colors tracking-wide"
              href="#contact"
              onClick={() => sound.playPaperRustle()}
            >
              Contact
            </a>
          </nav>

          {/* Social Icon CTA Buttons (Icon Only - No numbers or text) */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Icon Button */}
            <a
              href="https://wa.me/918428293603?text=Hi%20Nehemiah,%20I'd%20like%20to%20connect%20with%20you%20regarding%20UNAI%20TECH."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="Connect on WhatsApp"
              aria-label="Connect on WhatsApp"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_18px_rgba(37,211,102,0.45)] hover:scale-110 hover:bg-white transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>

            {/* Instagram Icon Button */}
            <a
              href="https://www.instagram.com/nehemiah_ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="Follow on Instagram (@nehemiah_ai)"
              aria-label="Follow on Instagram"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_0_18px_rgba(220,39,67,0.35)] hover:scale-110 transition-all cursor-pointer"
            >
              <Globe className="w-5 h-5" />
            </a>

            {/* LinkedIn Icon Button */}
            <a
              href="https://www.linkedin.com/in/nehemiah-nesanathan-45a655258/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="Connect on LinkedIn"
              aria-label="Connect on LinkedIn"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-[0_0_18px_rgba(10,102,194,0.35)] hover:scale-110 transition-all cursor-pointer"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              className="flex flex-col space-y-[6px] group cursor-pointer p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-purpose="mobile-menu-button"
            >
              <span className="w-8 h-[2.5px] bg-white group-hover:bg-[#38bdf8] transition-colors"></span>
              <span className="w-8 h-[2.5px] bg-white group-hover:bg-[#38bdf8] transition-colors"></span>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-50 mx-6 mb-4 p-6 bg-[#0e1a38] rounded-2xl border border-cyan-500/30 shadow-2xl flex flex-col gap-4">
            <a
              href="#hero-cover"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-cyan-400"
            >
              Hero
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-cyan-300"
            >
              About
            </a>
            <a
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-cyan-300"
            >
              Work (12)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-cyan-300"
            >
              Services (08)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-cyan-300"
            >
              Contact
            </a>

            {/* Mobile Social Icons Row */}
            <div className="flex items-center justify-around pt-3 border-t border-cyan-500/20">
              <a
                href="https://wa.me/918428293603?text=Hi%20Nehemiah,%20I'd%20like%20to%20connect%20with%20you%20regarding%20UNAI%20TECH."
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#25D366] text-black flex items-center justify-center"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/nehemiah_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center"
                title="Instagram"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nehemiah-nesanathan-45a655258/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0A66C2] text-white flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        )}

        {/* BEGIN: Main Content Area */}
        <section className="flex-grow relative flex w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 z-20 py-4" data-purpose="main-content">
          
          {/* Central Character Image Container with Smooth Scroll Animation & Behind Glow: Nehemiah */}
          <div
            className="absolute -bottom-6 sm:-bottom-8 left-1/2 w-full max-w-[660px] h-[78vh] max-h-[720px] z-10 pointer-events-none flex items-end justify-center transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(-50%) translateY(${24 + Math.min(scrollY * 0.22, 160)}px) scale(${Math.max(0.93, 1 - scrollY * 0.0002)})`,
              willChange: "transform"
            }}
            data-purpose="hero-image-container"
          >
            {/* Cyber Aura Glow behind the character */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[380px] sm:w-[480px] h-[420px] bg-gradient-to-t from-[#1d4ed8]/35 via-[#38bdf8]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <img
              alt="Nehemiah - CEO & Founder @ UNAI TECH"
              className="w-auto h-full max-h-[78vh] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] drop-shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              src="/images/nehemiah-hero.png"
              style={{
                maskImage: "linear-gradient(to bottom, black 86%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 86%, transparent 100%)"
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
            <span className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-cyan-300/80">©2026</span>
            <h1 className="hero-main-title text-white">NEHEMIAH</h1>
          </div>

          {/* UNAI TECH Hyperlink Floating Element with Official UNAI Logo */}
          <a
            href="https://unaitech.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="group block bg-[#0a1226]/90 hover:bg-[#0e1a38] text-white p-3 rounded-2xl border border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#38bdf8] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] w-full sm:w-[330px] self-end cursor-pointer"
            title="Visit UNAI TECH Official Platform (unaitech.com)"
            data-purpose="unai-floating-widget"
          >
            <div className="flex items-center space-x-3">
              {/* UNAI Official Image Logo Box */}
              <div className="h-12 w-20 bg-white/95 rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-cyan-400/40">
                <img
                  src="/images/unai-logo.png"
                  alt="UNAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info Text */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-bold">OFFICIAL PLATFORM</span>
                </div>
                <p className="font-black text-sm text-white tracking-wide truncate" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  UNAI TECH
                </p>
                <p className="text-[11px] font-mono text-cyan-300 group-hover:text-white transition-colors truncate flex items-center gap-1">
                  <span>unaitech.com</span>
                  <span className="text-xs text-[#38bdf8]">↗</span>
                </p>
              </div>

              {/* Arrow Action Button */}
              <div className="w-9 h-9 bg-cyan-500/20 group-hover:bg-[#2563eb] text-white rounded-xl flex items-center justify-center transition-colors shrink-0 border border-cyan-500/30">
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

