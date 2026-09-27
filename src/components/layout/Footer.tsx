'use client';

import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#me');
  };

  return (
    <footer className="py-12 border-t border-border-subtle font-mono text-xs text-text-muted">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-text-primary font-semibold">
            {RESUME_DATA.personal.fullName}
          </span>
          <span className="hidden sm:inline text-border-cyan">•</span>
          <span>AI/ML Engineering Student &amp; Builder</span>
          <span className="hidden sm:inline text-border-cyan">•</span>
          <span>Mumbai, India</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-text-secondary">all systems operational</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#0B1016] border border-border-subtle hover:border-border-cyan text-text-secondary hover:text-text-primary transition-all duration-200"
            title="Back to top"
          >
            <span>top</span>
            <ArrowUp className="w-3 h-3 text-cyan-accent" />
          </button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-text-muted">
        <div>
          &copy; {new Date().getFullYear()} Kushal Patel. Built with Next.js &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          <span>80% portfolio</span>
          <span>•</span>
          <span>20% terminal accents</span>
        </div>
      </div>
    </footer>
  );
}
