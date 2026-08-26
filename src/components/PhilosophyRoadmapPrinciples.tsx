import React from "react";
import { 
  BUSINESS_PHILOSOPHY, 
  APPROACH_CYCLE, 
  LEADERSHIP_ORG, 
  ROADMAP_DATA, 
  THE_BIG_IDEA, 
  FROM_CEO_TO_BUILDER,
  CEO_PRINCIPLES,
  BEYOND_BUSINESS,
  CURRENT_FOCUS,
  PERSONAL_MISSION
} from "../data/portfolioData";
import { sound } from "../utils/audio";
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Compass, 
  Calendar, 
  Network, 
  Target, 
  ArrowRight, 
  Heart, 
  Users, 
  Award,
  Zap
} from "lucide-react";

export const PhilosophyRoadmapPrinciples: React.FC = () => {
  return (
    <div className="relative w-full text-white">
      {/* 1. BUSINESS PHILOSOPHY & APPROACH */}
      <section
        id="business-philosophy"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0a1226] border-b border-cyan-500/15"
        aria-label="Business Philosophy & Approach"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1a38] text-cyan-300 text-xs font-black tracking-widest uppercase mb-3 border border-cyan-500/30">
              {BUSINESS_PHILOSOPHY.badge}
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              {BUSINESS_PHILOSOPHY.headline}
            </h2>
          </div>

          {/* 5 Stages of Scaling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {BUSINESS_PHILOSOPHY.stages.map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl bg-[#0e1a38] border border-cyan-500/20 shadow-md hover:border-cyan-400 hover:bg-[#11224d] transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <span className="display text-2xl font-black text-cyan-400 block mb-1">
                    {st.step}
                  </span>
                  <h3 className="display text-base font-black text-white mb-2">
                    {st.title}
                  </h3>
                </div>
                <p className="body-copy text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cyclical Approach Flow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1a38]/80 border border-cyan-500/20 shadow-2xl backdrop-blur-xs">
            <h3 className="eyebrow text-xs text-cyan-300 tracking-widest font-black uppercase text-center mb-6">
              THE 5-STEP CONTINUOUS ITERATION CYCLE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {APPROACH_CYCLE.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0a1226] border border-cyan-500/20 text-center flex flex-col items-center justify-between gap-2"
                >
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-black">
                    0{idx + 1}
                  </span>
                  <h4 className="display text-sm font-black text-white">{step.title}</h4>
                  <p className="body-copy text-xs text-white/75 font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & ORGANIZATION */}
      <section
        id="leadership-org"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0e1a38] border-b border-cyan-500/15"
        aria-label="Leadership & Multidisciplinary Organization"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1226] text-cyan-300 text-xs font-black tracking-widest uppercase mb-3 border border-cyan-500/30">
              LEADERSHIP & ORGANIZATION
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              Building a Multidisciplinary Technology Organization
            </h2>
            <p className="body-copy text-base text-white/85 mt-3 font-medium">
              UNAI TECH brings together deep capabilities across five core pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEADERSHIP_ORG.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0a1226] border border-cyan-500/20 shadow-md hover:border-cyan-400 hover:bg-[#060b19] transition-all backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="display text-lg font-black text-white mb-3">
                  {pillar.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#0e1a38] text-cyan-200 border border-cyan-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE ROAD AHEAD: 2026 -> 2030+ */}
      <section
        id="roadmap"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0a1226] border-b border-cyan-500/15"
        aria-label="The Road Ahead 2026 to 2030"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-cyan-500/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                  THE ROAD AHEAD
                </span>
              </div>
              <h2 className="display m-0 text-white text-[clamp(2.5rem,5.5vw,5.5rem)] tracking-[-0.04em]">
                2026 &rarr; 2030+
              </h2>
            </div>
            <p className="eyebrow text-xs text-cyan-200/80 max-w-sm font-bold">
              A phased trajectory building toward globally scalable intelligence infrastructure.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ROADMAP_DATA.map((milestone, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 flex flex-col justify-between transition-all ${
                  idx === ROADMAP_DATA.length - 1
                    ? "bg-[#0e1a38] text-white border-cyan-400 shadow-2xl"
                    : "bg-white text-black border-cyan-400/30 shadow-xl hover:-translate-y-1"
                }`}
              >
                <div>
                  <span
                    className={`display text-2xl font-black block mb-1 ${
                      idx === ROADMAP_DATA.length - 1 ? "text-cyan-400" : "text-[#1d4ed8]"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <h3
                    className={`display text-lg font-black mb-4 ${
                      idx === ROADMAP_DATA.length - 1 ? "text-white" : "text-black"
                    }`}
                  >
                    {milestone.title}
                  </h3>

                  <ul className="space-y-2">
                    {milestone.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            idx === ROADMAP_DATA.length - 1 ? "bg-cyan-400" : "bg-[#1d4ed8]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm font-medium ${
                            idx === ROADMAP_DATA.length - 1 ? "text-white/80" : "text-zinc-700"
                          }`}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE BIG IDEA & FROM CEO TO BUILDER */}
      <section
        id="the-big-idea"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0e1a38] text-white border-b border-cyan-500/15"
        aria-label="The Big Idea"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* The Big Idea Left */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1226] text-cyan-300 text-xs font-black tracking-widest uppercase border border-cyan-500/40 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                {THE_BIG_IDEA.badge}
              </div>

              <h2 className="display m-0 text-white text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.04em] leading-tight">
                {THE_BIG_IDEA.headline}
              </h2>

              <p className="body-copy text-base sm:text-lg text-white/85 font-medium">
                {THE_BIG_IDEA.lead}
              </p>

              {/* 5 Big Idea Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {THE_BIG_IDEA.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-[#0a1226] border border-cyan-500/20">
                    <span className="display text-sm font-bold text-cyan-300 block mb-0.5">
                      {cap.name}
                    </span>
                    <span className="text-xs text-white/75 font-medium">
                      {cap.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Across items chips */}
              <div className="pt-2">
                <p className="eyebrow text-xs text-cyan-300/70 tracking-wider uppercase mb-2">
                  ACROSS ALL TOUCHPOINTS:
                </p>
                <div className="flex flex-wrap gap-2">
                  {THE_BIG_IDEA.across.map((ac, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-200 border border-cyan-500/25"
                    >
                      {ac}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* From CEO to Builder Right Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0a1226] border-2 border-cyan-500/40 shadow-2xl flex flex-col justify-between gap-6 backdrop-blur-xs">
              <div>
                <span className="eyebrow text-xs text-cyan-300 tracking-widest font-black uppercase block mb-2">
                  {FROM_CEO_TO_BUILDER.badge}
                </span>
                <h3 className="display text-2xl sm:text-3xl font-black text-white mb-4">
                  {FROM_CEO_TO_BUILDER.headline}
                </h3>
                <div className="space-y-3 text-sm text-white/85 font-medium leading-relaxed">
                  {FROM_CEO_TO_BUILDER.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Evolution list */}
              <div className="p-4 rounded-xl bg-[#060b19] border border-cyan-500/20 space-y-2">
                <p className="eyebrow text-[10px] text-cyan-300/70 font-bold uppercase tracking-wider">
                  THE STRATEGIC AMBITION:
                </p>
                {FROM_CEO_TO_BUILDER.evolution.map((ev, eIdx) => (
                  <div key={eIdx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    <span>{ev}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MY CEO PRINCIPLES & BEYOND BUSINESS */}
      <section
        id="ceo-principles"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#0a1226] border-b border-cyan-500/15"
        aria-label="CEO Principles & Beyond Business"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          {/* CEO Principles Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1a38] text-cyan-300 text-xs font-black tracking-widest uppercase mb-3 border border-cyan-500/30">
              MY CEO PRINCIPLES
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              The Rules I Build By
            </h2>
          </div>

          {/* 6 CEO Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CEO_PRINCIPLES.map((pr, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1a38] border border-cyan-500/20 shadow-md hover:border-cyan-400 hover:bg-[#11224d] transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <span className="eyebrow text-xs font-black text-cyan-300 block mb-1">
                    PRINCIPLE #{idx + 1}
                  </span>
                  <h3 className="display text-xl font-black text-white mb-2">
                    {pr.title}
                  </h3>
                </div>
                <p className="body-copy text-sm text-white/80 font-medium leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>

          {/* Beyond Business & Current Focus Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Beyond Business */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0e1a38] border border-cyan-500/20 shadow-md flex flex-col justify-between backdrop-blur-xs">
              <div>
                <span className="eyebrow text-xs font-black text-cyan-300 tracking-widest uppercase block mb-2">
                  {BEYOND_BUSINESS.badge}
                </span>
                <h3 className="display text-2xl sm:text-3xl font-black text-white mb-3">
                  {BEYOND_BUSINESS.headline}
                </h3>
                <p className="body-copy text-base text-white font-bold mb-3">
                  {BEYOND_BUSINESS.lead}
                </p>
                <div className="space-y-3 text-sm text-white/80 font-medium leading-relaxed">
                  <p>{BEYOND_BUSINESS.body1}</p>
                  <p>{BEYOND_BUSINESS.body2}</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white text-black border-2 border-cyan-400/40 shadow-xl flex flex-col justify-between">
              <div>
                <span className="eyebrow text-xs font-black text-[#1d4ed8] tracking-widest uppercase block mb-2">
                  {CURRENT_FOCUS.badge}
                </span>
                <h3 className="display text-2xl sm:text-3xl font-black text-black mb-4">
                  {CURRENT_FOCUS.headline}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {CURRENT_FOCUS.domains.map((dom, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-[#1d4ed8] border border-blue-200"
                    >
                      {dom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-center">
                <span className="eyebrow text-[10px] text-zinc-600 font-bold block mb-1">
                  THE DRIVING QUESTION
                </span>
                <p className="display text-base sm:text-lg font-black text-[#1d4ed8]">
                  "{CURRENT_FOCUS.driverQuestion}"
                </p>
              </div>
            </div>
          </div>

          {/* Personal Mission Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#060b19] text-white border-2 border-cyan-500/30 text-center shadow-2xl">
            <span className="eyebrow text-xs text-cyan-300 tracking-widest font-black uppercase block mb-1">
              {PERSONAL_MISSION.badge}
            </span>
            <h3 className="display text-3xl sm:text-4xl font-black text-white mb-2">
              {PERSONAL_MISSION.headline}
            </h3>
            <p className="eyebrow text-xs sm:text-sm text-cyan-200 font-extrabold mb-4">
              {PERSONAL_MISSION.intersection}
            </p>
            <p className="body-copy text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto">
              "{PERSONAL_MISSION.body2}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
