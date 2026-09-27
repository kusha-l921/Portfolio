'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Copy, Check, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function HeroAboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="me" className="pt-28 pb-16 sm:pt-36 sm:pb-20 scroll-mt-20">
      <div className="space-y-12">
        {/* Terminal label & status line */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <span className="text-cyan-accent">&gt;</span>
            <span className="text-text-secondary">whoami</span>
            <span className="text-border-cyan">/</span>
            <span className="text-text-muted">kushal-patel</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0B1016] border border-border-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] text-text-secondary">status: online & building</span>
          </div>
        </div>

        {/* Hero Grid: Intro Left + Editorial Companion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
                Kushal Patel
              </h1>
              <p className="mt-2 text-sm sm:text-base font-mono text-cyan-accent tracking-wide">
                AI/ML Engineer <span className="text-text-muted">•</span> Problem Solver <span className="text-text-muted">•</span> Systems Builder
              </p>
            </div>

            <p className="text-xl sm:text-2xl font-medium text-text-primary leading-snug">
              Building <span className="text-cyan-accent">intelligent systems</span> for a better tomorrow.
            </p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              I work at the intersection of machine learning, computer vision, and real-world problem solving — turning research ideas into scalable, production-grade systems. Currently engineering spatiotemporal vision models and low-power edge pipelines.
            </p>

            {/* Quick Context Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1016] border border-border-subtle text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
                Mumbai, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1016] border border-border-subtle text-text-secondary">
                🎓 DJ Sanghvi COE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1016] border border-border-subtle text-text-secondary">
                ⚡ B.Tech AI/ML &apos;28 (CGPA 8.89)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-cyan-accent text-[#05070A] hover:bg-[#2DE2E6] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESUME_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-text-primary bg-[#0B1016] hover:bg-[#0F161F] border border-border-subtle hover:border-border-cyan transition-all duration-200"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-accent" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-text-secondary bg-[#0B1016] hover:text-text-primary border border-border-subtle hover:border-border-cyan transition-all duration-200"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-text-muted" />
                    <span>kushalpatel1596@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1 font-mono text-xs text-text-muted">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github</span>
              </a>
              <span>/</span>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin</span>
              </a>
              <span>/</span>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Personal Card & Companion Artwork */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 sm:p-6 rounded-xl bg-[#0B1016] border border-border-subtle space-y-4 shadow-card">
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-3">
                <span className="text-cyan-accent font-semibold">&gt; personal.meta</span>
                <span>v2026.09</span>
              </div>

              {/* Character Illustration Frame */}
              <div className="relative w-full h-48 sm:h-52 rounded-lg bg-[#05070A] border border-border-subtle overflow-hidden flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-radial-gradient from-cyan-accent/5 to-transparent pointer-events-none" />
                <Image
                  src="/images/character_composite.png"
                  alt="Companion illustration"
                  width={260}
                  height={180}
                  className="w-auto h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                  priority
                />
                <div className="absolute bottom-2 right-2 text-right">
                  <span className="font-handwritten text-xs sm:text-sm text-cyan-accent/90 bg-[#05070A]/80 px-2 py-0.5 rounded border border-border-subtle">
                    &ldquo;A better version of myself, everyday.&rdquo;
                  </span>
                </div>
              </div>

              {/* Dev Philosophy & Quick Specs */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-text-secondary py-1 border-b border-border-subtle/50">
                  <span className="text-text-muted">currently_working_on</span>
                  <span className="text-cyan-accent font-medium">Solar Flare Prediction</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary py-1 border-b border-border-subtle/50">
                  <span className="text-text-muted">specialization</span>
                  <span className="text-text-primary">Vision Transformers &amp; Edge AI</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary py-1 border-b border-border-subtle/50">
                  <span className="text-text-muted">hackathon_wins</span>
                  <span className="text-text-primary">LOC 8.0 Winner (1000+ teams)</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary pt-1">
                  <span className="text-text-muted">dev_loop</span>
                  <span className="text-text-muted">
                    learn() <span className="text-cyan-accent">&rarr;</span> build() <span className="text-cyan-accent">&rarr;</span> improve()
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
