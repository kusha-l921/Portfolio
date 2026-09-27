'use client';

import React, { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import HeroLeft from '@/components/hero/HeroLeft';
import HeroVisual from '@/components/hero/HeroVisual';
import NavCardsRow from '@/components/navigation/NavCardsRow';
import FeaturedProjectPanel from '@/components/bottom/FeaturedProjectPanel';
import SkillsMapPanel from '@/components/bottom/SkillsMapPanel';
import TerminalPanel from '@/components/bottom/TerminalPanel';
import SectionDetailModal from '@/components/modals/SectionDetailModal';

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalSection, setModalSection] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setModalSection(sectionId);
    }
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setModalSection('projects');
  };

  return (
    <div className="relative min-h-screen bg-[#05080E] text-text-primary overflow-x-hidden flex flex-col justify-between selection:bg-cyan-accent/25 selection:text-white">
      {/* Top Header */}
      <SiteHeader
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Container with Left Coordinates Rail & Right Technical Sidebar */}
      <div className="relative flex-1 w-full max-w-[1480px] mx-auto px-4 sm:px-8 py-4 flex flex-col justify-between">
        {/* Left Vertical Coordinate Rail (01 to 06) */}
        <div className="hidden xl:flex absolute left-3 top-20 bottom-20 flex-col justify-between items-center text-[10px] font-mono text-text-muted pointer-events-none select-none">
          <div className="flex flex-col items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent/70" />
            <span>01</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-[1px] bg-border-cyan/50" />
            <span>02</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-[1px] bg-border-cyan/50" />
            <span>03</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-[1px] bg-border-cyan/50" />
            <span>04</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-[1px] bg-border-cyan/50" />
            <span>05</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-[1px] bg-border-cyan/50" />
            <span>06</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent/70 mt-1" />
          </div>
        </div>

        {/* Right Vertical Sidebar (IDEAS, CODE, MODELS, DATA, IMPACT) */}
        <div className="hidden xl:flex absolute right-4 top-24 bottom-24 flex-col justify-between items-center text-[9px] font-mono text-text-muted tracking-[0.2em] pointer-events-none select-none">
          <span className="hover:text-cyan-accent transition-colors">IDEAS</span>
          <span className="hover:text-cyan-accent transition-colors">CODE</span>
          <span className="hover:text-cyan-accent transition-colors">MODELS</span>
          <span className="hover:text-cyan-accent transition-colors">DATA</span>
          <span className="hover:text-cyan-accent transition-colors">IMPACT</span>
        </div>

        {/* Content Wrapper */}
        <div className="w-full xl:px-8 space-y-6">
          {/* Top Section: Hero (Left Information + Right Illustration Visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-4">
            <div className="lg:col-span-6 z-10">
              <HeroLeft
                onViewProjects={() => handleNavigate('projects')}
              />
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <HeroVisual />
            </div>
          </div>

          {/* Middle Section: Row of 5 Navigation Cards */}
          <div className="pt-2">
            <NavCardsRow onSelectCard={(cardId) => handleNavigate(cardId)} />
          </div>

          {/* Bottom Section: 3-Panels Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch pb-6">
            {/* Panel 1: Featured Project (Left 5 Cols) */}
            <div className="lg:col-span-5 h-[270px]">
              <FeaturedProjectPanel
                onOpenProject={(projId) => handleOpenProject(projId)}
              />
            </div>

            {/* Panel 2: Skills Radial Map (Middle 4 Cols) */}
            <div className="lg:col-span-4 h-[270px]">
              <SkillsMapPanel
                onSelectSkill={() => handleNavigate('skills')}
              />
            </div>

            {/* Panel 3: Terminal Prompt (Right 3 Cols) */}
            <div className="lg:col-span-3 h-[270px]">
              <TerminalPanel
                onNavigateSection={(secId) => handleNavigate(secId)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Detail Full-Screen Modal with Resume Info */}
      <SectionDetailModal
        sectionId={modalSection}
        selectedProjectId={selectedProjectId}
        onClose={() => {
          setModalSection(null);
          setSelectedProjectId(null);
        }}
      />
    </div>
  );
}
