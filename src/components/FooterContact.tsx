import React from "react";
import { CEO_PROFILE, CONNECT_WITH_ME } from "../data/portfolioData";
import { sound } from "../utils/audio";
import { ArrowUpRight, Download, Mail, Phone, Globe, Linkedin, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface FooterContactProps {
  onOpenBooking: () => void;
}

export const FooterContact: React.FC<FooterContactProps> = ({ onOpenBooking }) => {
  const handleDownloadDossier = () => {
    sound.playClick();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.9 }
    });
    window.print();
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden select-none bg-[#0a1226] text-white" aria-label="Connect With Me">
      
      {/* Footer Marquee Banner */}
      <div className="relative overflow-hidden pt-[clamp(4rem,10vw,8rem)] pb-[clamp(2.5rem,6vw,4.5rem)]">
        <div className="footer-marquee pointer-events-none absolute inset-0 flex items-center opacity-10" aria-hidden="true">
          <div className="marquee-track flex whitespace-nowrap" style={{ ["--marquee-duration" as any]: "35s" }}>
            {[...Array(4)].map((_, idx) => (
              <span
                key={idx}
                className="display inline-block text-[clamp(2.5rem,8vw,10rem)] tracking-[-0.03em] px-8 text-white"
              >
                NEHEMIAH NESANATHAN &bull; CEO &bull; UNAI TECH PVT LTD &bull; ENTREPRENEUR &bull;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1a38] text-cyan-300 text-xs font-black tracking-widest uppercase mb-4 border border-cyan-500/30">
            {CONNECT_WITH_ME.badge}
          </div>

          {/* Oversized Connect Headline */}
          <div>
            <a
              href={CONNECT_WITH_ME.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPaperRustle()}
              className="connect-cta display m-0 text-[clamp(2.8rem,7vw,8.5rem)] tracking-[-0.045em] leading-[0.92] text-white hover:text-cyan-300 transition-colors"
            >
              <span>
                {CONNECT_WITH_ME.headline}
                <svg className="connect-cta__arrow w-[0.65em] h-[0.65em] inline-block ml-3 text-cyan-400" viewBox="0 0 24 16" fill="none">
                  <path d="M1 8 C 8 7.7, 15 8.3, 22 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M15.5 2 C 17.6 4, 19.8 6.4, 22 8 C 19.8 9.6, 17.6 12, 15.5 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <p className="eyebrow m-0 mt-6 text-cyan-200/90 text-xs sm:text-sm tracking-[0.2em] font-extrabold">
            {CONNECT_WITH_ME.lead.toUpperCase()}
          </p>

          {/* Open Conversation Topics Chips */}
          <div className="mt-4 flex flex-wrap gap-2 max-w-4xl">
            {CONNECT_WITH_ME.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0e1a38] text-white border border-cyan-500/30 shadow-sm hover:bg-[#1d4ed8] hover:border-cyan-300 transition-colors"
              >
                &bull; {topic}
              </span>
            ))}
          </div>

          {/* CTA Box - Icon-Only Action Buttons */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0e1a38] text-white border-2 border-cyan-500/40 max-w-3xl shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 backdrop-blur-xs">
            <div>
              <p className="eyebrow text-xs text-cyan-300 font-bold mb-1">
                {CONNECT_WITH_ME.ctaHeadline}
              </p>
              <p className="display text-2xl sm:text-3xl font-black text-white">
                {CONNECT_WITH_ME.ctaPunch}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* WhatsApp Icon CTA */}
              <a
                href={CONNECT_WITH_ME.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="Connect on WhatsApp"
                aria-label="Connect on WhatsApp"
                className="w-12 h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-white transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>

              {/* Instagram Icon CTA */}
              <a
                href={CONNECT_WITH_ME.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="Follow on Instagram (@nehemiah_ai)"
                aria-label="Follow on Instagram"
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,39,67,0.35)] hover:scale-110 transition-all cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </a>

              {/* LinkedIn Icon CTA */}
              <a
                href={CONNECT_WITH_ME.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="Connect on LinkedIn"
                aria-label="Connect on LinkedIn"
                className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-[0_0_20px_rgba(10,102,194,0.35)] hover:scale-110 transition-all cursor-pointer"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>

              {/* Schedule Booking Icon CTA */}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenBooking();
                }}
                title="Schedule Strategic Session"
                aria-label="Schedule Strategic Session"
                className="w-12 h-12 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shadow-[0_0_20px_rgba(29,78,216,0.35)] hover:scale-110 hover:bg-[#38bdf8] hover:text-black transition-all cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Socials & Signature Row */}
          <div className="mt-[clamp(3rem,8vw,6rem)] flex flex-wrap items-end justify-between gap-6 pt-8 border-t border-cyan-500/20">
            <div className="flex flex-col items-start gap-1">
              <span className="block h-[3px] w-10 bg-[#38bdf8] rounded-full shadow-[0_0_6px_#38bdf8]" aria-hidden="true" />
              <span className="text-white font-hand text-3xl sm:text-4xl font-bold leading-tight">
                {CEO_PROFILE.name}
              </span>
              <span className="eyebrow text-xs text-cyan-300 tracking-widest font-black">
                {CEO_PROFILE.subtitle}
              </span>
              <p className="font-serif-italic text-sm text-cyan-200/80 font-bold mt-1">
                Building Businesses. Engineering Intelligence. Creating What's Next.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* WhatsApp Icon */}
              <a
                href={CONNECT_WITH_ME.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="WhatsApp"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-md hover:scale-110 hover:bg-white transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>

              {/* Instagram Icon */}
              <a
                href={CONNECT_WITH_ME.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="Instagram"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 transition-all cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </a>

              {/* LinkedIn Icon */}
              <a
                href={CONNECT_WITH_ME.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                title="LinkedIn"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md hover:scale-110 transition-all cursor-pointer"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>

              {/* Export Dossier Icon Button */}
              <button
                type="button"
                onClick={handleDownloadDossier}
                className="w-11 h-11 rounded-full border-2 border-cyan-400/50 bg-[#0e1a38] text-cyan-300 flex items-center justify-center hover:bg-[#1d4ed8] hover:text-white transition-all shadow-md cursor-pointer"
                title="Export Dossier"
                aria-label="Export Dossier"
              >
                <Download className="w-5 h-5 text-cyan-300" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Torn Edge to Dark Footer Bar */}
      <div className="relative w-full -mb-[1px]">
        <svg
          className="block w-full h-[clamp(2rem,5vw,5rem)]"
          viewBox="0 0 1600 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 40 Q 400 15 800 50 T 1600 35 L 1600 100 L 0 100 Z"
            fill="#040711"
          />
        </svg>
      </div>

      {/* Noir Copyright Strip */}
      <div className="bg-[#040711] text-white px-[max(1.5rem,7vw)] py-6 flex flex-wrap items-center justify-between gap-6 text-xs font-mono border-t border-cyan-500/15">
        <div>
          <p className="m-0 text-white font-bold">
            {CEO_PROFILE.name} &bull; {CEO_PROFILE.subtitle}
          </p>
          <p className="m-0 text-cyan-200/60 text-[11px] mt-0.5">
            &copy; 2026 UNAI TECH &bull; All Rights Reserved.
          </p>
        </div>

        {/* Crafted by UNAI TECH Badge */}
        <div>
          <a
            href="https://www.unaitech.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              background: "#FFFFFF",
              borderRadius: "18px",
              padding: "10px 22px",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "1px solid #E5E5E5",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
            }}
            className="unai-badge hover:scale-105 transition-transform"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", textAlign: "left" }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "#8A8A8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  lineHeight: 1.2
                }}
              >
                Crafted by
              </span>
              <span
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  lineHeight: 1.1
                }}
              >
                <span style={{ color: "#E10613" }}>UNAI</span> <span style={{ color: "#2A2A2A" }}>TECH</span>
              </span>
            </div>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#E10613",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease"
              }}
              className="unai-arrow-circle"
            >
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 8L8 2M8 2H3M8 2V7"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>

        <p className="m-0 text-cyan-300 font-semibold text-xs hidden md:block">
          Building Businesses &bull; Engineering Intelligence &bull; Creating What's Next
        </p>
      </div>
    </footer>
  );
};
