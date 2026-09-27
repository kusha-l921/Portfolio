'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function EducationSection() {
  const { education } = RESUME_DATA;

  return (
    <section className="py-12 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">education.info</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">academic-record</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Education
        </h2>

        {/* Education Card */}
        <div className="p-6 sm:p-7 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-accent font-mono text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                {education.institution}
              </h3>

              <p className="text-sm sm:text-base text-text-secondary font-medium">
                {education.degree}
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-accent/10 border border-border-cyan text-xs font-mono text-cyan-accent">
                <Award className="w-3.5 h-3.5" />
                <span>{education.honours}</span>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-text-muted shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-text-secondary" />
                <span className="text-text-secondary">{education.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>Mumbai, India</span>
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-[#05070A] border border-border-subtle font-mono text-sm text-cyan-accent font-semibold">
                CGPA: {education.cgpa}
              </div>
            </div>
          </div>

          {/* Core academic coursework & technical focus */}
          <div className="mt-6 pt-5 border-t border-border-subtle/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-text-muted block mb-1">Core Focus:</span>
              <span className="text-text-secondary">Machine Learning, Deep Learning, Computer Vision, XAI</span>
            </div>
            <div>
              <span className="text-text-muted block mb-1">Advanced Topics:</span>
              <span className="text-text-secondary">Vision Transformers, Edge Computing, Statistical Modeling</span>
            </div>
            <div>
              <span className="text-text-muted block mb-1">Foundations:</span>
              <span className="text-text-secondary">Data Structures, Algorithms, Probabilistic Graph Inference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
