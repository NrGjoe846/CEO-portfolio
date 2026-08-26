import React from "react";
import {
  ABOUT_ME_DATA,
  LEADERSHIP_PHILOSOPHY,
  WHAT_I_BELIEVE,
  MY_VISION_DATA
} from "../data/portfolioData";
import { sound } from "../utils/audio";
import {
  Sparkles,
  Eye,
  Zap,
  Lightbulb,
  Users,
  Clock,
  Cpu,
  Brain,
  Shield,
  Layers,
  CheckCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";

interface ExecutiveIntroProps {
  onOpenAdvisorWithPrompt: (prompt: string) => void;
}

export const ExecutiveIntro: React.FC<ExecutiveIntroProps> = ({ onOpenAdvisorWithPrompt }) => {
  const principleIcons = [
    <Eye className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Lightbulb className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <Clock className="w-5 h-5" />
  ];

  const visionIcons = [
    <Brain className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <Sparkles className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />
  ];

  return (
    <div className="relative w-full">
      {/* SECTION 1: ABOUT ME */}
      <section
        id="about"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0a1226] border-b border-cyan-500/15 text-white"
        aria-label="About Nehemiah Nesanathan"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Column 1: Portrait & Operating Banner */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                    {ABOUT_ME_DATA.badge}
                  </span>
                </div>
                <h2 className="display m-0 text-white text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.04em] leading-[0.95]">
                  ABOUT ME
                </h2>
              </div>

              {/* Portrait Frame */}
              <div className="relative mt-2">
                <div className="relative overflow-hidden rounded-2xl bg-black/40 border-2 border-cyan-500/30 shadow-2xl group">
                  <img
                    src="/images/nehemiah-hero.png"
                    alt="Nehemiah Nesanathan portrait"
                    className="w-full aspect-[4/5] object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-[#0a1226]/90 text-white px-3.5 py-1.5 rounded-md border border-cyan-400/40 shadow-lg backdrop-blur-xs">
                    <p className="eyebrow m-0 text-[10px] tracking-widest font-black text-cyan-300">
                      CEO &bull; UNAI TECH
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#060b19]/95 via-[#060b19]/70 to-transparent p-5 text-white">
                    <p className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">CORE MAXIM</p>
                    <p className="font-hand text-lg sm:text-xl text-white mt-0.5 font-bold leading-snug">
                      "{ABOUT_ME_DATA.coreMaxim}"
                    </p>
                  </div>
                </div>

                {/* Floating Pill */}
                <div className="absolute -bottom-4 -left-3 bg-[#0a1226] text-white border-2 border-cyan-500/40 p-3 rounded-xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-black text-xs shadow-[0_0_12px_rgba(56,189,248,0.8)]">
                    AI
                  </div>
                  <div>
                    <p className="eyebrow text-[9px] text-cyan-300 font-bold">FOCUS</p>
                    <p className="display text-xs font-black text-white">INTELLIGENT SYSTEMS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: About Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4">
              <div>
                <span className="eyebrow text-xs font-black text-cyan-300 tracking-widest block mb-2">
                  THE FOUNDATIONAL VISION
                </span>
                <h3 className="display text-2xl sm:text-4xl font-black text-white leading-tight">
                  {ABOUT_ME_DATA.headline}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-black/30 border border-cyan-500/20 backdrop-blur-xs">
                <p className="eyebrow text-xs text-cyan-200/80 font-bold mb-2">
                  {ABOUT_ME_DATA.leadBelief}
                </p>
                <p className="body-copy text-lg sm:text-xl font-black text-white leading-snug">
                  "{ABOUT_ME_DATA.coreMaxim}"
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                <p>{ABOUT_ME_DATA.journeyText}</p>
                <p>{ABOUT_ME_DATA.currentWork}</p>
                <p className="font-bold text-white bg-black/30 p-4 rounded-xl border border-cyan-500/20 shadow-2xs backdrop-blur-xs">
                  {ABOUT_ME_DATA.unaiTechVision}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onOpenAdvisorWithPrompt("Tell me more about Nehemiah's background and vision for building beyond conventional technology at UNAI TECH.");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38bdf8] text-[#0a1226] text-xs font-black uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ASK NEHEMIAH ABOUT HIS JOURNEY</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: MY LEADERSHIP */}
      <section
        id="leadership"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0e1a38] border-b border-cyan-500/15 text-white"
        aria-label="Leadership Philosophy"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-cyan-500/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                  {LEADERSHIP_PHILOSOPHY.badge}
                </span>
              </div>
              <h2 className="display m-0 text-white text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.04em] leading-none">
                {LEADERSHIP_PHILOSOPHY.headline}
              </h2>
            </div>
            <p className="eyebrow text-xs text-cyan-200/80 max-w-sm font-bold">
              Being a CEO is not simply about managing an organization. It is about execution, direction, and building scalable systems.
            </p>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="mt-8">
            <h3 className="eyebrow text-xs font-black text-cyan-400 tracking-widest uppercase mb-4">
              WHAT BEING A CEO IS TRULY ABOUT:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {LEADERSHIP_PHILOSOPHY.coreResponsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#0a1226]/80 border border-cyan-500/20 shadow-2xs hover:border-cyan-400 transition-all backdrop-blur-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-cyan-400 text-[#0a1226] text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="body-copy font-extrabold text-sm sm:text-base text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Leadership Principles */}
          <div className="mt-12">
            <h3 className="section-head text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              {LEADERSHIP_PHILOSOPHY.principlesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {LEADERSHIP_PHILOSOPHY.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0a1226] border border-cyan-500/20 shadow-md hover:border-cyan-400 hover:bg-[#060b19] transition-all flex flex-col justify-between backdrop-blur-xs"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-3">
                      {principleIcons[idx % principleIcons.length]}
                    </div>
                    <span className="eyebrow text-[10px] text-cyan-400 font-bold block mb-1">
                      PRINCIPLE 0{idx + 1}
                    </span>
                    <h4 className="display text-lg font-black text-white mb-2">
                      {pr.title}
                    </h4>
                  </div>
                  <p className="body-copy text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT I BELIEVE */}
      <section
        id="beliefs"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0a1226] border-b border-cyan-500/15 text-white"
        aria-label="What I Believe"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1a38] text-cyan-300 text-xs font-black tracking-widest uppercase mb-3 border border-cyan-500/30">
              {WHAT_I_BELIEVE.badge}
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em] leading-tight">
              Don't Add AI to Software. <br />
              <span className="text-cyan-300">Build Software Around Intelligence.</span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1a38] border border-cyan-500/20 shadow-md flex flex-col justify-between backdrop-blur-xs">
              <div>
                <span className="eyebrow text-xs font-black text-cyan-300/70 tracking-wider block mb-2">
                  LEGACY PARADIGM
                </span>
                <h3 className="display text-xl font-bold text-white mb-3">
                  Traditional Software
                </h3>
                <p className="body-copy text-base text-white/85 font-medium leading-relaxed">
                  {WHAT_I_BELIEVE.traditionalVsNative.traditional}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-cyan-500/15 text-xs font-bold text-cyan-200/60">
                Rigid logic &bull; Fixed branching &bull; Zero contextual reasoning
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white text-black shadow-xl flex flex-col justify-between border border-cyan-400/40">
              <div>
                <span className="eyebrow text-xs font-black text-[#1d4ed8] tracking-wider block mb-2">
                  AI-NATIVE PARADIGM
                </span>
                <h3 className="display text-xl font-black text-[#0a1226] mb-3">
                  AI-Native Systems
                </h3>
                <p className="body-copy text-base text-zinc-800 font-bold leading-relaxed">
                  {WHAT_I_BELIEVE.traditionalVsNative.aiNative}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-extrabold text-[#1d4ed8]">
                Autonomous action &bull; Continuous adaptation &bull; Deep context
              </div>
            </div>
          </div>

          {/* Architectural Formula Banner */}
          <div className="mt-10 max-w-4xl mx-auto p-6 rounded-2xl bg-[#060b19] text-white border-2 border-cyan-500/30 text-center shadow-2xl">
            <span className="eyebrow text-[10px] text-cyan-400 tracking-widest font-black uppercase block mb-2">
              MY ARCHITECTURAL APPROACH
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 display text-lg sm:text-2xl font-black text-white">
              <span>Intelligence</span>
              <span className="text-cyan-400">&rarr;</span>
              <span>Architecture</span>
              <span className="text-cyan-400">&rarr;</span>
              <span>Software</span>
              <span className="text-cyan-400">&rarr;</span>
              <span className="text-cyan-300">Autonomous Operations</span>
            </div>
            <p className="body-copy text-xs sm:text-sm text-white/80 mt-4 font-medium max-w-2xl mx-auto">
              "{WHAT_I_BELIEVE.closingNote}"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: MY VISION */}
      <section
        id="vision"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0e1a38] text-white border-b border-cyan-500/15"
        aria-label="My Vision"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1226] text-cyan-300 text-xs font-black tracking-widest uppercase mb-3 border border-cyan-500/30">
              {MY_VISION_DATA.badge}
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              {MY_VISION_DATA.headline}
            </h2>
            <p className="body-copy text-base text-white/85 mt-3 font-medium">
              {MY_VISION_DATA.lead}
            </p>
          </div>

          {/* 5 Vision Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MY_VISION_DATA.pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0a1226] border border-cyan-500/20 shadow-md hover:border-cyan-400 hover:bg-[#060b19] transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-3">
                    {visionIcons[idx % visionIcons.length]}
                  </div>
                  <h3 className="display text-base font-black text-white mb-2 tracking-wider">
                    {pil.title}
                  </h3>
                </div>
                <p className="body-copy text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                  {pil.description}
                </p>
              </div>
            ))}
          </div>

          {/* Blockquote Maxim */}
          <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl bg-white text-black border-2 border-cyan-400/40 text-center shadow-2xl">
            <span className="eyebrow text-xs text-zinc-600 font-bold block mb-1">
              THE NORTH STAR
            </span>
            <p className="display text-xl sm:text-2xl font-black text-[#1d4ed8]">
              "{MY_VISION_DATA.visionMaxim}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
