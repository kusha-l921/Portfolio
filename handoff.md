# Kushal Patel — Portfolio Project Handoff Document

> **Date**: October 1, 2026  
> **Repository**: `/home/illoir/Desktop/port`  
> **Framework**: Next.js 14.2.15 (App Router), React 18, TypeScript, Tailwind CSS / Vanilla CSS  
> **Node Path**: Node binaries are located locally at `$(pwd)/.node/bin`. Always prefix terminal commands with:  
> `export PATH="$(pwd)/.node/bin:$PATH"`

---

## 1. Project Overview & Architecture

This repository is the personal portfolio of **Kushal Patel**, an AI/ML Engineer and Systems Builder based in Mumbai, India.

### Core Visual Language & Design System
* **Monochrome Grayscale Palette**: Multi-tier grayscale with deep black backgrounds (`#050505`), charcoal cards (`#0C0C0C`), subtle borders (`#1C1C1C` to `#303030`), and crisp typography luminance hierarchy (`#FFFFFF`, `#E7E7E7`, `#9A9A9A`, `#666666`).
* **Multi-Accent System (<5% of UI)**:
  * **Electric Blue** (`#5B8CFF`): Primary interactive elements, projects, links, navbar active indicators.
  * **Violet** (`#8B7CFF`): Skills, technical tags, AI/ML tokens.
  * **Soft Amber** (`#D6A85F`): Achievements, competition badges, rankings.
  * **Status Green** (`#6FAF8F`): Live online indicator dot with pulsing ring.
* **Typography**: Google Fonts Inter (sans) & JetBrains Mono (monospace).

---

## 2. Page Structure & Components (`src/app/page.tsx`)

1. **`Navbar.tsx`**:
   - Sticky pill bar with blur backdrop.
   - PFP avatar button (opens `PFPLightbox.tsx` to view illustration).
   - Section links (`/me`, `/about`, `/education`, `/projects`, `/achievements`, `/skills`, `/contact`).
   - Integrated terminal toggle button (`>_ terminal`).
   - Theme toggle (Dark / Light).
   - Live "online" status badge.
   - Resume download link (`resume.pdf ↗`).
2. **`Hero.tsx` (`#me`)**:
   - Terminal prompt label (`> whoami / kushal-patel`).
   - Large headline (`Kushal Patel`) with blinking blue cursor.
   - AI/ML positioning statements, metadata pills (location, college, degree).
   - Primary action buttons with light-sweep hover animations.
   - Social links (GitHub, LinkedIn, Email).
3. **`AtmosphericPFP.tsx`**:
   - Centered atmospheric anime illustration overlaid behind the Hero.
   - Soft elliptical radial mask (`maskImage`).
   - Direct GPU transform mouse parallax with auto-sleeping animation frame (0% React re-render overhead).
4. **`AboutSection.tsx` (`#about`)**:
   - Executive summary paragraph.
   - Core technical focus areas.
   - "Currently learning" tags.
   - Location & education grid.
5. **`EducationSection.tsx` (`#education`)**:
   - Degree, institution, timeline, GPA / Honors.
   - Coursework badges with subtle hover effects.
6. **`ProjectsSection.tsx` (`#projects`)**:
   - Category filter tabs (`All`, `AI / ML`, `Computer Vision`, `Systems`).
   - Detailed project cards featuring metrics, tags, and interactive VS Code-style `ProjectTerminalBox.tsx`.
   - Opens full project detail view in `ProjectModal.tsx`.
   - **Key Projects**: PROMETHEUS (Hybrid Vision Pipeline), LLM Council (Multi-Agent Consensus), Solar Flare Prediction (Vision Transformer), FieldSight Lite (Edge Defect Detection), FirSeFile (Decentralized Storage).
7. **`AchievementsSection.tsx` (`#achievements`)**:
   - 2-column card grid for major engineering and hackathon competitions.
   - Soft amber accents on badges and ranks (e.g. Smart India Hackathon Winner, LOC 8.0 Winner, TechFest IIT Bombay Finalist, ETHIndia Top 10).
   - Opens detailed empirical breakdown and architectural pipeline in `AchievementModal.tsx`.
8. **`SkillsSection.tsx` (`#skills`)**:
   - Categorized skills (Deep Learning, Computer Vision, Systems & Edge, Languages & Frameworks, Developer Tooling).
   - Violet accent hover indicators.
9. **`ContactSection.tsx` (`#contact`)**:
   - Direct email copy-to-clipboard button with visual feedback.
   - Direct social profile cards.
10. **`PortfolioTerminal.tsx`**:
    - Global VS Code style bottom terminal panel (toggleable via `Ctrl + \``, `T`, or navbar button).
    - Functional interactive commands: `help`, `ls`, `whoami`, `about`, `projects`, `achievements`, `theme light/dark`, `clear`, etc.
