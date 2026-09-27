'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { sound } from '@/utils/sound';

export default function Footer({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/40 bg-panel/80 backdrop-blur-md py-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/30">
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div>
              <span className="text-base font-bold text-primary-text tracking-wider font-sans">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-muted-text mx-2">//</span>
              <span className="text-bright-blue font-semibold">AI/ML ENGINEER</span>
            </div>
            <span className="text-muted-text text-[11px]">
              DJ Sanghvi College of Engineering • University of Mumbai
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-secondary-text">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}`}
              className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <Link
              href="/resume"
              className="hover:text-bright-blue transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-border/40 hover:border-electric-blue text-muted-text hover:text-primary-text transition-colors"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Small Terminal Accent (Requirement 48) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-text text-[11px]">
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="hover:text-electric-blue transition-colors flex items-center gap-1 text-left"
            >
              <span className="text-electric-blue font-bold">&gt;</span>
              <span>kushal@portfolio:~$ exit</span>
            </button>
            <span className="text-border">•</span>
            <span>All systems nominal</span>
          </div>

          <div>
            Built with React Three Fiber, Three.js, Next.js & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
