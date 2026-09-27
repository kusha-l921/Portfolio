'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Github, Linkedin, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Description (Requirement 25) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-text mb-2">
              <span className="text-accent">&gt;</span>
              <span className="text-secondary-text">./contact</span>
            </div>
            <div className="w-12 h-px bg-white/20 mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text mb-4">
              Let's build something.
            </h2>
            <p className="text-sm sm:text-base text-secondary-text leading-relaxed max-w-md mb-8">
              Have a project, research collaboration, or engineering opportunity in mind? Feel free to reach out.
            </p>

            {/* Direct Links */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="flex items-center gap-2 text-secondary-text hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-text" />
                <span>{PERSONAL_INFO.socials.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-text hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4 text-muted-text" />
                <span>github.com/kushal-engineer</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-text hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-text" />
                <span>linkedin.com/in/kushal-ai</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Minimal Form (Requirement 25 & 26) */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-muted-text mb-1 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#11161D] border border-white/10 focus:border-accent text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-text mb-1 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#11161D] border border-white/10 focus:border-accent text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-text mb-1 uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea or project..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#11161D] border border-white/10 focus:border-accent text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none transition-colors font-mono resize-none"
                />
              </div>

              {/* Submit Button with Sequential States (Requirement 26) */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="relative overflow-hidden w-full py-2.5 rounded-lg bg-[#2F9BFF] hover:bg-[#5CB5FF] text-white font-mono text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {/* Small blue pulse line on sending */}
                {status === 'sending' && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse" />
                )}

                {status === 'idle' && <span>Send Message</span>}
                {status === 'sending' && <span>Sending...</span>}
                {status === 'sent' && (
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <Check className="w-4 h-4" />
                    Message Sent ✓
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
