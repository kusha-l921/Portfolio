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
    <section id="contact" className="py-6 sm:py-8 scroll-mt-20">
      {/* Requirement 8: Animated Subtle Section Divider */}
      <div className="section-divider mb-6 sm:mb-8 divider-active" />

      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
          <span className="text-[#888888]">&gt;</span>
          <span className="text-[#A0A0A0]">contact.init()</span>
          <span className="text-[#262626]">/</span>
          <span className="text-[#555555]">direct-channel</span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F1F1]">
            Get In Touch
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#888888]">
            Have a project in mind, an AI/ML research problem, or want to collaborate? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="font-mono text-xs text-[#A0A0A0] font-medium border-b border-[#161616] pb-3">
                &gt; direct_channels
              </div>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#555555]">Email</span>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#070707] border border-[#181818]">
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="font-mono text-xs text-[#D4D4D4] hover:text-white transition-colors truncate mr-2"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded text-[#666666] hover:text-white hover:bg-[#141414] transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#555555]">Phone</span>
                <div className="p-2.5 rounded-lg bg-[#070707] border border-[#181818]">
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="font-mono text-xs text-[#D4D4D4] hover:text-white transition-colors"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
              </div>

              {/* Location & Local Clock */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#555555]">Location &amp; Local Time</span>
                <div className="p-2.5 rounded-lg bg-[#070707] border border-[#181818] flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-[#9A9A9A]">
                    <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                    Mumbai, India
                  </span>
                  <span className="flex items-center gap-1.5 text-[#666666] text-[11px]">
                    <Clock className="w-3 h-3 text-[#555555]" />
                    {localTime || 'IST'}
                  </span>
                </div>
              </div>

              {/* Social profiles */}
              <div className="pt-2 border-t border-[#161616] flex items-center justify-between font-mono text-xs">
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#666666] hover:text-[#E0E0E0] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#555555]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#454545]" />
                </a>

                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#666666] hover:text-[#E0E0E0] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#555555]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#454545]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="font-mono text-xs text-[#666666] border-b border-[#161616] pb-3 mb-5 flex items-center justify-between">
                <span className="text-[#A0A0A0] font-medium">&gt; message_terminal</span>
                <span className="text-[#454545]">direct message</span>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#161616] border border-[#282828] flex items-center justify-center mx-auto text-white">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F1F1]">
                    Message Transmitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888888] max-w-sm mx-auto font-mono">
                    Thanks for reaching out! I&apos;ll review your note and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono text-[#D4D4D4] bg-[#141414] border border-[#222222] hover:bg-[#1A1A1A] hover:text-white transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-xs text-[#666666] block">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Turing"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070707] border border-[#181818] text-xs sm:text-sm text-[#F1F1F1] placeholder:text-[#454545] focus:outline-none focus:border-[#333333] font-mono transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-xs text-[#666666] block">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070707] border border-[#181818] text-xs sm:text-sm text-[#F1F1F1] placeholder:text-[#454545] focus:outline-none focus:border-[#333333] font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-xs text-[#666666] block">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kushal, I came across your solar flare forecasting project..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070707] border border-[#181818] text-xs sm:text-sm text-[#F1F1F1] placeholder:text-[#454545] focus:outline-none focus:border-[#333333] font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#F1F1F1] hover:bg-white text-[#050505] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-[0_2px_12px_rgba(255,255,255,0.1)]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-[#050505]" />
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
