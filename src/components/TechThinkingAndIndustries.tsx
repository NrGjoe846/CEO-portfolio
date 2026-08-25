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
    <div className="relative w-full">
      {/* SECTION 1: HOW I THINK ABOUT TECHNOLOGY & MOAT */}
      <section
        id="tech-moat"
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] bg-[#fafafa] border-b border-[rgba(73,84,250,0.15)]"
        aria-label="Technology Thinking & Moat"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Technology Evolution Waterfall */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[rgba(73,84,250,1)] text-xs font-black tracking-widest uppercase mb-3 border border-[rgba(73,84,250,0.3)]">
                  {TECH_THINKING.badge}
                </div>
                <h2 className="display m-0 text-[#060010] text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] leading-tight">
                  {TECH_THINKING.headline}
                </h2>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                {TECH_THINKING.evolutionSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                        idx === TECH_THINKING.evolutionSteps.length - 1
                          ? "bg-[rgba(73,84,250,1)] text-white border-[rgba(73,84,250,1)] shadow-md"
                          : "bg-white text-[#060010] border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                            idx === TECH_THINKING.evolutionSteps.length - 1
                              ? "bg-white text-[rgba(73,84,250,1)]"
                              : "bg-[#f0f0f0] text-[#060010]"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="display text-base font-black">{step.name}</span>
                      </div>
                      <span className={`text-xs font-semibold ${idx === TECH_THINKING.evolutionSteps.length - 1 ? "text-white/85" : "text-[#4b4661]"}`}>
                        {step.desc}
                      </span>
                    </div>

                    {idx < TECH_THINKING.evolutionSteps.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-[rgba(73,84,250,1)] my-1" />
                    )}
                  </div>
                ))}
              </div>

              <p className="body-copy text-sm sm:text-base text-[#4b4661] font-medium leading-relaxed mt-2">
                {TECH_THINKING.conclusion}
              </p>
            </div>

            {/* Right Column: Technology Moat */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060010] text-white text-xs font-black tracking-widest uppercase mb-3 border border-[rgba(73,84,250,0.5)]">
                  {TECH_MOAT.badge}
                </div>
                <h3 className="display text-2xl sm:text-3xl font-black text-[#060010] leading-snug">
                  {TECH_MOAT.title}
                </h3>
              </div>

              <p className="body-copy text-base text-[#4b4661] font-medium leading-relaxed">
                {TECH_MOAT.lead}
              </p>

              {/* Moat Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TECH_MOAT.pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[rgba(73,84,250,0.2)] text-center shadow-2xs hover:border-[rgba(73,84,250,0.8)] hover:shadow-md transition-all flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(73,84,250,0.1)] text-[rgba(73,84,250,1)] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="display text-xs font-black text-[#060010]">
                      {pil}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-[rgba(73,84,250,0.8)] text-center shadow-sm mt-2">
                <p className="font-serif-italic text-lg text-[#060010] font-bold">
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
        className="relative w-full pt-[clamp(3.5rem,8vh,6rem)] pb-[clamp(3.5rem,8vh,6rem)] border-b border-[rgba(73,84,250,0.15)]"
        aria-label="Industries Where Intelligent Systems Create Impact"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] text-xs font-black tracking-widest uppercase mb-3 border border-[rgba(73,84,250,0.3)]">
              INDUSTRIES
            </div>
            <h2 className="display m-0 text-[#060010] text-[clamp(2.2rem,4.5vw,4.5rem)] tracking-[-0.04em]">
              Where Intelligent Systems Can Create Impact
            </h2>
            <p className="body-copy text-base text-[#4b4661] mt-3 font-medium">
              Transforming major sectors through contextual intelligence, autonomous operations, and decision systems.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[rgba(73,84,250,0.18)] shadow-2xs hover:border-[rgba(73,84,250,0.8)] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] flex items-center justify-center mb-3">
                    {getIndustryIcon(ind.title)}
                  </div>
                  <h3 className="display text-base font-black text-[#060010] mb-2 tracking-wider">
                    {ind.title}
                  </h3>
                </div>
                <p className="body-copy text-xs sm:text-sm text-[#4b4661] font-medium leading-relaxed">
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
