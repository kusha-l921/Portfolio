'use client';

import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import TechnicalIllustration from './TechnicalIllustration';

export default function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onOpenModal(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl border transition-all duration-300 light-sweep-card cursor-pointer flex flex-col justify-between overflow-hidden ${
        project.gridSpan || 'col-span-12 lg:col-span-6'
      } ${
        isHovered
          ? 'border-accent/40 bg-[#141B24] -translate-y-1'
          : 'border-white/10 bg-[#11161D] translate-y-0'
      }`}
      style={{
        transform: isHovered
          ? 'perspective(1000px) rotateX(1deg) rotateY(-1deg) translateY(-4px)'
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
    >
      {/* Top Blue Accent Line (appears on hover - Requirement 16) */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-accent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="p-6 sm:p-7 flex flex-col h-full justify-between">
        <div>
          {/* Card Header: Project Number & Category Metadata (Requirement 15) */}
          <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs text-muted-text">
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold">[{project.number}]</span>
              <span>{project.category}</span>
            </div>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded text-muted-text hover:text-white transition-colors"
                title="GitHub repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-muted-text hover:text-accent transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Minimal Abstract Technical Illustration (Requirement 17) */}
          <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.01]">
            <TechnicalIllustration
              type={project.illustrationType}
              className={project.featured ? 'h-48' : 'h-36'}
            />
          </div>

          {/* Title & Short Description */}
          <div className="space-y-1.5 mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-text tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-accent">
              {project.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed line-clamp-3 mb-6">
            {project.overview}
          </p>
        </div>

        {/* Card Footer: Tags & "View Project →" (Requirement 15 & 16) */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 transition-transform duration-200 group-hover:translate-x-0.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#0D1117] border border-white/5 text-[11px] text-muted-text group-hover:text-secondary-text transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Link with 5px shift on hover (Requirement 16) */}
          <div className="flex items-center gap-1.5 text-accent font-semibold shrink-0">
            <span>View Project</span>
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-200 ${
                isHovered ? 'translate-x-[5px]' : 'translate-x-0'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
