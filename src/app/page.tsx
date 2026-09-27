'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroAboutSection from '@/components/sections/HeroAboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import GithubActivitySection from '@/components/sections/GithubActivitySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import FunPersonalitySection from '@/components/sections/FunPersonalitySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05070A] text-[#F2F5F7] font-sans selection:bg-cyan-accent/20 selection:text-white">
      {/* Sticky Compact Navbar */}
      <Navbar />

      {/* Main Editorial Container with Generous Whitespace */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero / About Section */}
        <HeroAboutSection />

        {/* 2. Education Section */}
        <EducationSection />

        {/* 3. Experience & Research Section */}
        <ExperienceSection />

        {/* 4. Achievements Section */}
        <AchievementsSection />

        {/* 5. GitHub / Development Activity Section */}
        <GithubActivitySection />

        {/* 6. Projects Section */}
        <ProjectsSection />

        {/* 7. Fun & Personality Section */}
        <FunPersonalitySection />

        {/* 8. Contact Section */}
        <ContactSection />

        {/* 9. Footer */}
        <Footer />
      </main>
    </div>
  );
}
