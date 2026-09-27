'use client';

import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Mail, Phone, MapPin, Award, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { RESUME_DATA, ResumeProject } from '@/data/portfolioData';

export default function SectionDetailModal({
  sectionId,
  selectedProjectId,
  onClose,
}: {
  sectionId: string | null;
  selectedProjectId?: string | null;
  onClose: () => void;
}) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sectionId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sectionId, onClose]);

  if (!sectionId) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl rounded-xl border border-border-cyan bg-[#080D16] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col font-mono">
        {/* Modal Window Header */}
        <div className="px-5 py-3 border-b border-border-subtle bg-[#0A101C] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
            <span className="text-cyan-accent font-semibold tracking-wide">
              ~/kushal/{sectionId}.sh
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-text-muted hover:text-white hover:bg-white/5 transition-colors"
            title="Close [ESC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-text-secondary">
          {/* ABOUT MODAL */}
          {sectionId === 'about' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block mb-1">
                  01 // BIOGRAPHY & PHILOSOPHY
                </span>
                <h2 className="text-2xl font-sans font-bold text-text-primary">
                  About Kushal Patel
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {RESUME_DATA.personal.description}
                </p>
              </div>

              {/* Education Box */}
              <div className="p-4 rounded-lg border border-border-cyan bg-[#0D1522] space-y-2">
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block font-semibold">
                  ACADEMIC FOUNDATION
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm font-sans font-bold text-text-primary">
                    {RESUME_DATA.education.institution}
                  </h3>
                  <span className="text-[11px] text-cyan-accent">
                    {RESUME_DATA.education.period}
                  </span>
                </div>
                <p className="text-xs text-text-primary">
                  {RESUME_DATA.education.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-muted pt-1">
                  <span>{RESUME_DATA.education.honours}</span>
                  <span>•</span>
                  <span className="text-cyan-bright font-semibold">CGPA: {RESUME_DATA.education.cgpa}</span>
                  <span>•</span>
                  <span>{RESUME_DATA.education.location}</span>
                </div>
              </div>

              {/* Personal Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded border border-border-subtle bg-[#0A101A]">
                  <span className="text-[10px] text-text-muted block">LOCATION</span>
                  <span className="text-xs text-text-primary font-bold">Mumbai, India</span>
                </div>
                <div className="p-3 rounded border border-border-subtle bg-[#0A101A]">
                  <span className="text-[10px] text-text-muted block">CORE FOCUS</span>
                  <span className="text-xs text-cyan-accent font-bold">AI / ML & Vision</span>
                </div>
                <div className="p-3 rounded border border-border-subtle bg-[#0A101A]">
                  <span className="text-[10px] text-text-muted block">STATUS</span>
                  <span className="text-xs text-green-400 font-bold">Open to Work</span>
                </div>
                <div className="p-3 rounded border border-border-subtle bg-[#0A101A]">
                  <span className="text-[10px] text-text-muted block">GRADUATION</span>
                  <span className="text-xs text-text-primary font-bold">May 2028</span>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS MODAL */}
          {sectionId === 'projects' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block mb-1">
                  02 // FEATURED SYSTEMS & RESEARCH
                </span>
                <h2 className="text-2xl font-sans font-bold text-text-primary">
                  Projects & Case Studies
                </h2>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-lg border border-border-cyan bg-[#0A101A] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-accent font-bold">[{proj.number}]</span>
                        <h3 className="text-base font-sans font-bold text-text-primary">
                          {proj.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-text-muted">{proj.period}</span>
                    </div>

                    <p className="text-xs text-cyan-accent/90">
                      {proj.tagline}
                    </p>

                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {proj.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-accent font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border-subtle">
                      <div className="flex flex-wrap gap-1">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[#0D1522] border border-border-cyan text-[10px] text-cyan-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded border border-border-subtle hover:border-border-cyan bg-[#070D14] text-text-primary flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded bg-cyan-accent text-[#05080E] font-bold flex items-center gap-1.5"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS MODAL */}
          {sectionId === 'skills' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block mb-1">
                  03 // TOOLS & TECHNOLOGIES
                </span>
                <h2 className="text-2xl font-sans font-bold text-text-primary">
                  Technical Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border-cyan bg-[#0A101A] space-y-2">
                  <span className="text-[11px] text-cyan-accent uppercase tracking-wider block font-bold">
                    AI / MACHINE LEARNING
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.aiml.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded bg-[#0D1522] border border-border-cyan text-text-primary text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border-cyan bg-[#0A101A] space-y-2">
                  <span className="text-[11px] text-cyan-accent uppercase tracking-wider block font-bold">
                    PROGRAMMING LANGUAGES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.languages.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded bg-[#0D1522] border border-border-cyan text-text-primary text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border-cyan bg-[#0A101A] space-y-2">
                  <span className="text-[11px] text-cyan-accent uppercase tracking-wider block font-bold">
                    WEB & BACKEND
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.web.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded bg-[#0D1522] border border-border-cyan text-text-primary text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border-cyan bg-[#0A101A] space-y-2">
                  <span className="text-[11px] text-cyan-accent uppercase tracking-wider block font-bold">
                    SYSTEMS & TOOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.tools.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded bg-[#0D1522] border border-border-cyan text-text-primary text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPERIENCE / ACHIEVEMENTS MODAL */}
          {sectionId === 'experience' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block mb-1">
                  04 // MILESTONES & HACKATHONS
                </span>
                <h2 className="text-2xl font-sans font-bold text-text-primary">
                  Academic & National Honors
                </h2>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-5 rounded-lg border border-border-cyan bg-[#0A101A] space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-cyan-accent/15 border border-cyan-accent text-[10px] font-bold text-cyan-accent">
                        {ach.award}
                      </span>
                      <span className="text-[11px] text-text-muted">{ach.date}</span>
                    </div>

                    <h3 className="text-sm font-sans font-bold text-text-primary">
                      {ach.title}
                    </h3>
                    <p className="text-[11px] text-cyan-accent font-mono">
                      {ach.organizer}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT MODAL */}
          {sectionId === 'contact' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-cyan-accent uppercase tracking-widest block mb-1">
                  05 // GET IN TOUCH
                </span>
                <h2 className="text-2xl font-sans font-bold text-text-primary">
                  Contact Kushal
                </h2>
                <p className="text-xs text-text-secondary mt-1">
                  Available for applied AI/ML engineering roles, computer vision projects, and research collaborations.
                </p>
              </div>

              {/* Direct Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="p-3 rounded-lg border border-border-cyan bg-[#0A101A] hover:bg-[#0E1624] text-text-primary flex items-center gap-2.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-accent shrink-0" />
                  <span className="truncate">{RESUME_DATA.personal.email}</span>
                </a>

                <a
                  href={`tel:${RESUME_DATA.personal.phone}`}
                  className="p-3 rounded-lg border border-border-cyan bg-[#0A101A] hover:bg-[#0E1624] text-text-primary flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-accent shrink-0" />
                  <span>{RESUME_DATA.personal.phone}</span>
                </a>

                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border-cyan bg-[#0A101A] hover:bg-[#0E1624] text-text-primary flex items-center gap-2.5 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-accent shrink-0" />
                  <span>LinkedIn Profile ↗</span>
                </a>

                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border-cyan bg-[#0A101A] hover:bg-[#0E1624] text-text-primary flex items-center gap-2.5 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-accent shrink-0" />
                  <span>GitHub Profile ↗</span>
                </a>
              </div>

              {/* Fast Message Form */}
              <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] text-text-muted mb-1 uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2 rounded bg-[#0A101A] border border-border-subtle focus:border-cyan-accent text-xs text-text-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-text-muted mb-1 uppercase">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2 rounded bg-[#0A101A] border border-border-subtle focus:border-cyan-accent text-xs text-text-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-text-muted mb-1 uppercase">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project details or inquiry..."
                    className="w-full px-3.5 py-2 rounded bg-[#0A101A] border border-border-subtle focus:border-cyan-accent text-xs text-text-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-cyan-accent hover:bg-cyan-bright text-[#05080E] font-bold text-xs shadow-cyan-sm transition-all"
                >
                  {formSent ? 'Transmission Sent ✓' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
