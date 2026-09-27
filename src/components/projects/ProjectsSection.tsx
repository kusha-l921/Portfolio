'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Asymmetric breakdown:
  // 1 large featured project (Solar Flare)
  // 2 medium projects (Fleet, ReWear)
  // 3 additional projects (Edge Vision, Swarm, Pipeline)
  const featuredProject = PROJECTS[0];
  const mediumProjects = PROJECTS.slice(1, 3);
  const additionalProjects = PROJECTS.slice(3);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (Requirement 14) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-text mb-2">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary-text">~/projects</span>
          </div>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text">
            Selected Work
          </h2>
          <p className="mt-3 text-secondary-text text-sm sm:text-base max-w-xl">
            Systems, experiments, and applications built for real-world reliability and scientific precision.
          </p>
        </div>

        {/* Asymmetric Project Layout (Requirement 14) */}
        <div className="space-y-6">
          {/* 1 Large Featured Project */}
          {featuredProject && (
            <div className="grid grid-cols-12">
              <ProjectCard
                project={featuredProject}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            </div>
          )}

          {/* 2 Medium Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>

          {/* 3 Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {additionalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
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
