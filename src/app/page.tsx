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
    <div className="flex flex-col">
      {/* Hero Section with Editorial Layout & System Architecture Sketch */}
      <HeroSection onOpenTerminal={() => setIsTerminalModalOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Selected Work (Projects) */}
      <ProjectsSection />

      {/* Skills & Tools */}
      <SkillsSection />

      {/* Experience & Milestones */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />

      {/* Optional Interactive Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
      />
    </div>
  );
}
