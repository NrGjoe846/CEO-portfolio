import React from "react";
import { TECH_THINKING, TECH_MOAT, INDUSTRIES_DATA } from "../data/portfolioData";
import { sound } from "../utils/audio";
import { 
  GraduationCap, 
  Building2, 
  Landmark, 
  Coins, 
  HeartPulse, 
  ShoppingBag, 
  Server, 
  ArrowDown, 
  Check, 
  ShieldCheck, 
  Layers,
  Sparkles
} from "lucide-react";

export const TechThinkingAndIndustries: React.FC = () => {
  const getIndustryIcon = (title: string) => {
    switch (title) {
      case "EDUCATION": return <GraduationCap className="w-5 h-5" />;
      case "ENTERPRISE": return <Building2 className="w-5 h-5" />;
      case "GOVERNMENT": return <Landmark className="w-5 h-5" />;
      case "FINANCE": return <Coins className="w-5 h-5" />;
      case "HEALTHCARE": return <HeartPulse className="w-5 h-5" />;
      case "COMMERCE": return <ShoppingBag className="w-5 h-5" />;
      case "INFRASTRUCTURE": return <Server className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div id="services" className="relative w-full">
      {/* SECTION 1: HOW I THINK ABOUT TECHNOLOGY & MOAT */}
      <section
        id="tech-moat"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#d83d16] text-white border-b border-white/15"
        aria-label="Technology Thinking & Moat"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Technology Evolution Waterfall */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 text-white text-xs font-black tracking-widest uppercase mb-3 border border-white/20">
                  {TECH_THINKING.badge}
                </div>
                <h2 className="display m-0 text-white text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] leading-tight">
                  {TECH_THINKING.headline}
                </h2>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                {TECH_THINKING.evolutionSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                        idx === TECH_THINKING.evolutionSteps.length - 1
                          ? "bg-white text-[#ea431b] border-white shadow-xl"
                          : "bg-black/25 text-white border-white/15 backdrop-blur-xs"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                            idx === TECH_THINKING.evolutionSteps.length - 1
                              ? "bg-[#ea431b] text-white"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="display text-base font-black">{step.name}</span>
                      </div>
                      <span className={`text-xs font-semibold ${idx === TECH_THINKING.evolutionSteps.length - 1 ? "text-zinc-700" : "text-white/80"}`}>
                        {step.desc}
                      </span>
                    </div>

                    {idx < TECH_THINKING.evolutionSteps.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-white/80 my-1" />
                    )}
                  </div>
                ))}
              </div>

              <p className="body-copy text-sm sm:text-base text-white/90 font-medium leading-relaxed mt-2">
                {TECH_THINKING.conclusion}
              </p>
            </div>

            {/* Right Column: Technology Moat */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0403] text-white text-xs font-black tracking-widest uppercase mb-3 border border-white/20">
                  {TECH_MOAT.badge}
                </div>
                <h3 className="display text-2xl sm:text-3xl font-black text-white leading-snug">
                  {TECH_MOAT.title}
                </h3>
              </div>

              <p className="body-copy text-base text-white/85 font-medium leading-relaxed">
                {TECH_MOAT.lead}
              </p>

              {/* Moat Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TECH_MOAT.pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/30 border border-white/20 text-center shadow-md hover:border-white/60 hover:bg-black/40 transition-all flex flex-col items-center justify-center gap-2 backdrop-blur-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/15 text-amber-300 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="display text-xs font-black text-white">
                      {pil}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white text-black border-2 border-white text-center shadow-xl mt-2">
                <p className="font-serif-italic text-lg text-[#ea431b] font-bold">
                  "{TECH_MOAT.punchline}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRIES OF IMPACT */}
      <section
        id="industries"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#ea431b] text-white border-b border-white/15"
        aria-label="Industries Where Intelligent Systems Create Impact"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 text-white text-xs font-black tracking-widest uppercase mb-3 border border-white/25">
              INDUSTRIES
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              Where Intelligent Systems Can Create Impact
            </h2>
            <p className="body-copy text-base text-white/85 mt-3 font-medium">
              Transforming major sectors through contextual intelligence, autonomous operations, and decision systems.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/30 border border-white/20 shadow-md hover:border-white/60 hover:bg-black/40 transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/15 text-amber-300 flex items-center justify-center mb-3">
                    {getIndustryIcon(ind.title)}
                  </div>
                  <h3 className="display text-base font-black text-white mb-2 tracking-wider">
                    {ind.title}
                  </h3>
                </div>
                <p className="body-copy text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