11. **`CustomCursor.tsx`**:
    - Dual cursor (inner sharp dot + smooth trailing ring).
    - Fully GPU hardware-accelerated (`translate3d`), with auto-sleeping RAF loop to eliminate CPU overhead and UI freezing.
12. **`CardPointerLighting.tsx`**:
    - Global spotlight cursor-following gradient on interactive cards.

---

## 3. Important Recent Bug Fixes & Optimizations

### A. Freezing & Site Unresponsiveness (Fixed)
* **Root Cause 1**: `CustomCursor.tsx` had an active `requestAnimationFrame` loop that called React `setState` continuously on every frame (60–144 FPS) while also updating state on every single `mousemove` and `mouseover` event, causing React reconciliation saturation and browser thread exhaustion.
  * **Fix**: Rewrote `CustomCursor.tsx` using DOM refs and GPU transforms (`translate3d`). The trailing animation frame loop automatically goes to sleep when movement settles (<0.1px). Zero React re-renders.
* **Root Cause 2**: An experimental floating-window wrapper component had an asynchronous timeout race condition that prevented unmounting on close. This left a full-viewport transparent backdrop overlay (`position: fixed; inset: 0`) trap on top of the DOM while leaving `document.body.style.overflow = 'hidden'`, completely locking all scrolling and mouse clicks on the page.
  * **Fix**: Reverted to the clean, tested modal system (`ProjectModal.tsx` and `AchievementModal.tsx`) and set `document.body.style.overflow = ''` in effect cleanups. Unused experimental files were deleted.

### B. Zero-Jitter Modal Animation & Layout Stability (Fixed)
* **Root Cause 1 (Layout Shift / Shaking)**: Locking `document.body.style.overflow = 'hidden'` on modal open caused the browser vertical scrollbar to disappear, shifting page content horizontally by ~15px. Furthermore, card hover transforms with `scale(1.008)` caused micro-shaking on hover/click.
* **Root Cause 2 (Laggy 3D Rotation)**: 3D rotation transforms (`rotateZ`) on backdrop-filtered scrollable modals forced heavy raster re-paints.
* **Fix**:
  1. Added `scrollbar-gutter: stable` to `html` in [`src/app/globals.css`](file:///home/illoir/Desktop/port/src/app/globals.css) to eliminate scrollbar layout shift when modals open/close.
  2. Integrated `next/font/google` with full system-ui font fallbacks in [`src/app/layout.tsx`](file:///home/illoir/Desktop/port/src/app/layout.tsx) and global typography inheritance in `globals.css`.
  3. Replaced card hover scale with crisp `translateY(-3px)` without subpixel scaling jitter.
  4. Implemented instant, hardware-accelerated **`modalPopIn`** animation (`0.22s cubic-bezier(0.16, 1, 0.3, 1)`):
  ```css
  .modal-content {
    animation: modalPopIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
    transform-origin: center center;
    will-change: transform, opacity;
  }

  @keyframes modalPopIn {
    0% {
      opacity: 0;
      transform: scale(0.97) translateY(8px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  ```
  - Duration: **0.22s** (`0.20s` mobile).
### C. Direct Resume PDF Download (Fixed)
* **Root Cause**: The resume links had `target="_blank"` without a `download` attribute, which caused the browser to navigate and preview the PDF in a tab on `localhost` rather than saving the file to the user's computer.
* **Fix**: Added `download="Kushal_Patel_Resume.pdf"` to all resume buttons across [`Hero.tsx`](file:///home/illoir/Desktop/port/src/components/Hero.tsx), [`Navbar.tsx`](file:///home/illoir/Desktop/port/src/components/Navbar.tsx), [`ContactSection.tsx`](file:///home/illoir/Desktop/port/src/components/ContactSection.tsx), and programmatic link trigger in [`PortfolioTerminal.tsx`](file:///home/illoir/Desktop/port/src/components/PortfolioTerminal.tsx).

---

## 4. Current Git Status & Modified Files

```bash
 M src/app/globals.css
 M src/app/layout.tsx
 M src/components/AchievementModal.tsx
 M src/components/AtmosphericPFP.tsx
 M src/components/CardPointerLighting.tsx
 M src/components/ContactSection.tsx
 M src/components/CustomCursor.tsx
 M src/components/Hero.tsx
 M src/components/Navbar.tsx
 M src/components/PortfolioTerminal.tsx
 M src/components/ProjectModal.tsx
```

All modifications have been verified with `npm run build` (0 TypeScript / CSS errors).

---

## 5. Development Server & Verification Commands

To run and verify the project locally:

```bash
# 1. Ensure local node binary is on PATH
export PATH="$(pwd)/.node/bin:$PATH"

# 2. Build verification (checks TypeScript, lint, and CSS)
npm run build

# 3. Start development server
npm run dev

# 4. Dev server URL:
# http://localhost:3000
```
