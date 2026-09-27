'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EXPERIENCES } from '@/data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function TerminalDrawer({
  isOpen,
  onClose,
  onOpenProject,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (slug: string) => void;
}) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init',
      command: 'whoami',
      output: (
        <div className="space-y-1 text-xs text-secondary-text">
          <p className="text-white font-semibold">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
          <p>{PERSONAL_INFO.bio}</p>
          <p className="text-muted-text">Type <span className="text-accent font-semibold">help</span> to view available commands.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const raw = cmd.trim().toLowerCase();
    if (!raw) return;

    let out: React.ReactNode = null;

    switch (raw) {
      case 'help':
        out = (
          <div className="text-xs space-y-1 text-secondary-text">
            <p className="text-white font-semibold">Available commands:</p>
            <div className="grid grid-cols-2 gap-1 mt-1 text-[11px]">
              <div><span className="text-accent">whoami</span> — Profile summary</div>
              <div><span className="text-accent">about</span> — Bio & focus</div>
              <div><span className="text-accent">projects</span> — List all projects</div>
              <div><span className="text-accent">skills</span> — Grouped technical stack</div>
              <div><span className="text-accent">experience</span> — Career milestones</div>
              <div><span className="text-accent">contact</span> — Reach out</div>
              <div><span className="text-accent">clear</span> — Clear output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        out = (
          <div className="text-xs space-y-1 text-secondary-text">
            <p className="text-white font-semibold">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-muted-text">{PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.institution})</p>
          </div>
        );
        break;

      case 'about':
        out = (
          <div className="text-xs space-y-1 text-secondary-text">
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-muted-text">Focus: Machine Learning, Computer Vision, AI Systems</p>
          </div>
        );
        break;

      case 'projects':
        out = (
          <div className="text-xs space-y-1.5">
            <p className="text-muted-text">Click any project to view details:</p>
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onClose();
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer hover:text-accent transition-colors flex items-center justify-between text-secondary-text"
              >
                <span>[{p.number}] {p.title}</span>
                <span className="text-[10px] text-muted-text">{p.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        out = (
          <div className="text-xs space-y-2 text-secondary-text">
            {SKILL_GROUPS.map((g) => (
              <div key={g.category}>
                <span className="text-muted-text text-[10px] block">{g.category}:</span>
                <span className="text-primary-text">{g.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        out = (
          <div className="text-xs space-y-1 text-secondary-text">
            {EXPERIENCES.map((e) => (
              <div key={e.id}>
                <span className="text-accent">[{e.year}]</span> <span className="text-white font-medium">{e.role}</span> @ {e.organization}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        out = (
          <div className="text-xs text-secondary-text space-y-1">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-accent underline">{PERSONAL_INFO.socials.email}</a></p>
            <p>GitHub: {PERSONAL_INFO.socials.github}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        out = (
          <p className="text-xs text-muted-text">
            Command not found: <span className="text-primary-text">{raw}</span>. Type <span className="text-accent">help</span>.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: raw,
        output: out,
      },
    ]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-32px)] sm:w-[480px] h-[340px] rounded-xl border border-white/10 bg-[#0D1117]/95 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
      {/* Top Header */}
      <div className="h-9 px-3 border-b border-white/10 bg-[#11161D] flex items-center justify-between text-muted-text select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-accent" />
          <span className="text-secondary-text font-medium text-[11px]">
            kushal@portfolio:~$ [interactive_shell]
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-white/5 text-muted-text hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Output Screen */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5 text-xs">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-muted-text">
              <span className="text-accent">&gt;</span>
              <span className="text-primary-text font-medium">{item.command}</span>
            </div>
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Line */}
      <div className="p-2.5 border-t border-white/10 bg-[#11161D] flex items-center gap-2">
        <span className="text-accent font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleCommand(inputVal);
          }}
          placeholder="type 'help', 'whoami', or 'projects'..."
          className="flex-1 bg-transparent text-primary-text font-mono text-xs focus:outline-none placeholder:text-muted-text/40"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          className="p-1 text-muted-text hover:text-accent transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
