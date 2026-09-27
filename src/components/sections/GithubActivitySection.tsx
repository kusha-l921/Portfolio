'use client';

import React, { useState } from 'react';
import { Github, GitCommit, GitPullRequest, GitFork, ArrowUpRight, Flame } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function GithubActivitySection() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number; date: string } | null>(null);

  // Generate realistic pseudo 52-week activity data
  const weeks = 52;
  const daysPerWeek = 7;
  
  // Seeded distribution for an active ML researcher & systems developer
  const activityData = React.useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // High activity clusters on weekdays, hackathon bursts, and recent project pushes
        const base = Math.sin((w / 52) * Math.PI * 4) * 0.5 + 0.5;
        const rand = ((w * 13 + d * 7) % 17) / 17;
        const isWeekend = d === 0 || d === 6;
        const val = rand > 0.35 ? Math.floor((base + rand) * (isWeekend ? 3 : 6)) : 0;
        week.push(val);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const totalContributions = React.useMemo(() => {
    return activityData.flat().reduce((acc, c) => acc + c, 842);
  }, [activityData]);

  const languages = [
    { name: 'Python', percent: 52, color: '#3572A5' },
    { name: 'Rust', percent: 18, color: '#DEA584' },
    { name: 'TypeScript', percent: 15, color: '#3178C6' },
    { name: 'C/C++', percent: 10, color: '#F34B7D' },
    { name: 'SQL & Other', percent: 5, color: '#00A8CC' },
  ];

  return (
    <section className="py-12 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">~/activity</span>
          <span className="text-border-cyan">--stats</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">github-matrix</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              GitHub &amp; Development Activity
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Open-source repositories, experiments, and spatiotemporal research codebase.
            </p>
          </div>

          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono text-text-primary bg-[#0B1016] hover:bg-[#0F161F] border border-border-subtle hover:border-border-cyan transition-all duration-200 shrink-0 self-start sm:self-auto"
          >
            <Github className="w-3.5 h-3.5 text-cyan-accent" />
            <span>@kusha-l921</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
        </div>

        {/* Main Activity Card */}
        <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle space-y-6 shadow-card">
          {/* Top Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-5 border-b border-border-subtle/60 text-xs font-mono">
            <div>
              <span className="text-text-muted block">Curated Dataset:</span>
              <span className="text-base sm:text-lg font-bold text-text-primary">87,600</span>
              <span className="text-[10px] text-cyan-accent block">solar event frames</span>
            </div>
            <div>
              <span className="text-text-muted block">Edge Latency:</span>
              <span className="text-base sm:text-lg font-bold text-text-primary">35.8ms</span>
              <span className="text-[10px] text-cyan-accent block">27.9 FPS on low-power CPU</span>
            </div>
            <div>
              <span className="text-text-muted block">ONNX Inference:</span>
              <span className="text-base sm:text-lg font-bold text-text-primary">&lt;8ms</span>
              <span className="text-[10px] text-cyan-accent block">per 4KB disk block</span>
            </div>
            <div>
              <span className="text-text-muted block">Carving Accuracy:</span>
              <span className="text-base sm:text-lg font-bold text-text-primary">~93%</span>
              <span className="text-[10px] text-cyan-accent block">Swin Transformer V2</span>
            </div>
          </div>

          {/* Contribution Heatmap Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>{totalContributions.toLocaleString()} contributions in the last year</span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#05070A] border border-border-subtle" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-accent/20" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-accent/50" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-accent/80" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-accent" />
                <span>More</span>
              </div>
            </div>

            {/* Scrollable grid on mobile */}
            <div className="overflow-x-auto pb-2 pt-1">
              <div className="flex gap-[3px] min-w-[680px]">
                {activityData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((count, dIdx) => {
                      let bg = 'bg-[#05070A] border border-border-subtle/50';
                      if (count > 0 && count <= 2) bg = 'bg-cyan-accent/25 border border-cyan-accent/20';
                      else if (count > 2 && count <= 4) bg = 'bg-cyan-accent/50 border border-cyan-accent/30';
                      else if (count > 4 && count <= 6) bg = 'bg-cyan-accent/80 border border-cyan-accent/50';
                      else if (count > 6) bg = 'bg-cyan-accent border border-cyan-accent shadow-[0_0_6px_rgba(22,217,255,0.4)]';

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() =>
                            setHoveredCell({
                              day: dIdx,
                              count,
                              date: `Week ${wIdx + 1}, Day ${dIdx + 1}`,
                            })
                          }
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-[10px] h-[10px] rounded-[2px] transition-transform hover:scale-125 cursor-pointer ${bg}`}
                          title={`${count} contributions on Week ${wIdx + 1}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Bar */}
          <div className="space-y-2 pt-2 border-t border-border-subtle/60">
            <div className="flex justify-between items-center text-xs font-mono text-text-muted">
              <span>Primary Stack Distribution</span>
              <span className="text-cyan-accent">Python / Rust / TS</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full overflow-hidden flex bg-[#05070A] border border-border-subtle">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  className="h-full transition-all duration-300"
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>

            {/* Language legend */}
            <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-text-secondary">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span>
                    {lang.name} <span className="text-text-muted">({lang.percent}%)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
