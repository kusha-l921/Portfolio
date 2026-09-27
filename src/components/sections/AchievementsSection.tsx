'use client';

import React from 'react';
import { Trophy, Award, Users, Target, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function AchievementsSection() {
  const { achievements } = RESUME_DATA;

  return (
    <section className="py-12 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">achievements.list</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">competitive-wins</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Honors &amp; Hackathon Wins
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            National-level hackathons solving real-world trade and edge anomaly problems.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {achievements.map((item) => {
            const isWinner = item.award.includes('Winner');

            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/50 transition-all duration-300 shadow-card flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-semibold ${
                        isWinner
                          ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                          : 'bg-cyan-accent/10 text-cyan-accent border border-border-cyan'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      {item.award}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{item.date}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-0.5">
                      {item.organizer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border-subtle/50 flex items-center justify-between font-mono text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>{isWinner ? '1000+ Participants' : '250+ Teams'}</span>
                  </span>
                  <span className="text-cyan-accent">National Level</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
