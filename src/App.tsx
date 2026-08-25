/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { HeroCover } from "./components/HeroCover";
import { ExecutiveIntro } from "./components/ExecutiveIntro";
import { TornPaperMarquee } from "./components/TornPaperMarquee";
import { UnaiTechSection } from "./components/UnaiTechSection";
import { VenturesBento } from "./components/VenturesBento";
import { TechThinkingAndIndustries } from "./components/TechThinkingAndIndustries";
import { PhilosophyRoadmapPrinciples } from "./components/PhilosophyRoadmapPrinciples";
import { FooterContact } from "./components/FooterContact";
import { CeoAdvisorModal } from "./components/CeoAdvisorModal";
import { ExecutiveBookingModal } from "./components/ExecutiveBookingModal";
import { RevealSection } from "./components/RevealSection";
import { sound } from "./utils/audio";

export default function App() {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [advisorPrompt, setAdvisorPrompt] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) {
      sound.playClick();
    }
  };

  const handleOpenAdvisorWithPrompt = (prompt: string) => {
    setAdvisorPrompt(prompt);
    setIsAdvisorOpen(true);
  };

  const handleOpenAdvisorWithVenture = (ventureName: string) => {
    setAdvisorPrompt(`Tell me more about ${ventureName}, its AI capabilities, opportunity, and vision under UNAI TECH.`);
    setIsAdvisorOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#060010] overflow-x-hidden selection:bg-[rgba(73,84,250,1)] selection:text-white">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Accessible skip link */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#060010] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Main Portfolio Sections */}
      <main className="relative">
        {/* 1. Hero Cover with Nehemiah Nesanathan Identity, Intersections & Core Maxim */}
        <RevealSection delay={0.05} threshold={0.05}>
          <HeroCover
            onOpenAdvisor={() => {
              setAdvisorPrompt("");
              setIsAdvisorOpen(true);
            }}
            onOpenBooking={() => setIsBookingOpen(true)}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
          />
        </RevealSection>

        {/* 2. Executive Bio, About Me, Leadership Principles, Beliefs & Vision */}
        <RevealSection delay={0.1} threshold={0.08}>
          <ExecutiveIntro onOpenAdvisorWithPrompt={handleOpenAdvisorWithPrompt} />
        </RevealSection>

        {/* 3. Cyber Noir Marquee Ribbon */}
        <RevealSection delay={0.08} threshold={0.1}>
          <TornPaperMarquee />
        </RevealSection>

        {/* 4. UNAI TECH Overview & Intelligence Architecture Pipeline */}
        <RevealSection delay={0.1} threshold={0.08}>
          <UnaiTechSection onOpenAdvisorWithPrompt={handleOpenAdvisorWithPrompt} />
        </RevealSection>

        {/* 5. Products & Ventures: My Vidyon, PostsApp, Vidyo AI, UNAI Eleven/UEOS */}
        <RevealSection delay={0.1} threshold={0.08}>
          <VenturesBento onOpenAdvisorWithVenture={handleOpenAdvisorWithVenture} />
        </RevealSection>

        {/* 6. Technology Thinking, Moat & Industries of Impact */}
        <RevealSection delay={0.1} threshold={0.08}>
          <TechThinkingAndIndustries />
        </RevealSection>

        {/* 7. Business Philosophy, Roadmap (2026-2030+), CEO Principles & Mission */}
        <RevealSection delay={0.1} threshold={0.08}>
          <PhilosophyRoadmapPrinciples />
        </RevealSection>

        {/* 8. Connect With Me, Contact Details & Footer */}
        <RevealSection delay={0.1} threshold={0.08}>
          <FooterContact onOpenBooking={() => setIsBookingOpen(true)} />
        </RevealSection>
      </main>

      {/* AI Strategy Advisor & Digital Twin Modal */}
      <CeoAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        initialPrompt={advisorPrompt}
      />

      {/* Executive Briefing Scheduler Modal */}
      <ExecutiveBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
