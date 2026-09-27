'use client';

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';
import TechnicalIllustration from './TechnicalIllustration';
import ArchitecturePipeline from './ArchitecturePipeline';

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl rounded-xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden my-auto">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 px-6 py-4 border-b border-white/10 bg-[#0D1117]/95 backdrop-blur-md flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-muted-text">
            <span className="text-accent">&gt;</span>
            <span className="text-primary-text font-medium">/projects/{project.slug}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-muted-text hover:text-white transition-colors"
              title="GitHub source"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded text-muted-text hover:text-accent transition-colors"
                title="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-white/5 text-muted-text hover:text-white transition-colors"
              title="Close [ESC]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Illustration & Large Title */}
          <div>
            <TechnicalIllustration
              type={project.illustrationType}
              className="h-56 mb-6"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-accent mb-4">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
              {project.overview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4 font-mono text-xs">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#11161D] border border-white/10 text-secondary-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sequential Architecture Pipeline (Requirement 19) */}
          <ArchitecturePipeline />

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-2 font-semibold">
                PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-2 font-semibold">
                APPROACH
              </span>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Verified Results */}
          <div>
            <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-3 font-semibold">
              RESULTS & VERIFIED BENCHMARKS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
              {project.results.map((r, i) => (
                <div key={i} className="p-4 rounded-lg border border-white/10 bg-[#11161D]">
                  <span className="text-xl font-bold text-accent block mb-1">
                    {r.value}
                  </span>
                  <span className="text-xs font-semibold text-primary-text block mb-1">
                    {r.metric}
                  </span>
                  <span className="text-[11px] text-muted-text block leading-tight">
                    {r.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Future */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-secondary-text">
            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-3 font-semibold">
                KEY CHALLENGES
              </span>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-3 font-semibold">
                FUTURE EXPANSION
              </span>
              <ul className="space-y-2">
                {project.futureWork.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-success">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
