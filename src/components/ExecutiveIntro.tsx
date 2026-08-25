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
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] border-b border-[rgba(73,84,250,0.15)]"
        aria-label="About Nehemiah Nesanathan"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Column 1: Portrait & Operating Banner */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-8 bg-[rgba(73,84,250,1)] rounded-full shadow-[0_0_8px_rgba(73,84,250,0.5)]" />
                  <span className="eyebrow text-xs tracking-widest text-[#4b4661] font-bold">
                    {ABOUT_ME_DATA.badge}
                  </span>
                </div>
                <h2 className="display m-0 text-[#060010] text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.04em] leading-[0.95]">
                  ABOUT ME
                </h2>
              </div>

              {/* Portrait Frame */}
              <div className="relative mt-2">
                <div className="relative overflow-hidden rounded-2xl bg-[#060010] border-2 border-[#392e4e] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                    alt="Nehemiah Nesanathan portrait"
                    className="w-full aspect-[4/5] object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 text-[#060010] px-3.5 py-1.5 rounded-md border border-[rgba(73,84,250,0.4)] shadow-lg backdrop-blur-xs">
                    <p className="eyebrow m-0 text-[10px] tracking-widest font-black text-[rgba(73,84,250,1)]">
                      CEO &bull; UNAI TECH
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#060010] via-[#060010]/80 to-transparent p-5 text-white">
                    <p className="eyebrow text-xs tracking-widest text-[rgba(73,84,250,1)] font-bold">CORE MAXIM</p>
                    <p className="font-hand text-lg sm:text-xl text-white mt-0.5 font-bold leading-snug">
                      "{ABOUT_ME_DATA.coreMaxim}"
                    </p>
                  </div>
                </div>

                {/* Floating Pill */}
                <div className="absolute -bottom-4 -left-3 bg-white border-2 border-[#392e4e] p-3 rounded-xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[rgba(73,84,250,1)] text-white flex items-center justify-center font-black text-xs shadow-[0_0_12px_rgba(73,84,250,0.6)]">
                    AI
                  </div>
                  <div>
                    <p className="eyebrow text-[9px] text-[#4b4661] font-bold">FOCUS</p>
                    <p className="display text-xs font-black text-[#060010]">INTELLIGENT SYSTEMS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: About Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4">
              <div>
                <span className="eyebrow text-xs font-black text-[rgba(73,84,250,1)] tracking-widest block mb-2">
                  THE FOUNDATIONAL VISION
                </span>
                <h3 className="display text-2xl sm:text-4xl font-black text-[#060010] leading-tight">
                  {ABOUT_ME_DATA.headline}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-[rgba(73,84,250,0.06)] border border-[rgba(73,84,250,0.25)]">
                <p className="eyebrow text-xs text-[#4b4661] font-bold mb-2">
                  {ABOUT_ME_DATA.leadBelief}
                </p>
                <p className="body-copy text-lg sm:text-xl font-black text-[#060010] leading-snug">
                  "{ABOUT_ME_DATA.coreMaxim}"
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4b4661] font-medium leading-relaxed">
                <p>{ABOUT_ME_DATA.journeyText}</p>
                <p>{ABOUT_ME_DATA.currentWork}</p>
                <p className="font-bold text-[#060010] bg-white p-4 rounded-xl border border-[rgba(73,84,250,0.2)] shadow-2xs">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#060010] text-white text-xs font-black uppercase tracking-wider hover:bg-[rgba(73,84,250,1)] transition-colors cursor-pointer shadow-sm"
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
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#fafafa] border-b border-[rgba(73,84,250,0.15)]"
        aria-label="Leadership Philosophy"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#060010]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-8 bg-[rgba(73,84,250,1)] rounded-full shadow-[0_0_8px_rgba(73,84,250,0.5)]" />
                <span className="eyebrow text-xs tracking-widest text-[#4b4661] font-bold">
                  {LEADERSHIP_PHILOSOPHY.badge}
                </span>
              </div>
              <h2 className="display m-0 text-[#060010] text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.04em] leading-none">
                {LEADERSHIP_PHILOSOPHY.headline}
              </h2>
            </div>
            <p className="eyebrow text-xs text-[#4b4661] max-w-sm font-bold">
              Being a CEO is not simply about managing an organization. It is about execution, direction, and building scalable systems.
            </p>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="mt-8">
            <h3 className="eyebrow text-xs font-black text-[rgba(73,84,250,1)] tracking-widest uppercase mb-4">
              WHAT BEING A CEO IS TRULY ABOUT:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {LEADERSHIP_PHILOSOPHY.coreResponsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[rgba(73,84,250,0.18)] shadow-2xs hover:border-[rgba(73,84,250,0.8)] transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-[rgba(73,84,250,1)] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="body-copy font-extrabold text-sm sm:text-base text-[#060010]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Leadership Principles */}
          <div className="mt-12">
            <h3 className="section-head text-[#060010] mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[rgba(73,84,250,1)]" />
              {LEADERSHIP_PHILOSOPHY.principlesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {LEADERSHIP_PHILOSOPHY.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border-2 border-[#060010] shadow-sm hover:border-[rgba(73,84,250,1)] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] flex items-center justify-center mb-3">
                      {principleIcons[idx % principleIcons.length]}
                    </div>
                    <span className="eyebrow text-[10px] text-gray-400 font-bold block mb-1">
                      PRINCIPLE 0{idx + 1}
                    </span>
                    <h4 className="display text-lg font-black text-[#060010] mb-2">
                      {pr.title}
                    </h4>
                  </div>
                  <p className="body-copy text-xs sm:text-sm text-[#4b4661] font-medium leading-relaxed">
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
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] border-b border-[rgba(73,84,250,0.15)]"
        aria-label="What I Believe"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] text-xs font-black tracking-widest uppercase mb-3 border border-[rgba(73,84,250,0.3)]">
              {WHAT_I_BELIEVE.badge}
            </div>
            <h2 className="display m-0 text-[#060010] text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em] leading-tight">
              Don't Add AI to Software. <br />
              <span className="text-[rgba(73,84,250,1)]">Build Software Around Intelligence.</span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="eyebrow text-xs font-black text-gray-400 tracking-wider block mb-2">
                  LEGACY PARADIGM
                </span>
                <h3 className="display text-xl font-bold text-[#060010] mb-3">
                  Traditional Software
                </h3>
                <p className="body-copy text-base text-[#4b4661] font-medium leading-relaxed">
                  {WHAT_I_BELIEVE.traditionalVsNative.traditional}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-gray-400">
                Rigid logic &bull; Fixed branching &bull; Zero contextual reasoning
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[rgba(73,84,250,0.06)] border-2 border-[rgba(73,84,250,0.6)] shadow-md flex flex-col justify-between">
              <div>
                <span className="eyebrow text-xs font-black text-[rgba(73,84,250,1)] tracking-wider block mb-2">
                  AI-NATIVE PARADIGM
                </span>
                <h3 className="display text-xl font-black text-[#060010] mb-3">
                  AI-Native Systems
                </h3>
                <p className="body-copy text-base text-[#060010] font-bold leading-relaxed">
                  {WHAT_I_BELIEVE.traditionalVsNative.aiNative}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[rgba(73,84,250,0.2)] text-xs font-extrabold text-[rgba(73,84,250,1)]">
                Autonomous action &bull; Continuous adaptation &bull; Deep context
              </div>
            </div>
          </div>

          {/* Architectural Formula Banner */}
          <div className="mt-10 max-w-4xl mx-auto p-6 rounded-2xl bg-[#060010] text-white border-2 border-[#392e4e] text-center shadow-xl">
            <span className="eyebrow text-[10px] text-[rgba(73,84,250,1)] tracking-widest font-black uppercase block mb-2">
              MY ARCHITECTURAL APPROACH
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 display text-lg sm:text-2xl font-black text-white">
              <span>Intelligence</span>
              <span className="text-[rgba(73,84,250,1)]">&rarr;</span>
              <span>Architecture</span>
              <span className="text-[rgba(73,84,250,1)]">&rarr;</span>
              <span>Software</span>
              <span className="text-[rgba(73,84,250,1)]">&rarr;</span>
              <span className="text-[#b0b8ff]">Autonomous Operations</span>
            </div>
            <p className="body-copy text-xs sm:text-sm text-gray-300 mt-4 font-medium max-w-2xl mx-auto">
              "{WHAT_I_BELIEVE.closingNote}"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: MY VISION */}
      <section
        id="vision"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#fafafa]"
        aria-label="My Vision"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060010] text-white text-xs font-black tracking-widest uppercase mb-3 border border-[rgba(73,84,250,0.5)]">
              {MY_VISION_DATA.badge}
            </div>
            <h2 className="display m-0 text-[#060010] text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              {MY_VISION_DATA.headline}
            </h2>
            <p className="body-copy text-base text-[#4b4661] mt-3 font-medium">
              {MY_VISION_DATA.lead}
            </p>
          </div>

          {/* 5 Vision Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MY_VISION_DATA.pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[rgba(73,84,250,0.2)] shadow-2xs hover:border-[rgba(73,84,250,0.8)] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] flex items-center justify-center mb-3">
                    {visionIcons[idx % visionIcons.length]}
                  </div>
                  <h3 className="display text-base font-black text-[#060010] mb-2 tracking-wider">
                    {pil.title}
                  </h3>
                </div>
                <p className="body-copy text-xs sm:text-sm text-[#4b4661] font-medium leading-relaxed">
                  {pil.description}
                </p>
              </div>
            ))}
          </div>

          {/* Blockquote Maxim */}
          <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl bg-white border-2 border-[rgba(73,84,250,0.8)] text-center shadow-md">
            <span className="eyebrow text-xs text-[#4b4661] font-bold block mb-1">
              THE NORTH STAR
            </span>
            <p className="display text-xl sm:text-2xl font-black text-[rgba(73,84,250,1)]">
              "{MY_VISION_DATA.visionMaxim}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
