'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <span className="font-sans font-bold text-base text-primary-text">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-muted-text">{PERSONAL_INFO.role}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-secondary-text">
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
              className="hover:text-accent transition-colors"
            >
              <span>Resume ↗</span>
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded border border-white/10 hover:border-white/20 text-muted-text hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Small subtle terminal exit prompt */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-muted-text text-[11px]">
          <button
            onClick={onOpenTerminal}
            className="hover:text-accent transition-colors flex items-center gap-1 text-left"
          >
            <span className="text-accent">&gt;</span>
            <span>kushal@portfolio:~$ exit</span>
          </button>

          <div>
            Built with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
