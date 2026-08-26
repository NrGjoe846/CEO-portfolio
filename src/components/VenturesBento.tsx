import React, { useState, useRef } from "react";
import { PRODUCTS_AND_VENTURES } from "../data/portfolioData";
import { FlagshipProduct } from "../types";
import { sound } from "../utils/audio";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  MessageSquareShare, 
  Cpu, 
  Server,
  X,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface VenturesBentoProps {
  onOpenAdvisorWithVenture: (ventureName: string) => void;
}

export const VenturesBento: React.FC<VenturesBentoProps> = ({ onOpenAdvisorWithVenture }) => {
  const [selectedProduct, setSelectedProduct] = useState<FlagshipProduct | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getProductIcon = (id: string) => {
    switch (id) {
      case "my-vidyon": return <GraduationCap className="w-6 h-6" />;
      case "postsapp": return <MessageSquareShare className="w-6 h-6" />;
      case "vidyo-ai": return <Cpu className="w-6 h-6" />;
      case "unai-eleven": return <Server className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const handleOpenModal = (p: FlagshipProduct) => {
    sound.playCameraShutter();
    setSelectedProduct(p);
  };

  const handleScroll = (direction: "left" | "right") => {
    sound.playClick();
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="ventures"
      className="relative w-full pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3.5rem,10vw,8rem)] bg-[#0e1a38] text-white border-b border-cyan-500/15 overflow-hidden"
      aria-label="Products & Ventures"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        
        {/* Section Header with Horizontal Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                PORTFOLIO OF INNOVATION
              </span>
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.5rem,5.5vw,6rem)] tracking-[-0.04em] leading-none">
              PRODUCTS & VENTURES
            </h2>
          </div>

          {/* Right Header: Subtitle & Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between md:justify-end">
            <p className="eyebrow text-xs text-cyan-200/80 max-w-xs font-bold">
              Swipe or scroll horizontally to explore flagship platforms across education, journalism, and enterprise AI.
            </p>

            {/* Horizontal Scroll Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="w-11 h-11 rounded-full bg-[#0a1226] hover:bg-[#2563eb] text-white border border-cyan-400/40 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                title="Scroll Left"
                aria-label="Scroll products left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="w-11 h-11 rounded-full bg-[#0a1226] hover:bg-[#2563eb] text-white border border-cyan-400/40 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                title="Scroll Right"
                aria-label="Scroll products right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Helper Track Pill */}
        <div className="mt-6 flex items-center justify-between text-xs text-cyan-200/80 font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span>HORIZONTAL SCROLL ENABLED &bull; {PRODUCTS_AND_VENTURES.length} VENTURES</span>
          </span>
          <span className="hidden sm:inline-block">DRAG / SWIPE / CLICK TO NAVIGATE &rarr;</span>
        </div>

        {/* Horizontal Products Scroll Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="mt-6 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 no-scrollbar scroll-smooth focus:outline-none"
          tabIndex={0}
          aria-label="Horizontal list of products and ventures"
        >
          {PRODUCTS_AND_VENTURES.map((prod, idx) => (
            <div
              key={prod.id}
              onClick={() => handleOpenModal(prod)}
              className="group cursor-pointer rounded-2xl bg-white text-black p-6 sm:p-8 shadow-2xl border-2 border-cyan-400/30 hover:border-[#1d4ed8] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between w-[85vw] sm:w-[460px] lg:w-[500px] shrink-0 snap-start select-none"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors shadow-xs">
                    {getProductIcon(prod.id)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 font-bold">0{idx + 1} / 0{PRODUCTS_AND_VENTURES.length}</span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#0a1226] text-cyan-300 shadow-xs border border-cyan-500/30">
                      {prod.status}
                    </span>
                  </div>
                </div>

                <h3 className="display text-2xl sm:text-3xl font-black text-black group-hover:text-[#1d4ed8] transition-colors leading-tight">
                  {prod.name}
                </h3>
                <p className="eyebrow text-xs text-[#1d4ed8] font-extrabold tracking-wider mt-1 mb-4">
                  {prod.tagline}
                </p>

                <p className="body-copy text-sm sm:text-base text-zinc-700 font-medium leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Points / Stakeholder Chips */}
                {prod.points && prod.points.length > 0 && (
                  <div className="mb-6">
                    <p className="eyebrow text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                      KEY CAPABILITIES / STAKEHOLDERS:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.points.map((pt, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-bold bg-zinc-100 text-black border border-zinc-200"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Opportunity / Vision Card Footer */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="eyebrow text-[10px] text-[#1d4ed8] font-black uppercase block">
                    {prod.opportunityOrVisionLabel || "OPPORTUNITY"}
                  </span>
                  <span className="body-copy text-xs sm:text-sm font-bold text-black">
                    {prod.opportunityOrVisionText}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#1d4ed8] group-hover:text-[#2563eb] transition-colors shrink-0">
                  <span>EXPAND DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for In-Depth Venture Details */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060b19]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white text-black border-2 border-cyan-400/50 shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setSelectedProduct(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#0a1226] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#1d4ed8] text-white">
                {selectedProduct.status}
              </span>
              <span className="eyebrow text-xs text-zinc-500 font-bold">
                UNAI TECH VENTURE ECOSYSTEM
              </span>
            </div>

            <h2 className="display text-3xl sm:text-4xl font-black text-black mt-2 mb-1">
              {selectedProduct.name}
            </h2>
            <p className="eyebrow text-xs sm:text-sm text-[#1d4ed8] font-extrabold mb-6">
              {selectedProduct.tagline}
            </p>

            <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100 mb-6">
              <h4 className="eyebrow text-xs font-black text-black mb-2 uppercase">OVERVIEW & PURPOSE</h4>
              <p className="body-copy text-base text-zinc-700 font-medium leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {selectedProduct.points && (
              <div className="mb-6">
                <h4 className="eyebrow text-xs font-black text-black mb-3 uppercase">CORE CAPABILITIES & SCOPE</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                      <span className="body-copy text-xs sm:text-sm font-bold text-black">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 rounded-xl bg-blue-50 border-2 border-blue-200 mb-8">
              <span className="eyebrow text-xs text-[#1d4ed8] font-black uppercase block mb-1">
                {selectedProduct.opportunityOrVisionLabel || "OPPORTUNITY / VISION"}
              </span>
              <p className="display text-lg sm:text-xl font-black text-black">
                "{selectedProduct.opportunityOrVisionText}"
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenAdvisorWithVenture(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white text-xs font-black uppercase tracking-wider hover:from-[#2563eb] hover:to-[#38bdf8] transition-all shadow-md cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>DISCUSS {selectedProduct.name} WITH NEHEMIAH AI</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-full bg-[#0a1226] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
