'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filters = ['All', 'AI/ML', 'Computer Vision', 'Distributed Systems'];

  const filteredProjects = RESUME_DATA.projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      {/* Requirement 8: Animated Subtle Section Divider */}
      <div className="section-divider mb-12 divider-active" />

      <div className="space-y-8">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
          <span className="text-[#888888]">&gt;</span>
          <span className="text-[#A0A0A0]">projects/</span>
          <span className="text-[#262626]">/</span>
          <span className="text-[#555555]">production-systems</span>
        </div>

        {/* Section Heading & Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F1F1]">
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-[#888888]">
              Spatiotemporal forecasting, unsupervised edge vision, and digital forensic models.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0D0D0D] border border-[#1A1A1A] self-start sm:self-auto font-mono text-xs">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#1C1C1C] text-white border border-[#2A2A2A] font-medium'
                    : 'text-[#666666] hover:text-[#A0A0A0] border border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6 pt-2">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className="group rounded-xl bg-[#0D0D0D] hover:bg-[#111111] border border-[#1A1A1A] hover:border-[#2C2C2C] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Main Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Project Image Preview in Grayscale */}
                    <div className="lg:col-span-4 order-last lg:order-first">
                      <div className="relative aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden border border-[#1A1A1A] bg-[#070707] group/img">
                        <Image
                          src={project.image || '/images/solar_flare.jpg'}
                          alt={project.title}
                          fill
                          className="object-cover filter grayscale contrast-115 brightness-90 group-hover/img:contrast-125 group-hover/img:brightness-100 transition-all duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-[#070707]/90 text-[#D4D4D4] border border-[#1C1C1C]">
                            {project.number} // {project.category}
                          </span>
                          <span className="text-[#666666] text-[10px]">{project.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#777777] font-semibold">
                            {project.number}.
                          </span>
                          {/* Requirement 6: Title shifts 2-4px on hover */}
                          <h3 className="text-xl sm:text-2xl font-bold text-[#F1F1F1] group-hover:translate-x-1 group-hover:text-white transition-all duration-200 tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Direct action links with subtle icon shift */}
                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-[#888888] hover:text-white bg-[#070707] border border-[#1A1A1A] hover:border-[#2C2C2C] transition-all duration-200 group/btn"
                          >
                            <Github className="w-3.5 h-3.5 text-[#777777]" />
                            <span>Code</span>
                            <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-[#D4D4D4] hover:text-white bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#2E2E2E] transition-all duration-200 group/btn"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3 text-[#888888] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                        {project.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Key Results / Metrics Chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {project.results.map((res, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-[#070707] border border-[#181818] font-mono text-xs"
                          >
                            <span className="text-[#555555] block text-[10px] uppercase tracking-wider">
                              {res.metric}
                            </span>
                            <span className="text-base font-bold text-[#E5E5E5] block mt-0.5">
                              {res.value}
                            </span>
                            <span className="text-[10px] text-[#777777] block mt-0.5">
                              {res.detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#070707] border border-[#181818] font-mono text-xs text-[#777777]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand / Collapse Details Toggle */}
                  <div className="mt-6 pt-4 border-t border-[#161616] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#777777] hover:text-[#E0E0E0] transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Architecture & Highlights' : 'Deep Dive: Architecture & Highlights'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="font-mono text-xs text-[#555555]">
                      model: {project.model}
                    </span>
                  </div>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#181818] space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-mono text-xs text-[#A0A0A0] font-semibold mb-2">
                          Key Engineering Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#888888]">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#555555] mt-0.5">&bull;</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.architecture && (
                        <div>
                          <h4 className="font-mono text-xs text-[#555555] mb-1.5">
                            Pipeline Architecture:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.architecture.map((arch, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded bg-[#070707] border border-[#1A1A1A] font-mono text-xs text-[#D4D4D4]"
                              >
                                {arch}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
