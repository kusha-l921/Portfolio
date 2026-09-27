'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function FeaturedProjectPanel({
  onOpenProject,
}: {
  onOpenProject: (projectId: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = RESUME_DATA.projects;
  const project = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full h-full p-4 rounded-lg border border-border-cyan bg-[#080D16] flex flex-col justify-between shadow-sm">
      {/* Window Header */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-subtle font-mono text-[11px] text-text-muted">
        <span className="text-cyan-accent font-semibold">~/featured_project.sh</span>
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
        </div>
      </div>

      {/* Main Body: Thumbnail Left, Information Right */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Left: Project Image with Inset & Telemetry Ticks */}
        <div className="sm:col-span-5 relative w-full h-36 sm:h-40 rounded-md overflow-hidden border border-border-cyan bg-[#05080E] flex items-center justify-center group">
          {/* Main Solar Flare Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/solar_flare.jpg"
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Inset Sub-Image Tile (Bottom-Left) */}
          <div className="absolute bottom-2 left-2 w-12 h-12 rounded border border-border-cyan bg-black overflow-hidden shadow-md">
            <Image
              src="/images/solar_flare.jpg"
              alt="Magnetogram inset"
              fill
              className="object-cover filter grayscale contrast-125"
            />
          </div>

          {/* Technical Telemetry Ticks on Side */}
          <div className="absolute left-1 top-2 flex flex-col justify-between h-4/5 font-mono text-[8px] text-cyan-accent/80 pointer-events-none">
            <span>30</span>
            <span>22</span>
          </div>
        </div>

        {/* Right: Tags, Title, Description, Buttons */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-3">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-1 font-mono text-[10px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#0D1522] border border-border-cyan text-cyan-accent/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-sans font-bold text-lg text-text-primary leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
            {project.tagline}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-1 font-mono text-xs">
            <button
              onClick={() => onOpenProject(project.id)}
              className="px-3.5 py-1.5 rounded bg-cyan-accent hover:bg-cyan-bright text-[#05080E] font-bold shadow-[0_0_12px_rgba(0,229,255,0.35)] transition-all flex items-center gap-1.5 text-xs"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded border border-border-subtle hover:border-border-cyan bg-[#0B111A] text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: 01 / 03 and Carousel Buttons */}
      <div className="pt-2 mt-2 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-text-muted">
        <span className="text-cyan-accent font-semibold">
          0{currentIndex + 1} / 0{projects.length}
        </span>

        <div className="flex items-center gap-2 text-text-secondary">
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-white/5 hover:text-cyan-accent transition-colors"
            title="Previous project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-white/5 hover:text-cyan-accent transition-colors"
            title="Next project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
