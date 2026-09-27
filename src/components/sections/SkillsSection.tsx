'use client';

import React from 'react';
import { Code2, Brain, Globe, Cpu } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: RESUME_DATA.skills.languages,
      description: 'Core programming languages for machine learning, systems, and algorithms.',
    },
    {
      title: 'AI / ML & Computer Vision',
      icon: Brain,
      skills: RESUME_DATA.skills.aiml,
      description: 'Deep learning frameworks, spatiotemporal transformers, and explainable models.',
    },
    {
      title: 'Web & API Backends',
      icon: Globe,
      skills: RESUME_DATA.skills.web,
      description: 'Modern full-stack web and high-throughput asynchronous API servers.',
    },
    {
      title: 'Tools, Runtimes & Systems',
      icon: Cpu,
      skills: [...RESUME_DATA.skills.tools, 'Linux', 'Docker', 'ONNX Runtime'],
      description: 'Embedded edge environments, containerization, and hardware acceleration.',
    },
  ];

  return (
    <section id="skills" className="py-6 sm:py-8 scroll-mt-20">
      {/* Requirement 8: Animated Subtle Section Divider */}
      <div className="section-divider mb-6 sm:mb-8 divider-active" />

      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
          <span className="text-[#888888]">&gt;</span>
          <span className="text-[#A0A0A0]">skills.list</span>
          <span className="text-[#262626]">/</span>
          <span className="text-[#555555]">technical-arsenal</span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F1F1]">
            Skills &amp; Technologies
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#888888]">
            Languages, deep learning libraries, and edge deployment runtimes.
          </p>
        </div>

        {/* 4-Card Monochrome Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] hover:border-[#2C2C2C] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] space-y-3 group"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#161616]">
                  <Icon className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
                  <h3 className="text-base font-bold text-[#F1F1F1] group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#777777] leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#070707] hover:bg-[#141414] border border-[#181818] hover:border-[#2E2E2E] font-mono text-xs text-[#999999] hover:text-[#F1F1F1] transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
