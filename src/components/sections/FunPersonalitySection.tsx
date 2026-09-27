'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Headphones, BookOpen, Heart, Sparkles, Terminal, Code2, Music, CheckCircle2, RefreshCw } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function FunPersonalitySection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressVal, setProgressVal] = useState(78);

  const playlist = [
    { title: 'Synthwave Odyssey', artist: 'Night Drive', duration: '3:45' },
    { title: 'Deep Focus Lo-Fi', artist: 'ChilledCow', duration: '2:50' },
    { title: 'Solar Echoes (Ambient)', artist: 'Heliocore', duration: '4:12' },
  ];

  const booksAndPapers = [
    {
      title: 'Attention Is All You Need & ViT Extensions',
      author: 'Vaswani et al. / Dosovitskiy et al.',
      status: 'Core Reference',
    },
    {
      title: 'Swin Transformer V2: Scaling Up Capacity',
      author: 'Liu, Hu, Lin et al. (Microsoft Research)',
      status: 'Applied in FirSeFile',
    },
    {
      title: 'Systems Programming in Rust & eBPF',
      author: 'High-Performance Systems Architecture',
      status: 'Current Exploration',
    },
  ];

  const principles = [
    {
      label: 'Real-world impact first',
      detail: 'Build systems that solve actual problems rather than optimizing for toy benchmarks.',
    },
    {
      label: 'Latency & efficiency matter',
      detail: 'Edge hardware is the truest test of algorithmic elegance — 35.8ms beats bloated 10s backends.',
    },
    {
      label: 'Relentless consistency',
      detail: 'Every small improvement compounds into extraordinary technical craftsmanship.',
    },
  ];

  return (
    <section id="fun" className="py-16 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-8">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">fun.config</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">personality-and-habits</span>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Fun &amp; Beyond the Terminal
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Music for deep work, reading list, companion art, and everyday developer rituals.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {/* Card 1: Companion Art & Philosophy */}
          <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-2.5">
                <span className="flex items-center gap-1.5 text-cyan-accent font-semibold">
                  <Heart className="w-3.5 h-3.5" />
                  companion.art
                </span>
                <span>daily inspiration</span>
              </div>

              <div className="relative w-full h-40 rounded-lg bg-[#05070A] border border-border-subtle overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/images/character_composite.png"
                  alt="Companion Art"
                  width={220}
                  height={150}
                  className="w-auto h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
                />
              </div>

              <p className="font-handwritten text-center text-sm sm:text-base text-cyan-accent pt-1">
                &ldquo;A better version of myself, everyday.&rdquo;
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle/50 font-mono text-[11px] text-text-muted text-center">
              Creativity &bull; Curiosity &bull; Consistency
            </div>
          </div>

          {/* Card 2: Music & Coding Audio */}
          <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-2.5">
                <span className="flex items-center gap-1.5 text-cyan-accent font-semibold">
                  <Headphones className="w-3.5 h-3.5" />
                  coding_audio
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  listening
                </span>
              </div>

              {/* Animated Equalizer Visual */}
              <div className="p-3.5 rounded-lg bg-[#05070A] border border-border-subtle flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-text-primary block">
                    Synthwave &amp; Ambient Lo-Fi
                  </span>
                  <span className="text-[10px] font-mono text-text-muted block">
                    High-focus spatiotemporal research mix
                  </span>
                </div>

                <div className="flex items-end gap-1 h-6">
                  <span className="w-1 bg-cyan-accent rounded-full animate-bounce [animation-delay:0.1s] h-4" />
                  <span className="w-1 bg-cyan-accent rounded-full animate-bounce [animation-delay:0.3s] h-6" />
                  <span className="w-1 bg-cyan-accent rounded-full animate-bounce [animation-delay:0.2s] h-3" />
                  <span className="w-1 bg-cyan-accent rounded-full animate-bounce [animation-delay:0.4s] h-5" />
                </div>
              </div>

              {/* Playlist Tracks */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                {playlist.map((track, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded bg-[#05070A]/60 border border-border-subtle/50 text-text-secondary"
                  >
                    <div className="flex items-center gap-2">
                      <Music className="w-3 h-3 text-cyan-accent" />
                      <span className="text-text-primary text-[11px]">{track.title}</span>
                    </div>
                    <span className="text-[10px] text-text-muted">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle/50 font-mono text-[11px] text-text-muted flex justify-between">
              <span>BPM: 120 (Flow State)</span>
              <span className="text-cyan-accent">Spotify Sync</span>
            </div>
          </div>

          {/* Card 3: Reading & Research Queue */}
          <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-2.5">
                <span className="flex items-center gap-1.5 text-cyan-accent font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  reading.queue
                </span>
                <span>papers &amp; docs</span>
              </div>

              <div className="space-y-2.5">
                {booksAndPapers.map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-[#05070A] border border-border-subtle space-y-1"
                  >
                    <span className="text-xs font-semibold text-text-primary block leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted block">
                      {item.author}
                    </span>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-cyan-accent/10 text-[10px] font-mono text-cyan-accent">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle/50 font-mono text-[11px] text-text-muted flex justify-between">
              <span>Continuous Learning</span>
              <span className="text-cyan-accent">3 Active</span>
            </div>
          </div>

          {/* Card 4: Daily Loop & Rituals */}
          <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-2.5">
                <span className="flex items-center gap-1.5 text-cyan-accent font-semibold">
                  <RefreshCw className="w-3.5 h-3.5" />
                  daily.loop()
                </span>
                <span>habits</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>&gt; learn() // paper review &amp; math foundations</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>&gt; build() // model training &amp; clean code</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>&gt; improve() // profiling latency &amp; edge memory</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>&gt; repeat() // everyday consistency</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between font-mono text-[11px] text-text-muted">
                  <span>Progress to graduation (May 2028)</span>
                  <span className="text-cyan-accent">45%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#05070A] border border-border-subtle overflow-hidden">
                  <div className="h-full bg-cyan-accent w-[45%]" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle/50 font-mono text-[11px] text-text-muted flex justify-between">
              <span>Habit Consistency</span>
              <span className="text-emerald-400">Active Streak</span>
            </div>
          </div>

          {/* Card 5: Core Engineering Principles (spans 2 columns) */}
          <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card md:col-span-2 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-border-subtle pb-2.5">
                <span className="flex items-center gap-1.5 text-cyan-accent font-semibold">
                  <Code2 className="w-3.5 h-3.5" />
                  engineering_philosophy
                </span>
                <span>core tenets</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {principles.map((p, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#05070A] border border-border-subtle space-y-1">
                    <span className="font-mono text-xs font-semibold text-cyan-accent block">
                      0{i + 1}. {p.label}
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle/50 font-mono text-[11px] text-text-muted flex justify-between">
              <span>Code that lives in production</span>
              <span className="text-cyan-accent">No compromise on clarity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
