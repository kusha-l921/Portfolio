'use client';

import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function EducationSection() {
  const { education } = RESUME_DATA;

  return (
    <section className="py-16 scroll-mt-24">
      {/* Requirement 8: Animated Subtle Section Divider */}
      <div className="section-divider mb-12 divider-active" />

      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
          <span className="text-[#888888]">&gt;</span>
          <span className="text-[#A0A0A0]">education.info</span>
          <span className="text-[#262626]">/</span>
          <span className="text-[#555555]">academic-record</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F1F1]">
          Education
        </h2>

        {/* Education Card */}
        <div className="p-6 sm:p-7 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9A9A9A] font-mono text-xs">
                <GraduationCap className="w-4 h-4 text-[#888888]" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#F1F1F1]">
                {education.institution}
              </h3>

              <p className="text-sm sm:text-base text-[#9A9A9A] font-medium">
                {education.degree}
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141414] border border-[#222222] text-xs font-mono text-[#D4D4D4]">
                <Award className="w-3.5 h-3.5 text-[#A0A0A0]" />
                <span>{education.honours}</span>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-[#666666] shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#888888]" />
                <span className="text-[#9A9A9A]">{education.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#555555]" />
                <span>Mumbai, India</span>
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-[#070707] border border-[#1E1E1E] font-mono text-sm text-[#F1F1F1] font-semibold">
                CGPA: {education.cgpa}
              </div>
            </div>
          </div>

          {/* Academic coursework & focus */}
          <div className="mt-6 pt-5 border-t border-[#161616] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-[#555555] block mb-1">Core Focus:</span>
              <span className="text-[#888888]">Machine Learning, Deep Learning, Computer Vision, XAI</span>
            </div>
            <div>
              <span className="text-[#555555] block mb-1">Advanced Topics:</span>
              <span className="text-[#888888]">Vision Transformers, Edge Computing, Statistical Modeling</span>
            </div>
            <div>
              <span className="text-[#555555] block mb-1">Foundations:</span>
              <span className="text-[#888888]">Data Structures, Algorithms, Probabilistic Graph Inference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
