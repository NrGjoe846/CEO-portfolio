import React from "react";
import { sound } from "../utils/audio";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const WorkHistorySection: React.FC = () => {
  const experiences = [
    {
      num: "01",
      company: "UNAI TECH Pvt Ltd",
      role: "Chief Executive Officer & Founder",
      period: "2024 — Present",
      desc: "Spearheading executive strategy, venture architecture, and engineering the autonomous intelligent layer powering modern enterprises, educational institutions, and civic platforms.",
      tags: ["Executive Leadership", "AI Architecture", "Venture Strategy", "Autonomous Systems"],
      link: "https://unaitech.com"
    },
    {
      num: "02",
      company: "My Vidyon & PostsApp",
      role: "Lead Platform Architect & Systems Engineer",
      period: "2024 — 2026",
      desc: "Designed and engineered end-to-end architectures for India's First All-in-One Education ERP (My Vidyon) and real-time citizen journalism social platforms (PostsApp) with low-latency inference pipelines.",
      tags: ["EdTech AI", "Full-Stack Architecture", "Citizen Media", "Scalable Infrastructure"],
      link: "https://www.myvidyon.in/"
    },
    {
      num: "03",
      company: "Cognitive Neural & ML Systems",
      role: "AI & Machine Learning Engineer",
      period: "2022 — 2024",
      desc: "Conducted technical research and built practical applications in deep learning, Generative AI, natural language document comprehension (Vidyo AI), and autonomous agent workflows.",
      tags: ["AI/ML Engineering", "Generative AI", "Neural Engines", "Workflow Automation"],
      link: "https://unaitech.com"
    }
  ];

  return (
    <section
      id="experience"
      className="relative w-full pt-[clamp(4rem,9vh,7rem)] pb-[clamp(4rem,9vh,7rem)] bg-[#0e1a38] text-white border-b border-cyan-500/15 overflow-hidden"
      aria-label="Work History & Experience"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                /experience
              </span>
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.5rem,5.5vw,5.5rem)] tracking-[-0.04em] leading-[0.95]">
              Work <span className="outline">history</span>
            </h2>
          </div>
          <p className="body-copy text-sm sm:text-base text-white/70 max-w-md m-0">
            Journey from AI & Machine Learning engineer to technology leader, building scalable platforms with real-world impact.
          </p>
        </div>

        {/* Stacked Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-10 rounded-3xl bg-[#0a1226]/90 border border-cyan-500/20 hover:border-cyan-400 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 backdrop-blur-md"
              onMouseEnter={() => sound.playPaperRustle()}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left: Number & Main Info */}
                <div className="flex items-start gap-6 sm:gap-8">
                  <div className="display text-3xl sm:text-5xl font-black text-cyan-400/40 group-hover:text-[#38bdf8] transition-colors leading-none pt-1">
                    {exp.num}
                  </div>

                  <div className="space-y-3 max-w-2xl">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="display text-xl sm:text-3xl font-black text-white group-hover:text-[#38bdf8] transition-colors">
                          {exp.company}
                        </h3>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 hover:bg-[#38bdf8] hover:text-black transition-all"
                          onClick={() => sound.playClick()}
                          title="Visit Link"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                      <span className="eyebrow text-xs sm:text-sm text-cyan-300 font-bold tracking-wider block mt-1">
                        {exp.role}
                      </span>
                    </div>

                    <p className="body-copy text-sm sm:text-base text-white/80 leading-relaxed">
                      {exp.desc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#0e1a38] text-cyan-200 border border-cyan-500/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Year Badge */}
                <div className="lg:self-start shrink-0">
                  <span className="inline-flex items-center px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs sm:text-sm font-bold tracking-wide">
                    {exp.period}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
