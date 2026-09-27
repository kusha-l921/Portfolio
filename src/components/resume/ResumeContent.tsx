'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EXPERIENCES, ACHIEVEMENTS } from '@/data/portfolioData';

export default function ResumeContent() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.socials.email} | GitHub: ${PERSONAL_INFO.socials.github} | LinkedIn: ${PERSONAL_INFO.socials.linkedin}

## EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period})

## EXPERIENCE
${EXPERIENCES.map((e) => `### ${e.role} — ${e.organization} (${e.period})\n${e.description}\n- ${e.achievements.join('\n- ')}`).join('\n\n')}

## PROJECTS
${PROJECTS.map((p) => `### ${p.title} (${p.category})\n${p.tagline}\n- ${p.results.map((r) => `${r.metric}: ${r.value}`).join('\n- ')}`).join('\n\n')}

## SKILLS
${SKILL_GROUPS.map((g) => `${g.category}: ${g.skills.map((s) => s.name).join(', ')}`).join('\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      {/* Action Header */}
      <div className="print:hidden mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-[#11161D]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-secondary-text hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="px-3 py-1.5 rounded border border-white/10 text-xs font-mono text-secondary-text hover:text-white hover:border-white/20 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Markdown'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded bg-accent hover:bg-accent-bright text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document */}
      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-8 sm:p-12 space-y-10 text-primary-text print:border-none print:bg-white print:text-black print:p-0">
        {/* Header */}
        <div className="border-b border-white/10 pb-6 print:border-black/20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-accent print:text-blue-700 mt-1">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <div className="text-xs font-mono text-secondary-text space-y-1 text-left sm:text-right print:text-neutral-700">
              <p>Mumbai, India</p>
              <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-accent underline block">
                {PERSONAL_INFO.socials.email}
              </a>
              <p>{PERSONAL_INFO.socials.github} • {PERSONAL_INFO.socials.linkedin}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-secondary-text print:text-neutral-700 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-1 print:text-blue-800">
            Education
          </h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-primary-text print:text-black">
                {PERSONAL_INFO.education.institution}
              </h3>
              <span className="text-xs font-mono text-muted-text print:text-neutral-600">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
            <p className="text-xs text-secondary-text print:text-neutral-700 mt-0.5 font-mono">
              {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.university})
            </p>
            <p className="text-xs text-muted-text mt-1">
              {PERSONAL_INFO.education.details}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-1 print:text-blue-800">
            Professional Experience & Research
          </h2>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-primary-text print:text-black">
                  {exp.role} — <span className="text-accent print:text-blue-700 font-medium">{exp.organization}</span>
                </h3>
                <span className="text-xs font-mono text-muted-text print:text-neutral-600">
                  {exp.period} | {exp.location}
                </span>
              </div>
              <p className="text-xs text-secondary-text print:text-neutral-700 leading-relaxed">
                {exp.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-secondary-text print:text-neutral-700">
                {exp.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="font-mono text-[10px] text-muted-text print:text-neutral-600 pt-1">
                Tooling: {exp.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Projects */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-1 print:text-blue-800">
            Selected Intelligent Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="p-4 rounded-lg border border-white/10 bg-[#11161D] print:bg-white print:border-neutral-300">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-primary-text print:text-black">{p.title}</h4>
                  <span className="text-[10px] font-mono text-accent print:text-blue-700">{p.category}</span>
                </div>
                <p className="text-[11px] text-secondary-text print:text-neutral-700 mb-2">
                  {p.tagline}
                </p>
                <div className="font-mono text-[10px] text-accent print:text-blue-800 space-y-0.5">
                  {p.results.slice(0, 2).map((r, idx) => (
                    <div key={idx}>• {r.metric}: <span className="font-bold">{r.value}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-1 print:text-blue-800">
            Technical Toolchain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {SKILL_GROUPS.map((g) => (
              <div key={g.category}>
                <span className="text-muted-text block mb-1 uppercase">{g.category}:</span>
                <p className="text-secondary-text print:text-neutral-800">
                  {g.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honors */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-1 print:text-blue-800">
            Honors & Certifications
          </h2>
          {ACHIEVEMENTS.map((a) => (
            <div key={a.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-secondary-text print:text-neutral-800">
              <div>
                <span className="font-bold text-primary-text print:text-black">• {a.title}</span> — <span>{a.issuer}</span>
              </div>
              <span className="font-mono text-muted-text text-[11px]">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
