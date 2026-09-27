'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ContactSection from '@/components/contact/ContactSection';
import TerminalDrawer from '@/components/terminal/TerminalDrawer';

export default function HomePage() {
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-12">
      {/* 00: Hero Workstation & Live Waveform */}
      <HeroSection onOpenTerminal={() => setIsTerminalModalOpen(true)} />

      {/* 01: About & Interactive 3D Neural Network */}
      <AboutSection />

      {/* 02: Selected Work & 3D Scientific Visualizations */}
      <ProjectsSection />

      {/* 03: Skills & 3D Orbital Knowledge Universe */}
      <SkillsSection />

      {/* 04: The Journey Timeline & Honors */}
      <ExperienceSection />

      {/* 05: Contact & 3D Quantum Prism Communication Node */}
      <ContactSection />

      {/* Embedded Terminal trigger if needed */}
      <TerminalDrawer
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
      />
    </div>
  );
}
