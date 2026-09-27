'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata (Mumbai)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-8">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">contact.send()</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">direct-channel</span>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Get In Touch
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Have a project in mind, an AI/ML research idea, or want to collaborate? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle space-y-5 shadow-card">
              <div className="font-mono text-xs text-cyan-accent font-semibold border-b border-border-subtle pb-3">
                &gt; direct_channels
              </div>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-text-muted">Email</span>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#05070A] border border-border-subtle">
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="font-mono text-xs text-text-primary hover:text-cyan-accent transition-colors truncate mr-2"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded text-text-muted hover:text-cyan-accent hover:bg-[#0B1016] transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-text-muted">Phone</span>
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-border-subtle">
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="font-mono text-xs text-text-primary hover:text-cyan-accent transition-colors"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
              </div>

              {/* Location & Local Clock */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-text-muted">Location &amp; Local Time</span>
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-border-subtle flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
                    Mumbai, India
                  </span>
                  <span className="flex items-center gap-1.5 text-text-muted text-[11px]">
                    <Clock className="w-3 h-3 text-cyan-accent" />
                    {localTime || 'IST'}
                  </span>
                </div>
              </div>

              {/* Social profiles */}
              <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between font-mono text-xs">
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-text-muted hover:text-cyan-accent transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-text-muted hover:text-cyan-accent transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-[#0B1016] border border-border-subtle shadow-card">
              <div className="font-mono text-xs text-text-muted border-b border-border-subtle pb-3 mb-5 flex items-center justify-between">
                <span className="text-cyan-accent font-semibold">&gt; transmit_message.sh</span>
                <span>encrypted</span>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    Message Transmitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary max-w-sm mx-auto font-mono">
                    Thanks for reaching out! I&apos;ll review your note and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono text-cyan-accent bg-cyan-accent/10 border border-border-cyan hover:bg-cyan-accent/20 transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-xs text-text-muted block">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Turing"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border border-border-subtle text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-accent font-mono transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-xs text-text-muted block">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border border-border-subtle text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-accent font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-xs text-text-muted block">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kushal, I came across your solar flare forecasting project..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border border-border-subtle text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-accent font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-cyan-accent hover:bg-[#2DE2E6] text-[#05070A] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
