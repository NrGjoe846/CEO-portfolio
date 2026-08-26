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
    <footer id="contact" className="relative w-full overflow-hidden select-none bg-[#ea431b] text-white" aria-label="Connect With Me">
      
      {/* Footer Marquee Banner */}
      <div className="relative overflow-hidden pt-[clamp(4rem,10vw,8rem)] pb-[clamp(2.5rem,6vw,4.5rem)]">
        <div className="footer-marquee pointer-events-none absolute inset-0 flex items-center opacity-10" aria-hidden="true">
          <div className="marquee-track flex whitespace-nowrap" style={{ ["--marquee-duration" as any]: "35s" }}>
            {[...Array(4)].map((_, idx) => (
              <span
                key={idx}
                className="display inline-block text-[clamp(2.5rem,8vw,10rem)] tracking-[-0.03em] px-8 text-white"
              >
                NEHEMIAH NESANATHAN &bull; UNAI TECH &bull; CEO &bull;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 text-white text-xs font-black tracking-widest uppercase mb-4 border border-white/25">
            {CONNECT_WITH_ME.badge}
          </div>

          {/* Oversized Connect Headline */}
          <div>
            <a
              href={`mailto:${CONNECT_WITH_ME.email}`}
              onClick={() => sound.playPaperRustle()}
              className="connect-cta display m-0 text-[clamp(2.8rem,7vw,8.5rem)] tracking-[-0.045em] leading-[0.92] text-white hover:text-amber-300 transition-colors"
            >
              <span>
                {CONNECT_WITH_ME.headline}
                <svg className="connect-cta__arrow w-[0.65em] h-[0.65em] inline-block ml-3" viewBox="0 0 24 16" fill="none">
                  <path d="M1 8 C 8 7.7, 15 8.3, 22 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M15.5 2 C 17.6 4, 19.8 6.4, 22 8 C 19.8 9.6, 17.6 12, 15.5 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <p className="eyebrow m-0 mt-6 text-white/90 text-xs sm:text-sm tracking-[0.2em] font-extrabold">
            {CONNECT_WITH_ME.lead.toUpperCase()}
          </p>

          {/* Open Conversation Topics Chips */}
          <div className="mt-4 flex flex-wrap gap-2 max-w-4xl">
            {CONNECT_WITH_ME.topics.map((topic, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-black border border-white/40 shadow-sm hover:bg-black hover:text-white transition-colors"
              >
                &bull; {topic}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-black/40 text-white border-2 border-white/20 max-w-2xl shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 backdrop-blur-xs">
            <div>
              <p className="eyebrow text-xs text-amber-300 font-bold mb-1">
                {CONNECT_WITH_ME.ctaHeadline}
              </p>
              <p className="display text-2xl sm:text-3xl font-black text-white">
                {CONNECT_WITH_ME.ctaPunch}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenBooking();
              }}
              className="px-6 py-3 rounded-full bg-white text-[#ea431b] text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-md cursor-pointer shrink-0"
            >
              START A CONVERSATION &rarr;
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            <div className="p-4 rounded-xl bg-white text-black shadow-xl border border-white/40">
              <span className="eyebrow text-[10px] text-zinc-500 block mb-1 font-bold">EMAIL</span>
              <a
                href={`mailto:${CONNECT_WITH_ME.email}`}
                className="body-copy text-sm font-black text-black hover:text-[#ea431b] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#ea431b]" />
                <span>{CONNECT_WITH_ME.email}</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white text-black shadow-xl border border-white/40">
              <span className="eyebrow text-[10px] text-zinc-500 block mb-1 font-bold">PHONE</span>
              <a
                href={`tel:${CEO_PROFILE.contactPhone}`}
                className="body-copy text-sm font-black text-black hover:text-[#ea431b] transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#ea431b]" />
                <span>{CONNECT_WITH_ME.phone}</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white text-black shadow-xl border border-white/40">
              <span className="eyebrow text-[10px] text-zinc-500 block mb-1 font-bold">WEBSITE</span>
              <a
                href={`https://${CONNECT_WITH_ME.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="body-copy text-sm font-black text-black hover:text-[#ea431b] transition-colors inline-flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#ea431b]" />
                <span>{CONNECT_WITH_ME.website}</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white text-black shadow-xl border border-white/40">
              <span className="eyebrow text-[10px] text-zinc-500 block mb-1 font-bold">LINKEDIN</span>
              <a
                href={CEO_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="body-copy text-sm font-black text-black hover:text-[#ea431b] transition-colors inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#ea431b]" />
                <span>{CONNECT_WITH_ME.linkedin}</span>
              </a>
            </div>
          </div>

          {/* Socials & Signature Row */}
          <div className="mt-[clamp(3rem,8vw,6rem)] flex flex-wrap items-end justify-between gap-6 pt-8 border-t border-white/20">
            <div className="flex flex-col items-start gap-1">
              <span className="block h-[3px] w-10 bg-white rounded-full" aria-hidden="true" />
              <span className="text-white font-hand text-3xl sm:text-4xl font-bold leading-tight">
                {CEO_PROFILE.name}
              </span>
              <span className="eyebrow text-xs text-white/90 tracking-widest font-black">
                {CEO_PROFILE.subtitle}
              </span>
              <p className="font-serif-italic text-sm text-amber-200 font-bold mt-1">
                Building Businesses. Engineering Intelligence. Creating What's Next.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadDossier}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white bg-white text-xs font-black uppercase tracking-wider text-[#ea431b] hover:bg-black hover:text-white hover:border-black transition-all shadow-md cursor-pointer"
                title="Print or Save Executive Portfolio"
              >
                <Download className="w-3.5 h-3.5 text-[#ea431b]" />
                <span>EXPORT PORTFOLIO DOSSIER</span>
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
            fill="#140502"
          />
        </svg>
      </div>

      {/* Noir Copyright Strip */}
      <div className="bg-[#140502] text-white px-[max(1.5rem,7vw)] py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-t border-white/10">
        <div>
          <p className="m-0 text-white font-bold">
            {CEO_PROFILE.name} &bull; {CEO_PROFILE.subtitle}
          </p>
          <p className="m-0 text-white/60 text-[11px] mt-0.5">
            &copy; 2026 UNAI TECH &bull; All Rights Reserved.
          </p>
        </div>
        <p className="m-0 text-amber-300 font-semibold text-xs">
          Building Businesses &bull; Engineering Intelligence &bull; Creating What's Next
        </p>
      </div>
    </footer>
  );
};
