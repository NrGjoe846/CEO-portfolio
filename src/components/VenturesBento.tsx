import React, { useState } from "react";
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
  ExternalLink
} from "lucide-react";

interface VenturesBentoProps {
  onOpenAdvisorWithVenture: (ventureName: string) => void;
}

export const VenturesBento: React.FC<VenturesBentoProps> = ({ onOpenAdvisorWithVenture }) => {
  const [selectedProduct, setSelectedProduct] = useState<FlagshipProduct | null>(null);

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

  return (
    <section
      id="ventures"
      className="relative w-full pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3.5rem,10vw,8rem)]"
      aria-label="Products & Ventures"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#060010]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-8 bg-[rgba(73,84,250,1)] rounded-full shadow-[0_0_8px_rgba(73,84,250,0.5)]" />
              <span className="eyebrow text-xs tracking-widest text-[#4b4661] font-bold">
                PORTFOLIO OF INNOVATION
              </span>
            </div>
            <h2 className="display m-0 text-[#060010] text-[clamp(2.5rem,5.5vw,6rem)] tracking-[-0.04em] leading-none">
              PRODUCTS & VENTURES
            </h2>
          </div>
          <p className="eyebrow text-xs text-[#4b4661] max-w-sm font-bold">
            Flagship platforms and systems engineered to transform education, civic journalism, learning intelligence, and enterprise operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_AND_VENTURES.map((prod) => (
            <div
              key={prod.id}
              onClick={() => handleOpenModal(prod)}
              className="group cursor-pointer rounded-2xl bg-white border-2 border-[#060010] p-6 sm:p-8 shadow-md hover:border-[rgba(73,84,250,1)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[rgba(73,84,250,0.08)] text-[rgba(73,84,250,1)] group-hover:bg-[rgba(73,84,250,1)] group-hover:text-white transition-colors">
                    {getProductIcon(prod.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#060010] text-white">
                    {prod.status}
                  </span>
                </div>

                <h3 className="display text-2xl sm:text-3xl font-black text-[#060010] group-hover:text-[rgba(73,84,250,1)] transition-colors">
                  {prod.name}
                </h3>
                <p className="eyebrow text-xs text-[rgba(73,84,250,1)] font-extrabold tracking-wider mt-1 mb-4">
                  {prod.tagline}
                </p>

                <p className="body-copy text-sm sm:text-base text-[#4b4661] font-medium leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Points / Stakeholder Chips */}
                {prod.points && prod.points.length > 0 && (
                  <div className="mb-6">
                    <p className="eyebrow text-[10px] text-[#4b4661] font-bold uppercase tracking-wider mb-2">
                      KEY CAPABILITIES / STAKEHOLDERS:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.points.map((pt, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#f5f5f5] text-[#060010] border border-[rgba(73,84,250,0.15)]"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Opportunity / Vision Card Footer */}
              <div className="pt-4 border-t border-[rgba(73,84,250,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="eyebrow text-[10px] text-[rgba(73,84,250,1)] font-black uppercase block">
                    {prod.opportunityOrVisionLabel || "OPPORTUNITY"}
                  </span>
                  <span className="body-copy text-xs sm:text-sm font-bold text-[#060010]">
                    {prod.opportunityOrVisionText}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#060010] group-hover:text-[rgba(73,84,250,1)] transition-colors shrink-0">
                  <span>EXPLORE</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060010]/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white border-3 border-[#060010] shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setSelectedProduct(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#060010] text-white hover:bg-[rgba(73,84,250,1)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[rgba(73,84,250,1)] text-white">
                {selectedProduct.status}
              </span>
              <span className="eyebrow text-xs text-[#4b4661] font-bold">
                UNAI TECH VENTURE ECOSYSTEM
              </span>
            </div>

            <h2 className="display text-3xl sm:text-4xl font-black text-[#060010] mt-2 mb-1">
              {selectedProduct.name}
            </h2>
            <p className="eyebrow text-xs sm:text-sm text-[rgba(73,84,250,1)] font-extrabold mb-6">
              {selectedProduct.tagline}
            </p>

            <div className="p-5 rounded-xl bg-[#fafafa] border border-[rgba(73,84,250,0.2)] mb-6">
              <h4 className="eyebrow text-xs font-black text-[#060010] mb-2 uppercase">OVERVIEW & PURPOSE</h4>
              <p className="body-copy text-base text-[#4b4661] font-medium leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {selectedProduct.points && (
              <div className="mb-6">
                <h4 className="eyebrow text-xs font-black text-[#060010] mb-3 uppercase">CORE CAPABILITIES & SCOPE</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[rgba(73,84,250,1)] shrink-0" />
                      <span className="body-copy text-xs sm:text-sm font-bold text-[#060010]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 rounded-xl bg-[rgba(73,84,250,0.08)] border-2 border-[rgba(73,84,250,0.3)] mb-8">
              <span className="eyebrow text-xs text-[rgba(73,84,250,1)] font-black uppercase block mb-1">
                {selectedProduct.opportunityOrVisionLabel || "OPPORTUNITY / VISION"}
              </span>
              <p className="display text-lg sm:text-xl font-black text-[#060010]">
                "{selectedProduct.opportunityOrVisionText}"
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(73,84,250,0.2)] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenAdvisorWithVenture(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(73,84,250,1)] text-white text-xs font-black uppercase tracking-wider hover:bg-[#060010] transition-colors shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>DISCUSS {selectedProduct.name} WITH NEHEMIAH AI</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-full bg-[#060010] text-white text-xs font-black uppercase tracking-wider hover:bg-[rgba(73,84,250,1)] transition-colors cursor-pointer"
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
