'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import CardTilt from '@/components/ui/CardTilt';
import { Send, CheckCircle2, Mail, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import { sound } from '@/utils/sound';

const ContactScene = dynamic(() => import('@/components/three/ContactScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] md:h-[460px] rounded-2xl border border-border/40 bg-panel/30 flex items-center justify-center">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
        <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
        <span>BOOTING_QUANTUM_RECEIVER...</span>
      </div>
    </div>
  ),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playClick();
    setIsSubmitting(true);

    // Simulate cryptographic transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playSuccess();
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05 / CONTACT"
          tag="COMMUNICATION PROTOCOL"
          title="Let's build something."
          subtitle="Have a research inquiry, high-impact engineering role, or ambitious distributed AI project? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          {/* Left Column: Interactive 3D Communication Prism Object (Requirement 40) */}
          <div className="lg:col-span-6 space-y-4">
            <ContactScene isFocused={isFocused} isSubmitted={isSubmitted} />

            {/* Direct Connect Quick Channels */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="p-3.5 rounded-xl border border-border/40 bg-panel/60 hover:border-electric-blue/60 transition-colors flex items-center gap-2.5 text-secondary-text hover:text-primary-text"
              >
                <Mail className="w-4 h-4 text-electric-blue" />
                <span className="truncate">EMAIL DIRECT</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-border/40 bg-panel/60 hover:border-electric-blue/60 transition-colors flex items-center gap-2.5 text-secondary-text hover:text-primary-text"
              >
                <Linkedin className="w-4 h-4 text-bright-blue" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Column: Encrypted Transmission Form */}
          <div className="lg:col-span-6">
            <CardTilt className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-panel-elevated/70 backdrop-blur-xl shadow-glass light-sweep-container">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success/15 border border-success/40 flex items-center justify-center text-success shadow-[0_0_20px_rgba(50,213,131,0.3)]">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-text font-mono">
                    CONNECTION ESTABLISHED
                  </h3>
                  <p className="text-sm text-secondary-text max-w-sm">
                    Transmission securely routed. Kushal will decrypt and respond to{' '}
                    <span className="text-bright-blue font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg border border-border/60 bg-panel text-xs font-mono text-secondary-text hover:text-primary-text"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-border/30 pb-3">
                    <span className="text-xs font-mono text-electric-blue flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                      ENCRYPTED_SIGNAL_STREAM
                    </span>
                    <span className="text-[10px] font-mono text-muted-text">TLS_v1.3 // 256-BIT</span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-text mb-1.5 uppercase">
                      YOUR IDENTIFIER / NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Elena Vance / Google DeepMind"
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border/60 focus:border-bright-blue text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none focus:ring-1 focus:ring-bright-blue/50 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-text mb-1.5 uppercase">
                      RETURN SIGNAL ADDRESS / EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border/60 focus:border-bright-blue text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none focus:ring-1 focus:ring-bright-blue/50 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-text mb-1.5 uppercase">
                      PAYLOAD / TRANSMISSION MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role, or collaboration scope..."
                      className="w-full px-4 py-3 rounded-xl bg-panel border border-border/60 focus:border-bright-blue text-sm text-primary-text placeholder:text-muted-text/40 focus:outline-none focus:ring-1 focus:ring-bright-blue/50 transition-all font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-electric-blue via-bright-blue to-soft-blue hover:opacity-90 text-white font-mono text-xs sm:text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(22,135,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span>ENCRYPTING & DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT PACKET</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
