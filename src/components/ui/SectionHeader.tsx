'use client';

import React from 'react';

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  index,
  tag,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {/* Small Technical Label */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-electric-blue tracking-wider font-semibold">
          {index}
        </span>
        <div className="h-px w-6 bg-electric-blue/40" />
        <span className="font-mono text-xs text-muted-text uppercase tracking-widest">
          {tag}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary-text">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-secondary-text max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle line with glowing signal */}
      <div className="relative mt-6 h-px w-full bg-gradient-to-r from-border/80 via-electric-blue/30 to-transparent">
        <span className="absolute left-0 -top-[2px] w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#1687FF]" />
      </div>
    </div>
  );
}
