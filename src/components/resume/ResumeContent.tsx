'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_NODES, EXPERIENCES, ACHIEVEMENTS } from '@/data/portfolioData';
import { sound } from '@/utils/sound';

export default function ResumeContent() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handleCopyMarkdown = () => {
    sound.playSuccess();
    const md = `# ${PERSONAL_INFO.name} — AI/ML Engineer
Email: ${PERSONAL_INFO.socials.email} | GitHub: ${PERSONAL_INFO.socials.github} | LinkedIn: ${PERSONAL_INFO.socials.linkedin}

## EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period}) — GPA: ${PERSONAL_INFO.education.gpa}

## EXPERIENCE
${EXPERIENCES.map((e) => `### ${e.role} — ${e.organization} (${e.period})\n${e.description}\n- ${e.achievements.join('\n- ')}`).join('\n\n')}

## PROJECTS
${PROJECTS.map((p) => `### ${p.title} (${p.category})\n${p.tagline}\nModel: ${p.model}\n- ${p.results.map((r) => `${r.metric}: ${r.value}`).join('\n- ')}`).join('\n\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Action Bar (Hidden on print) */}
      <div className="print:hidden mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border border-border/50 bg-panel-elevated/70 backdrop-blur-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-secondary-text hover:text-bright-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO 3D ENVIRONMENT</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="px-3 py-1.5 rounded-lg border border-border/50 text-xs font-mono text-secondary-text hover:text-primary-text hover:border-electric-blue transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED MD' : 'COPY MARKDOWN'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-1.5 rounded-lg bg-electric-blue hover:bg-bright-blue text-white text-xs font-mono font-bold transition-all shadow-[0_0_12px_rgba(22,135,255,0.4)] flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT / SAVE PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Document Card */}
      <div className="rounded-2xl border border-border/60 bg-panel/90 p-8 sm:p-12 shadow-2xl space-y-10 text-primary-text font-sans print:border-none print:bg-white print:text-black print:p-0">
        {/* Header / Profile */}
        <div className="border-b border-border/40 pb-6 print:border-black/20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-base font-mono text-bright-blue print:text-blue-700 mt-1">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <div className="text-xs font-mono text-secondary-text space-y-1 text-left sm:text-right print:text-neutral-700">
              <p>Mumbai, India • Available Globally</p>
              <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-electric-blue underline block">
                {PERSONAL_INFO.socials.email}
              </a>
              <p>{PERSONAL_INFO.socials.github} • {PERSONAL_INFO.socials.linkedin}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-secondary-text print:text-neutral-700 leading-relaxed">
            {PERSONAL_INFO.subheadline}
          </p>
        </div>

        {/* Section: Education */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-electric-blue uppercase tracking-widest font-bold border-b border-border/30 pb-1 print:text-blue-800">
            01 // EDUCATION
          </h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-base font-bold text-primary-text print:text-black">
                {PERSONAL_INFO.education.institution}
              </h3>
              <span className="text-xs font-mono text-muted-text print:text-neutral-600">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-secondary-text print:text-neutral-700 mt-0.5">
              <span>{PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.affiliation})</span>
              <span className="font-mono text-bright-blue print:text-blue-800 font-semibold">
                GPA: {PERSONAL_INFO.education.gpa}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PERSONAL_INFO.education.coursework.map((c) => (
                <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded bg-panel-elevated print:bg-neutral-100 text-secondary-text print:text-neutral-800">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Experience */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono text-electric-blue uppercase tracking-widest font-bold border-b border-border/30 pb-1 print:text-blue-800">
            02 // PROFESSIONAL EXPERIENCE & RESEARCH
          </h2>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-primary-text print:text-black">
                  {exp.role} — <span className="text-bright-blue print:text-blue-700">{exp.organization}</span>
                </h3>
                <span className="text-xs font-mono text-muted-text print:text-neutral-600">
                  {exp.period} | {exp.location}
                </span>
              </div>
              <p className="text-xs text-secondary-text print:text-neutral-700">
                {exp.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-secondary-text print:text-neutral-700">
                {exp.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px] text-muted-text print:text-neutral-600">
                <span>Tooling: {exp.technologies.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Key Projects */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono text-electric-blue uppercase tracking-widest font-bold border-b border-border/30 pb-1 print:text-blue-800">
            03 // SELECTED INTELLIGENT SYSTEMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="p-4 rounded-xl border border-border/40 bg-panel-elevated/40 print:bg-white print:border-neutral-300">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-primary-text print:text-black">{p.title}</h4>
                  <span className="text-[10px] font-mono text-electric-blue print:text-blue-700">{p.category}</span>
                </div>
                <p className="text-[11px] text-secondary-text print:text-neutral-700 mb-2">
                  {p.tagline}
                </p>
                <div className="font-mono text-[10px] text-bright-blue print:text-blue-800 space-y-0.5">
                  {p.results.slice(0, 2).map((r, idx) => (
                    <div key={idx}>• {r.metric}: <span className="font-bold">{r.value}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Technical Skills */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-electric-blue uppercase tracking-widest font-bold border-b border-border/30 pb-1 print:text-blue-800">
            04 // TECHNICAL SKILLS & PROFICIENCIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-muted-text block mb-1">AI & MACHINE LEARNING:</span>
              <p className="text-secondary-text print:text-neutral-800">PyTorch, TensorFlow, OpenCV, CUDA, TensorRT, TorchVision, Scikit-learn, HuggingFace, LangChain</p>
            </div>
            <div>
              <span className="text-muted-text block mb-1">LANGUAGES & ARCHITECTURE:</span>
              <p className="text-secondary-text print:text-neutral-800">Python (Fluent), C/C++, TypeScript, Go, SQL, Bash, Distributed DDP, Graph Neural Networks</p>
            </div>
            <div>
              <span className="text-muted-text block mb-1">SYSTEMS, CLOUD & DEVOPS:</span>
              <p className="text-secondary-text print:text-neutral-800">Linux Kernel Profiling, Docker, Kubernetes, Apache Kafka, Apache Ray, Redis, PostgreSQL, Git</p>
            </div>
            <div>
              <span className="text-muted-text block mb-1">GRAPHICS & FRONTEND:</span>
              <p className="text-secondary-text print:text-neutral-800">React Three Fiber, Three.js, WebGL, Next.js, Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Section: Certifications & Publications */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-electric-blue uppercase tracking-widest font-bold border-b border-border/30 pb-1 print:text-blue-800">
            05 // HONORS, CERTIFICATIONS & PUBLICATIONS
          </h2>
          <div className="space-y-2 text-xs">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-secondary-text print:text-neutral-800">
                <div>
                  <span className="font-bold text-primary-text print:text-black">• {a.title}</span> — <span>{a.issuer}</span>
                </div>
                <span className="font-mono text-muted-text text-[11px]">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
