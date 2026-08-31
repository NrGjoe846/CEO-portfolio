import React from "react";
import { sound } from "../utils/audio";
import { Sparkles, Layers, Users, Zap } from "lucide-react";

export const StatsNumbersSection: React.FC = () => {
  const stats = [
    {
      number: "4+",
      label: "AI & Tech Platforms",
      desc: "Flagship platforms built and deployed under UNAI TECH across EdTech, Civic Media, Cognitive Neural Engines, and Enterprise OS.",
      icon: Layers,
      highlight: "EdTech · Media · Neural · Enterprise OS"
    },
    {
      number: "1000+",
      label: "Institutional Reach & Users",
      desc: "Empowering schools, stakeholders, and digital users with automated workflows, real-time analytics, and personalized AI companion experiences.",
      icon: Users,
      highlight: "Students · Faculty · Citizens · Enterprise"
    },
    {
      number: "100%",
      label: "Autonomous AI Vision",
      desc: "Converting deep technical AI/ML decisions into real-world ROI, seamless scalability, and high-performance operational intelligence.",
      icon: Zap,
      highlight: "AI-Native · Cloud-Scale · Frontier Architecture"
    }
  ];

  return (
    <section
      id="numbers"
      className="relative w-full pt-[clamp(4rem,9vh,7rem)] pb-[clamp(4rem,9vh,7rem)] bg-[#0a1226] text-white border-b border-cyan-500/15 overflow-hidden"
      aria-label="By The Numbers"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                /numbers
              </span>
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.5rem,5.5vw,5.5rem)] tracking-[-0.04em] leading-[0.95]">
              By the <span className="outline">numbers</span>
            </h2>
          </div>
          <p className="body-copy text-sm sm:text-base text-white/70 max-w-md m-0">
            Converting artificial intelligence and machine learning decisions into measurable impact, operational scalability, and venture value.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0e1a38]/80 border border-cyan-500/20 hover:border-cyan-400/80 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between"
                onMouseEnter={() => sound.playPaperRustle()}
              >
                {/* Top Corner Icon & Index */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400/60 uppercase tracking-widest">
                    0{idx + 1} // STAT
                  </span>
                </div>

                {/* Big Stat Number */}
                <div className="mb-4">
                  <div className="display text-[clamp(3.5rem,6vw,5.5rem)] font-black text-white group-hover:text-[#38bdf8] transition-colors leading-none tracking-tight">
                    {item.number}
                  </div>
                  <div className="display text-lg sm:text-xl text-cyan-200 mt-2 font-bold tracking-wide">
                    {item.label}
                  </div>
                </div>

                {/* Description & Tags */}
                <div>
                  <p className="body-copy text-sm text-white/75 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-cyan-500/15">
                    <span className="text-[11px] font-mono text-cyan-300/90 tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
