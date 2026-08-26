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

export const VenturesBento: React.FC<VenturesBentoProps> = ({ onOpenAdvisorWithVenture: _onOpenAdvisorWithVenture }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const galleryImages = [
    "/images/my-vidyon.jpg", // My Vidyon - India's First All in one ERP
    "/images/postsapp.jpg", // PostsApp - Political Social & Citizen Journalism Platform
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80", // Neural Engine
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"  // Cloud Infrastructure
  ];

  const galleryItems: AccordionGalleryItem[] = PRODUCTS_AND_VENTURES.map((prod, idx) => ({
    image: galleryImages[idx % galleryImages.length],
    label: `${prod.name} — ${prod.tagline}`,
    link: "#",
    alt: prod.name,
    category: prod.status,
    description: prod.description
  }));

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
              Hover or click any 3D panel to inspect the platform architecture.
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
        <div className="mt-6">
          <AccordionGallery
            items={galleryItems}
            selectedIndex={activeIndex}
            accentColor="#38bdf8"
            overlayColor="#060b19"
            textColor="#ffffff"
            height={460}
            gap={12}
            radius={20}
            expandRatio={0.55}
            trigger="hover"
            grayscale={true}
            onItemSelect={(_, idx) => {
              setActiveIndex(idx);
            }}
          />
        </div>

      </div>
    </section>
  );
};
