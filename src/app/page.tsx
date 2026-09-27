'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroAboutSection from '@/components/sections/HeroAboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  useEffect(() => {
    // Subtle IntersectionObserver for scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            if (entry.target.classList.contains('section-divider')) {
              entry.target.classList.add('divider-active');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-init, .section-divider');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F1F1F1] font-sans selection:bg-[#262626] selection:text-white">
      {/* Sticky Compact Monochrome Navbar with Scroll Progress */}
      <Navbar />

      {/* Main Continuous Scrollable Container with Generous Whitespace */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero & About */}
        <HeroAboutSection />

        {/* 2. Education */}
        <div className="reveal-init">
          <EducationSection />
        </div>

        {/* 3. Experience & Technical Journey */}
        <div className="reveal-init">
          <ExperienceSection />
        </div>

        {/* 4. Projects */}
        <div className="reveal-init">
          <ProjectsSection />
        </div>

        {/* 5. Skills & Technologies */}
        <div className="reveal-init">
          <SkillsSection />
        </div>

        {/* 6. Contact */}
        <div className="reveal-init">
          <ContactSection />
        </div>

        {/* 7. Footer */}
        <Footer />
      </main>
    </div>
  );
}
