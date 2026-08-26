import React from "react";
import { UNAI_TECH_DATA, WHAT_WE_ARE_BUILDING } from "../data/portfolioData";
import { sound } from "../utils/audio";
import { 
  Cpu, 
  Layers, 
  Network, 
  Terminal, 
  Cloud, 
  FlaskConical, 
  ArrowRight, 
  Sparkles,
  Bot,
  Database,
  BrainCircuit
} from "lucide-react";

interface UnaiTechSectionProps {
  onOpenAdvisorWithPrompt: (prompt: string) => void;
}

export const UnaiTechSection: React.FC<UnaiTechSectionProps> = ({ onOpenAdvisorWithPrompt }) => {
  const operatingIcons = [
    <BrainCircuit className="w-5 h-5" />,
    <Terminal className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
    <Bot className="w-5 h-5" />,
    <Cloud className="w-5 h-5" />,
    <FlaskConical className="w-5 h-5" />
  ];

  return (
    <section
      id="unai-tech"
      className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#d83d16] text-white overflow-hidden border-b border-white/15"
      aria-label="UNAI TECH Overview"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#ea431b]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#ea431b]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        
        {/* Section 1: UNAI TECH Core Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-white/15">
          
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ea431b]/20 text-white text-xs font-black tracking-widest uppercase border border-[#ea431b]/50 w-fit shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-amber-300" />
              {UNAI_TECH_DATA.badge}
            </div>

            <div>
              <p className="eyebrow text-xs sm:text-sm text-amber-300 font-extrabold tracking-widest uppercase mb-1">
                {UNAI_TECH_DATA.title}
              </p>
              <h2 className="display m-0 text-white text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.04em] leading-tight">
                {UNAI_TECH_DATA.subtitle}
              </h2>
            </div>

            <p className="body-copy text-base sm:text-lg text-white/85 font-medium leading-relaxed">
              {UNAI_TECH_DATA.description}
            </p>

            <div className="p-5 rounded-2xl bg-black/40 border-2 border-[#ea431b]/60 shadow-xl backdrop-blur-xs">
              <span className="eyebrow text-[10px] text-amber-300 tracking-widest font-black block mb-1">
                CORE PHILOSOPHY
              </span>
              <p className="font-serif-italic text-lg sm:text-xl text-white font-semibold leading-snug">
                "{UNAI_TECH_DATA.philosophy}"
              </p>
            </div>
          </div>

          {/* Operating Areas Grid */}
          <div className="lg:col-span-6">
            <h3 className="eyebrow text-xs font-black text-white/80 tracking-widest uppercase mb-4">
              THE COMPANY OPERATES ACROSS:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {UNAI_TECH_DATA.operatingAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/35 border border-white/15 hover:border-[#ea431b] hover:bg-black/50 transition-all flex items-center gap-3.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#ea431b]/25 text-white flex items-center justify-center shrink-0">
                    {operatingIcons[idx % operatingIcons.length]}
                  </div>
                  <span className="display text-sm font-bold text-white tracking-wide">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2: What We Are Building - Ecosystem Pipeline */}
        <div className="pt-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ea431b]/20 text-white text-xs font-black tracking-widest uppercase mb-3 border border-white/20">
              <Network className="w-3.5 h-3.5 text-amber-300" />
              {WHAT_WE_ARE_BUILDING.badge}
            </div>

            <h3 className="display text-3xl sm:text-5xl font-black text-white tracking-tight">
              {WHAT_WE_ARE_BUILDING.headline}
            </h3>

            <p className="body-copy text-sm sm:text-base text-white/80 mt-3 font-medium leading-relaxed">
              {WHAT_WE_ARE_BUILDING.lead}
            </p>
          </div>

          {/* Interactive Ecosystem Pipeline Flow */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/15 shadow-2xl backdrop-blur-xs">
            <p className="eyebrow text-xs text-amber-300 tracking-widest font-black uppercase text-center mb-6">
              THE REUSABLE INTELLIGENCE ARCHITECTURE PIPELINE
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {WHAT_WE_ARE_BUILDING.ecosystemPipeline.map((node, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-[#ea431b]/50 text-white text-xs sm:text-sm font-black tracking-wider flex items-center gap-2 shadow-sm hover:border-white hover:text-amber-200 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#ea431b]" />
                    <span>{node}</span>
                  </div>
                  {idx < WHAT_WE_ARE_BUILDING.ecosystemPipeline.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#ea431b] shrink-0 hidden sm:inline-block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-center text-xs sm:text-sm text-white/75 font-medium mt-6 max-w-2xl mx-auto">
              {WHAT_WE_ARE_BUILDING.closing}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
