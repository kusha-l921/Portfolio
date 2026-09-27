'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Filter, ChevronDown, ChevronUp } from 'lucide-react';
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
    <section id="projects" className="py-16 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-8">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">~/projects</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">production-systems</span>
        </div>

        {/* Section Heading & Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Production architectures, computer vision pipelines, and deep learning engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0B1016] border border-border-subtle self-start sm:self-auto font-mono text-xs">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-cyan-accent/15 text-cyan-accent border border-border-cyan font-medium'
                    : 'text-text-muted hover:text-text-secondary border border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8 pt-2">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProject === project.id;
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`rounded-xl bg-[#0B1016] border transition-all duration-300 shadow-card overflow-hidden ${
                  isFeatured
                    ? 'border-border-cyan/50 hover:border-border-cyan'
                    : 'border-border-subtle hover:border-border-cyan/30'
                }`}
              >
                {/* Main Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Project Image Preview (for featured or available) */}
                    <div className="lg:col-span-4 order-last lg:order-first">
                      <div className="relative aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden border border-border-subtle bg-[#05070A] group">
                        <Image
                          src={project.image || '/images/solar_flare.jpg'}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1016] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-[#05070A]/90 text-cyan-accent border border-border-subtle">
                            {project.number} // {project.category}
                          </span>
                          <span className="text-text-muted text-[10px]">{project.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-cyan-accent font-semibold">
                            {project.number}.
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Direct action links */}
                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-text-secondary hover:text-cyan-accent bg-[#05070A] border border-border-subtle hover:border-border-cyan transition-all duration-200"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-cyan-accent bg-cyan-accent/10 hover:bg-cyan-accent/20 border border-border-cyan transition-all duration-200"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {project.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Key Results / Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {project.results.map((res, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-[#05070A] border border-border-subtle font-mono text-xs"
                          >
                            <span className="text-text-muted block text-[10px] uppercase tracking-wider">
                              {res.metric}
                            </span>
                            <span className="text-base font-bold text-cyan-accent block mt-0.5">
                              {res.value}
                            </span>
                            <span className="text-[10px] text-text-secondary block mt-0.5">
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
                            className="px-2.5 py-1 rounded bg-[#05070A] border border-border-subtle font-mono text-xs text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand / Collapse Details Toggle */}
                  <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-cyan-accent transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Architecture & Highlights' : 'Deep Dive: Architecture & Highlights'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="font-mono text-xs text-text-muted">
                      model: {project.model}
                    </span>
                  </div>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border-subtle space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-mono text-xs text-cyan-accent font-semibold mb-2">
                          Key Engineering Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-text-secondary">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-cyan-accent mt-0.5">&bull;</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.architecture && (
                        <div>
                          <h4 className="font-mono text-xs text-text-muted mb-1.5">
                            Pipeline Architecture:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.architecture.map((arch, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded bg-[#05070A] border border-border-subtle font-mono text-xs text-text-primary"
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
