'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#me');
  };

  return (
    <footer className="py-8 sm:py-10 border-t border-[#171717] font-mono text-xs text-[#555555]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-[#D4D4D4] font-semibold">
            {RESUME_DATA.personal.fullName}
          </span>
          <span className="hidden sm:inline text-[#333333]">•</span>
          <span className="text-[#777777]">AI/ML Engineering Student &amp; Builder</span>
          <span className="hidden sm:inline text-[#333333]">•</span>
          <span className="text-[#777777]">Mumbai, India</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#888888]" />
            <span className="text-[#888888]">all systems operational</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#2C2C2C] text-[#888888] hover:text-white transition-all duration-200"
            title="Back to top"
          >
            <span>top</span>
            <ArrowUp className="w-3 h-3 text-[#A0A0A0]" />
          </button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#121212] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#454545]">
        <div>
          &copy; {new Date().getFullYear()} Kushal Patel. Built with Next.js &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-2 text-[#454545]">
          <span>monochrome minimal</span>
          <span>•</span>
          <span>subtle developer accents</span>
        </div>
      </div>
    </footer>
  );
}
