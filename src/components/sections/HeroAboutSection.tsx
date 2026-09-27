'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Copy, Check, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
    <section id="me" className="pt-20 pb-6 sm:pt-24 sm:pb-8 scroll-mt-20">
      <div className="space-y-6">
        {/* Eyebrow / Terminal label & status (Stagger delay 100ms) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#666666] animate-fade-up delay-100">
          <div className="flex items-center gap-2">
            <span className="text-[#999999]">&gt;</span>
            <span className="text-[#A0A0A0]">whoami</span>
            <span className="text-[#262626]">/</span>
            <span className="text-[#555555]">kushal-patel</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0D0D0D] border border-[#1A1A1A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#888888] animate-pulse"></span>
            <span className="text-[11px] text-[#888888]">status: online &amp; building</span>
          </div>
        </div>

        {/* Hero Grid: Intro Left + Editorial Companion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 space-y-4">
            {/* Heading (Stagger delay 180ms) */}
            <div className="animate-fade-up delay-180">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F1F1] leading-[1.1]">
                Kushal Patel
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm font-mono text-[#9A9A9A] tracking-wide">
                AI/ML Engineer <span className="text-[#444444]">•</span> Problem Solver <span className="text-[#444444]">•</span> Systems Builder
              </p>
            </div>

            {/* Subheading & Description (Stagger delay 280ms) */}
            <div className="space-y-2 animate-fade-up delay-280">
              <p className="text-lg sm:text-xl font-medium text-[#DCDCDC] leading-snug">
                Building <span className="text-white font-semibold underline decoration-[#2E2E2E] underline-offset-4">intelligent systems</span> for a better tomorrow.
              </p>

              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-xl">
                I work at the intersection of machine learning, computer vision, and real-world problem solving — turning research ideas into scalable, production-grade systems. Currently engineering spatiotemporal vision models and low-power edge pipelines.
              </p>
            </div>

            {/* Quick Context Metadata Pills (Stagger delay 380ms) */}
            <div className="flex flex-wrap gap-2 text-xs font-mono animate-fade-up delay-380">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888]">
                <MapPin className="w-3.5 h-3.5 text-[#A0A0A0]" />
                Mumbai, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888]">
                🎓 DJ Sanghvi COE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888]">
                ⚡ B.Tech AI/ML &apos;28 (CGPA 8.89)
              </span>
            </div>

            {/* Action Buttons (Stagger delay 450ms) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-up delay-450">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#F1F1F1] text-[#050505] hover:bg-white hover:shadow-[0_2px_12px_rgba(255,255,255,0.15)] transition-all duration-200 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#050505]" />
              </a>

              <a
                href={RESUME_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-[#D4D4D4] hover:text-white bg-[#0D0D0D] hover:bg-[#141414] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-all duration-200"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888]" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-[#888888] hover:text-white bg-[#0D0D0D] hover:bg-[#141414] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-all duration-200"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span className="text-white font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#666666]" />
                    <span>kushalpatel1596@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1 font-mono text-xs text-[#555555]">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E0E0E0] transition-colors"
              >
                <Github className="w-4 h-4 text-[#777777]" />
                <span>github</span>
              </a>
              <span>/</span>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E0E0E0] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#777777]" />
                <span>linkedin</span>
              </a>
              <span>/</span>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-[#E0E0E0] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#777777]" />
                <span>email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Monochrome Personal Card & Grayscale Companion Artwork (Stagger delay 350ms) */}
          <div className="lg:col-span-5 flex flex-col gap-3 animate-fade-up delay-350">
            <div className="p-4 sm:p-5 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs text-[#666666] border-b border-[#1A1A1A] pb-2.5">
                <span className="text-[#A0A0A0] font-medium">&gt; personal.meta</span>
                <span className="text-[#454545]">v2026.09</span>
              </div>

              {/* Requirement 11: Pure Monochrome Grayscale Character Illustration with Subtle Hover */}
              <div className="relative w-full h-40 sm:h-44 rounded-lg bg-[#070707] border border-[#181818] overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/images/character_composite.png"
                  alt="Companion illustration"
                  width={240}
                  height={160}
                  className="w-auto h-full object-contain filter grayscale contrast-110 brightness-95 group-hover:contrast-125 group-hover:brightness-105 group-hover:-translate-y-0.5 transition-all duration-500 ease-out"
                  priority
                />
                <div className="absolute bottom-2 right-2 text-right">
                  <span className="font-handwritten text-xs text-[#A0A0A0] bg-[#0A0A0A]/90 px-2 py-0.5 rounded border border-[#1A1A1A]">
                    &ldquo;A better version of myself, everyday.&rdquo;
                  </span>
                </div>
              </div>

              {/* Dev Philosophy & Quick Specs */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[#888888] py-0.5 border-b border-[#151515]">
                  <span className="text-[#555555]">&gt; currently_building</span>
                  <span className="text-[#E0E0E0] font-medium">Solar Flare Prediction</span>
                </div>
                <div className="flex items-center justify-between text-[#888888] py-1 border-b border-[#151515]">
                  <span className="text-[#555555]">specialization</span>
                  <span className="text-[#CCCCCC]">Vision Transformers &amp; Edge AI</span>
                </div>
                <div className="flex items-center justify-between text-[#888888] py-1 border-b border-[#151515]">
                  <span className="text-[#555555]">hackathon_wins</span>
                  <span className="text-[#CCCCCC]">LOC 8.0 Winner (1000+ teams)</span>
                </div>
                <div className="flex items-center justify-between text-[#888888] pt-1">
                  <span className="text-[#555555]">dev_loop</span>
                  <span className="text-[#777777]">
                    learn() <span className="text-[#A0A0A0]">&rarr;</span> build() <span className="text-[#A0A0A0]">&rarr;</span> improve()
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
