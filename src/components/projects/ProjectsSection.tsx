'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { Sparkles, Terminal } from 'lucide-react';
import { sound } from '@/utils/sound';

const CATEGORIES = ['ALL', 'AI/ML', 'Computer Vision', 'Distributed Systems'] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02 / PROJECTS"
          tag="SELECTED WORK"
          title="Intelligent Systems & Architectures"
          subtitle="A curated portfolio of deep learning frameworks, computer vision engines, and distributed machine learning infrastructure."
        />

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-border/30">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playHover();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-electric-blue text-white shadow-[0_0_12px_rgba(22,135,255,0.4)]'
                    : 'bg-panel text-secondary-text border border-border/40 hover:border-border/80 hover:text-primary-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-muted-text flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            <span>INDEX: {filteredProjects.length} COMPILED SYSTEMS</span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (Requirements 26-30) */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
