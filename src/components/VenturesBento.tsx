import React, { useState } from "react";
import { PRODUCTS_AND_VENTURES } from "../data/portfolioData";
import { FlagshipProduct } from "../types";
import { sound } from "../utils/audio";
import { AccordionGallery, AccordionGalleryItem } from "./AccordionGallery";
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
  ChevronRight,
  ExternalLink,
  Bot
} from "lucide-react";

interface VenturesBentoProps {
  onOpenAdvisorWithVenture: (ventureName: string) => void;
}

export const VenturesBento: React.FC<VenturesBentoProps> = ({ onOpenAdvisorWithVenture }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<FlagshipProduct | null>(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80", // EdTech
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80", // Journalism / Media
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80", // Neural Engine
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80", // Cloud Infrastructure
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80"  // Enterprise OS
  ];

  const galleryItems: AccordionGalleryItem[] = PRODUCTS_AND_VENTURES.map((prod, idx) => ({
    image: galleryImages[idx % galleryImages.length],
    label: `${prod.name} — ${prod.tagline}`,
    link: "#",
    alt: prod.name,
    category: prod.status,
    description: prod.description
  }));

  const getProductIcon = (id: string) => {
    switch (id) {
      case "my-vidyon": return <GraduationCap className="w-6 h-6" />;
      case "postsapp": return <MessageSquareShare className="w-6 h-6" />;
      case "vidyo-ai": return <Cpu className="w-6 h-6" />;
      case "unai-eleven": return <Server className="w-6 h-6" />;
      case "ueos": return <Target className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const handleSelectProduct = (index: number) => {
    sound.playClick();
    setActiveIndex(index);
  };

  const handlePrev = () => {
    sound.playClick();
    setActiveIndex((prev) => (prev - 1 + PRODUCTS_AND_VENTURES.length) % PRODUCTS_AND_VENTURES.length);
  };

  const handleNext = () => {
    sound.playClick();
    setActiveIndex((prev) => (prev + 1) % PRODUCTS_AND_VENTURES.length);
  };

  const handleOpenModal = (p: FlagshipProduct) => {
    sound.playCameraShutter();
    setSelectedProduct(p);
  };

  const activeProduct = PRODUCTS_AND_VENTURES[activeIndex] || PRODUCTS_AND_VENTURES[0];

  return (
    <section
      id="ventures"
      className="relative w-full pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3.5rem,10vw,8rem)] bg-[#0e1a38] text-white border-b border-cyan-500/15 overflow-hidden"
      aria-label="Products & Ventures"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        
        {/* Section Header with Navigation Controls */}
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

          {/* Right Header: Subtitle & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between md:justify-end">
            <p className="eyebrow text-xs text-cyan-200/80 max-w-xs font-bold">
              Hover or click any 3D panel to inspect the active platform dossier.
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#0a1226] hover:bg-[#2563eb] text-white border border-cyan-400/40 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                title="Previous Venture"
                aria-label="Previous Venture"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#0a1226] hover:bg-[#2563eb] text-white border border-cyan-400/40 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                title="Next Venture"
                aria-label="Next Venture"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Quick Jump Platform Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {PRODUCTS_AND_VENTURES.map((prod, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => handleSelectProduct(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#38bdf8] text-[#060b19] shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-105"
                    : "bg-[#0a1226]/80 text-cyan-200/80 border border-cyan-500/20 hover:border-cyan-400 hover:text-white"
                }`}
              >
                <span>0{idx + 1}</span>
                <span>{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Gallery Showcase (Aligned 1-to-1 with Ventures) */}
        <div className="mt-6 mb-8">
          <AccordionGallery
            items={galleryItems}
            selectedIndex={activeIndex}
            accentColor="#38bdf8"
            overlayColor="#060b19"
            textColor="#ffffff"
            height={440}
            gap={12}
            radius={20}
            expandRatio={0.55}
            trigger="hover"
            grayscale={true}
            onItemSelect={(_, idx) => setActiveIndex(idx)}
          />
        </div>

        {/* Active Venture Interactive Console (Directly Aligned with Active Accordion Item) */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#0a1226] via-[#0e1a38] to-[#0a1226] border-2 border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Core Dossier Info */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#060b19] text-[#38bdf8] border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                      {getProductIcon(activeProduct.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-300/70 font-bold block">
                        FLAGSHIP PLATFORM 0{activeIndex + 1} / 0{PRODUCTS_AND_VENTURES.length}
                      </span>
                      <h3 className="display text-2xl sm:text-4xl font-black text-white leading-tight">
                        {activeProduct.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase bg-[#060b19] text-cyan-300 border border-cyan-500/40 shrink-0">
                    {activeProduct.status}
                  </span>
                </div>

                <p className="eyebrow text-sm text-cyan-400 font-extrabold tracking-wider mb-4">
                  {activeProduct.tagline}
                </p>

                <p className="body-copy text-base sm:text-lg text-cyan-100/90 font-medium leading-relaxed mb-6">
                  {activeProduct.description}
                </p>

                {/* Key Capabilities / Scope Chips */}
                {activeProduct.points && activeProduct.points.length > 0 && (
                  <div>
                    <p className="eyebrow text-[11px] text-cyan-300/80 font-bold uppercase tracking-wider mb-3">
                      CORE CAPABILITIES & STAKEHOLDERS:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {activeProduct.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-[#060b19]/90 border border-cyan-500/25 text-xs font-bold text-white"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenModal(activeProduct)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-[#060b19] text-xs font-black uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer"
                >
                  <span>EXPAND FULL DOSSIER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenAdvisorWithVenture(activeProduct.name)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#060b19] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-[#38bdf8]" />
                  <span>CONSULT NEHEMIAH AI</span>
                </button>
              </div>
            </div>

            {/* Right Column: Strategic Vision & Opportunity Highlight */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 sm:p-8 rounded-xl bg-[#060b19]/80 border border-cyan-500/30 shadow-inner">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="eyebrow text-xs font-mono font-bold text-cyan-400 uppercase">
                    {activeProduct.opportunityOrVisionLabel || "STRATEGIC OBJECTIVE"}
                  </span>
                </div>
                <blockquote className="display text-lg sm:text-xl font-bold text-white leading-snug mb-6">
                  "{activeProduct.opportunityOrVisionText}"
                </blockquote>
              </div>

              <div className="p-4 rounded-lg bg-[#0a1226] border border-cyan-500/20">
                <span className="eyebrow text-[10px] text-cyan-300/80 font-bold block mb-1 uppercase">
                  UNAI TECH ARCHITECTURAL ALIGNMENT
                </span>
                <p className="text-xs text-cyan-100/75 leading-relaxed">
                  Engineered natively with autonomous agents, cloud inference fabrics, and adaptive intelligence pipelines.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal for In-Depth Venture Details */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060b19]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#0a1226]/95 text-white border-2 border-cyan-400/50 shadow-[0_0_60px_rgba(0,0,0,0.85)] p-6 sm:p-10 max-h-[85vh] overflow-y-auto backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setSelectedProduct(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#0e1a38] text-white border border-cyan-500/30 hover:bg-[#1d4ed8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#1d4ed8] text-white border border-cyan-400/30">
                {selectedProduct.status}
              </span>
              <span className="eyebrow text-xs text-cyan-300 font-bold">
                UNAI TECH VENTURE ECOSYSTEM
              </span>
            </div>

            <h2 className="display text-3xl sm:text-4xl font-black text-white mt-2 mb-1">
              {selectedProduct.name}
            </h2>
            <p className="eyebrow text-xs sm:text-sm text-cyan-400 font-extrabold mb-6">
              {selectedProduct.tagline}
            </p>

            <div className="p-5 rounded-xl bg-[#060b19]/90 border border-cyan-500/30 mb-6">
              <h4 className="eyebrow text-xs font-black text-cyan-300 mb-2 uppercase">OVERVIEW & PURPOSE</h4>
              <p className="body-copy text-base text-cyan-100/90 font-medium leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {selectedProduct.points && (
              <div className="mb-6">
                <h4 className="eyebrow text-xs font-black text-cyan-300 mb-3 uppercase">CORE CAPABILITIES & SCOPE</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0e1a38] border border-cyan-500/25">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                      <span className="body-copy text-xs sm:text-sm font-bold text-white">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 rounded-xl bg-gradient-to-br from-[#0e1a38] to-[#060b19] border-2 border-cyan-400/40 mb-8">
              <span className="eyebrow text-xs text-cyan-400 font-black uppercase block mb-1">
                {selectedProduct.opportunityOrVisionLabel || "OPPORTUNITY / VISION"}
              </span>
              <p className="display text-lg sm:text-xl font-black text-cyan-200">
                "{selectedProduct.opportunityOrVisionText}"
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/25 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenAdvisorWithVenture(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-[#060b19] text-xs font-black uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer font-bold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>DISCUSS {selectedProduct.name} WITH NEHEMIAH AI</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-full bg-[#060b19] text-white border border-cyan-500/30 text-xs font-black uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors cursor-pointer"
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
