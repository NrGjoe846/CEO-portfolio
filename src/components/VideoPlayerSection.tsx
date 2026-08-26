import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Sparkles, Play, Layers, Maximize2, Shield, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

export const VideoPlayerSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('lg');

  const handleSizeChange = (size: 'sm' | 'md' | 'lg') => {
    sound.playClick();
    setSelectedSize(size);
  };

  return (
    <section
      id="vision-demo"
      className="relative w-full pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3.5rem,10vw,8rem)] bg-[#0a1226] text-white border-b border-cyan-500/15 overflow-hidden"
      aria-label="UNAI TECH Vision & Media Player"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="eyebrow text-xs tracking-widest text-cyan-300 font-bold">
                INTELLIGENCE IN MOTION
              </span>
            </div>
            <h2 className="display m-0 text-white text-[clamp(2.5rem,5.5vw,5.5rem)] tracking-[-0.04em] leading-none">
              EXECUTIVE VISION & SYSTEMS DEMO
            </h2>
          </div>

          {/* Size Variation Switcher */}
          <div className="flex items-center gap-2 bg-[#0e1a38] p-1.5 rounded-2xl border border-cyan-500/30">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeChange(size)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'bg-[#38bdf8] text-[#060b19] shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                    : 'text-cyan-200/70 hover:text-white'
                }`}
              >
                Player {size}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Render */}
        <div className="mt-10">
          <VideoPlayer
            size={selectedSize}
            title="UNAI TECH — Autonomous Intelligence Engine"
            subtitle="Executive Demonstration & Platform Architecture"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80"
          />
        </div>

        {/* Supporting Specs Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#0e1a38]/80 border border-cyan-500/25 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <div>
              <span className="text-cyan-400 font-bold block">ARCHITECTURE</span>
              <span className="text-white font-semibold">AI-Native Distributed Pipelines</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1a38]/80 border border-cyan-500/25 flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <div>
              <span className="text-cyan-400 font-bold block">SECURITY & COMPLIANCE</span>
              <span className="text-white font-semibold">Zero-Trust Enterprise Fabric</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1a38]/80 border border-cyan-500/25 flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <div>
              <span className="text-cyan-400 font-bold block">SCALABILITY</span>
              <span className="text-white font-semibold">Real-Time Autonomous Inference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerSection;
