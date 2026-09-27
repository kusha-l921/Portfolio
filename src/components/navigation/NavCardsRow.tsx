'use client';

import React from 'react';
import { User, Folder, Box, BarChart3, Send, ArrowRight } from 'lucide-react';

interface NavCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARDS: NavCard[] = [
  {
    id: 'about',
    num: '01',
    title: 'ABOUT',
    desc: 'Get to know me, my interests and what I do.',
    icon: User,
  },
  {
    id: 'projects',
    num: '02',
    title: 'PROJECTS',
    desc: 'Explore my featured work and case studies.',
    icon: Folder,
  },
  {
    id: 'skills',
    num: '03',
    title: 'SKILLS',
    desc: 'Tools and technologies I work with.',
    icon: Box,
  },
  {
    id: 'experience',
    num: '04',
    title: 'EXPERIENCE',
    desc: 'My academic and professional journey.',
    icon: BarChart3,
  },
  {
    id: 'contact',
    num: '05',
    title: 'CONTACT',
    desc: "Let's build something amazing together.",
    icon: Send,
  },
];

export default function NavCardsRow({
  onSelectCard,
}: {
  onSelectCard: (id: string) => void;
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 my-6">
      {CARDS.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            onClick={() => onSelectCard(card.id)}
            className="group relative p-4 rounded-lg border border-border-cyan bg-[#080D16] hover:bg-[#0C1422] hover:border-cyan-accent transition-all duration-200 cursor-pointer flex flex-col justify-between h-[128px] shadow-sm hover:shadow-cyan-sm select-none"
          >
            {/* Top row: Number and Cyan Icon */}
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-text-muted font-bold group-hover:text-cyan-accent transition-colors">
                {card.num}
              </span>
              <div className="w-7 h-7 rounded border border-border-cyan bg-cyan-accent/5 flex items-center justify-center text-cyan-accent group-hover:text-cyan-bright group-hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] transition-all">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Middle: Title & Subtext */}
            <div>
              <h3 className="font-mono text-xs font-bold text-text-primary tracking-wider group-hover:text-cyan-accent transition-colors mb-0.5">
                {card.title}
              </h3>
              <p className="text-[11px] text-text-secondary leading-tight line-clamp-2">
                {card.desc}
              </p>
            </div>

            {/* Bottom Right: [➔] Indicator */}
            <div className="self-end font-mono text-[10px] text-text-muted group-hover:text-cyan-accent transition-colors flex items-center gap-0.5">
              <span>[</span>
              <ArrowRight className="w-2.5 h-2.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              <span>]</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
