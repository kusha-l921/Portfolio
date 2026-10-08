# Kushal Patel — AI/ML Engineer Portfolio

> A high-performance, developer-centric personal portfolio showcasing production experiments in machine learning, vision transformers, edge computer vision, and systems engineering.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.9.0-f08?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-green?style=flat-square&logo=node.js)](https://nodejs.org/)

---

## Quick Links

- 🌐 **Live Website**: `Coming soon` *(Ready for one-click Vercel deployment)*
- 💻 **GitHub Profile**: [github.com/kusha-l921](https://github.com/kusha-l921)
- 🔗 **LinkedIn**: [linkedin.com/in/kushalpatel15](https://linkedin.com/in/kushalpatel15)
- 📄 **Resume**: [Kushal Patel Resume (PDF)](public/docs/Kushal_Patel_Resume.pdf)

---

## Preview

<!-- Add a preview screenshot at: public/images/portfolio-preview.png -->
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ > projects/                                                                 │
│ Selected Work — Production experiments, neural architectures & edge systems │
│ [ All ] [ AI / ML ] [ Computer Vision ] [ Systems ]                         │
│                                                                             │
│ ┌──────────────────────────────────────┐  ┌───────────────────────────────┐ │
│ │ 01 · AI / ML · 2026                  │  │ ● ● ● run_prometheus.sh  OK   │ │
│ │ Prometheus                           │  │ kushal@portfolio ❯ ./eval     │ │
│ │ Browser-based prompt intelligence    │  │ [arch] Chrome Extension APIs  │ │
│ │                                      │  │ [pipe] Deduplication Engine   │ │
│ │ SYSTEM FLOW                          │  │ ───────────────────────────── │ │
│ │ 01 INPUT → 02 DETECT → 03 EXTRACT    │  │ EXECUTION TRACE               │ │
│ │ → 04 SCORE → 05 RECONSTRUCT          │  │ [01] parse prompt ....... OK  │ │
│ │                                      │  │ [02] extract rules ...... OK  │ │
│ │ TECHNICAL SNAPSHOT                   │  │ [03] score priority ..... OK  │ │
│ │ [Browser-Side] [Local] [Vite + TS]   │  │                               │ │
│ │                                      │  │ kushal@portfolio:~$ ▮        │ │
│ │ View Details →      GitHub ↗         │  │                               │ │
│ └──────────────────────────────────────┘  └───────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## About the Project

This portfolio is an interactive engineering showcase built from scratch with Next.js 14 (App Router) and TypeScript. Rather than serving as a static landing page, it is designed like an engineer's case-study environment, combining:

- **AI/ML & Systems Projects**: Deep-dive technical breakdowns including Spatiotemporal Vision Transformers, unsupervised edge vision pipelines, multi-agent reasoning DAGs, and binary forensic carving.
- **System Architecture Visualizations**: Custom, project-specific 5-stage System Flows and 6-attribute Technical Snapshot matrices.
- **Interactive Developer Workspace**: A movable, resizable, and dockable Linux-style floating terminal with real shell command execution and site reflow.
- **Horizontal Scroll Choreography**: Smooth scroll-driven horizontal presentation for featured work, providing dedicated full-screen focus for each project.
- **National Hackathon Achievements & Industry Experience**: Structured milestones, team scale, and verification proofs.

---

## Design Philosophy

- **Dark / Graphite Palette**: Rich dark background (`#050505`) with tailored surface layers (`#0E1015`, `#111318`) and subtle borders (`rgba(255, 255, 255, 0.08)`).
- **Grayscale First with Electric Blue Accents**: High-contrast, clean monochrome foundation accented by vibrant electric blue (`#5B8CFF`) for active states, terminal cursors, and pipeline signals.
- **Monospace Typography**: Technical elements, diagnostic metadata, system flows, and shell consoles are typeset in `JetBrains Mono` alongside clean `Inter` system typography.
- **Zero Decorative Bloat**: Every visual block communicates genuine architectural information—no generic 3D models, fake progress bars, or placeholder stock imagery.
- **Ambient Lighting**: GPU-accelerated ambient blue drift and cursor-following card lighting (`CardPointerLighting.tsx`).

---

## Key Features

1. **Horizontal Scroll-Driven Project Stage**:
   - Natural vertical page scrolling drives a sticky full-width horizontal track via Framer Motion.
   - Each project commands the full viewport with zero card clipping or overlapping artifacts.
   - Responsive fallback: seamlessly transitions to a natural, content-safe vertical feed on mobile viewports (`<= 860px`).
2. **System Flow & Technical Snapshot Matrices**:
   - `ProjectSystemFlow`: A 5-stage horizontal pipeline (`01 INPUT → 02 DETECT → 03 EXTRACT → ...`) with active node brightening on hover.
   - `ProjectTechnicalSnapshot`: A compact 6-attribute capability matrix (`ARCHITECTURE`, `PROCESSING`, `RUNTIME`, `INTERFACE`, `DOMAIN`, `EXECUTION`).
3. **Linux-Inspired Terminal Previews**:
   - Embedded inside each project card with realistic window chrome, shell prompt lines, diagnostic tags (`[arch]`, `[pipe]`, `[eval]`, `[stack]`), and live-style execution traces with real benchmark latencies.
4. **Floating Workspace Terminal (`PortfolioTerminal.tsx`)**:
   - Accessible globally via floating toggle, navbar, or keyboard command.
   - Draggable header, multi-directional resize handles, and edge-docking modes that intelligently reflow the main application (`AppWorkspaceShell.tsx`).
   - Built-in commands: `help`, `projects`, `skills`, `education`, `experience`, `achievements`, `theme`, `contact`, `clear`, `exit`.
5. **Floating Detail Modals (`Animista-Inspired`)**:
   - Deep-dive modals for Projects, Achievements, and Experience with smooth scale/rotate opening animations, keyboard Escape dismiss, and body scroll lock.
6. **National Achievements Showcase**:
   - Features verified hackathon awards (Lines of Code 8.0 Winner, etc.) with technical breakdowns, architecture lists, and confetti celebrations (`canvas-confetti`).
7. **Light & Dark Theme Engine**:
   - Full theme support powered by `ThemeContext` with smooth color transitions across all cards, modals, and terminals.

---

## Featured Projects

| # | Project | Domain | Architecture Highlights | Repository |
|---|---|---|---|---|
| **01** | **Prometheus** | NLP / Prompt Intelligence | Chrome Extension APIs, Vite + TypeScript, Shadow DOM, Local Zero-Latency Pipeline | [github.com/kusha-l921/prometheus](https://github.com/kusha-l921/prometheus) |
| **02** | **LLM Council** | Multi-Agent Reasoning | Stateful LangGraph DAG, Groq LPU Accelerator, 5-Agent Iterative Loop, Pydantic | [github.com/kusha-l921/lllm-council](https://github.com/kusha-l921/lllm-council) |
| **03** | **Solar Flare Prediction** | Computer Vision / Heliophysics | Spatiotemporal ViT, 87,600 NASA SDO Frames, Cross-Frame Attention, XAI Saliency | `Private Research 🔒` |
| **04** | **FieldSight Lite** | Edge Computer Vision | Training-Free CIELAB Norm, MAD Outlier Detection, 35.8ms / 27.9 FPS on low-power CPU | [github.com/kusha-l921/FieldSight](https://github.com/kusha-l921/FieldSight) |
| **05** | **FirSeFile** | Systems & Digital Forensics | Swin Transformer V2, Rust Zero-Copy Reader, ONNX Runtime (<8ms), Graph DAG | [github.com/kusha-l921/SIH-FirSeFile](https://github.com/kusha-l921/SIH-FirSeFile) |

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js (App Router) | `14.2.15` | Hybrid static rendering & routing |
| **Library** | React / React DOM | `18.3.1` | Component UI state & reconciliation |
| **Language** | TypeScript | `^5.6.2` | End-to-end static type safety |
| **Motion** | Framer Motion | `^11.9.0` | Scroll-linked transforms & springs |
| **Styling** | Vanilla CSS Tokens & Tailwind CSS | `^3.4.13` | Custom design system & atomic utilities |
| **Icons** | Lucide React | `^0.446.0` | Crisp UI iconography |
| **Visual Effects** | Canvas Confetti | `^1.9.3` | Hackathon achievement celebrations |
| **3D / Canvas** | Three.js & R3F | `^0.169.0` | Spatial / ambient backdrop effects |
| **Runtime** | Node.js | `v20.x LTS` | JavaScript runtime environment |
| **Package Manager** | npm | `10.x` | Dependency resolution & scripts |

---

## Project Structure

```text
port/
├── .nvmrc                         # Pinned Node.js version (v20 LTS)
├── .env.example                   # Environment configuration documentation
├── next.config.js                 # Next.js production & unoptimized image config
├── package.json                   # Project scripts and dependencies
├── tsconfig.json                  # Strict TypeScript compiler options
├── public/
│   ├── docs/                      # Downloadable PDFs (Resume)
│   ├── images/                    # Project artwork, profile images & avatars
│   └── robots.txt                 # Search crawler instructions
└── src/
    ├── app/
    │   ├── globals.css            # Design tokens, variables & typography
    │   ├── layout.tsx             # Root layout, metadata & global providers
    │   └── page.tsx               # Main portfolio page assembly
    ├── components/
    │   ├── AboutSection.tsx       # Bio, engineering focus & interests
    │   ├── AchievementModal.tsx   # Detailed case-study modal for achievements
    │   ├── AchievementsSection.tsx# Hackathon awards & technical summaries
    │   ├── AmbientBackground.tsx  # Moving ambient light background
    │   ├── AppWorkspaceShell.tsx  # Dynamic layout reflow wrapper for docked terminal
    │   ├── AtmosphericPFP.tsx     # Ambient profile artwork component
    │   ├── CardPointerLighting.tsx# Cursor-tracking radial illumination
    │   ├── ContactSection.tsx     # Social links & contact card
    │   ├── CustomCursor.tsx       # Minimalist trailing desktop cursor
    │   ├── EducationSection.tsx   # Degree, coursework & research focus
    │   ├── ExperienceModal.tsx    # Detailed internship modal
    │   ├── ExperienceSection.tsx  # Professional experience timeline
    │   ├── Footer.tsx             # Minimal portfolio footer
    │   ├── Hero.tsx               # Terminal hero, headlines & CTA buttons
    │   ├── Navbar.tsx             # Floating pill navigation with section spy
    │   ├── PFPLightbox.tsx        # High-res profile artwork lightbox
    │   ├── PortfolioTerminal.tsx  # Full interactive floating/dockable terminal
    │   ├── ProjectModal.tsx       # Detailed case-study modal for projects
    │   ├── ProjectStackItem.tsx   # Reusable project slide & card container
    │   ├── ProjectSystemFlow.tsx  # 5-stage technical pipeline component
    │   ├── ProjectTechnicalSnapshot.tsx # 6-spec capability matrix
    │   ├── ProjectTerminalBox.tsx # Embedded Linux terminal box with execution trace
    │   ├── ProjectsSection.tsx    # Horizontal scroll stage & category filters
    │   ├── SkillsSection.tsx      # Categorized engineering competencies
    │   └── TerminalPromptBlock.tsx# Linux/Hyprland shell prompt header block
    ├── context/
    │   ├── TerminalContext.tsx    # Terminal open/close/dock state management
    │   └── ThemeContext.tsx       # Dark/light theme provider & persistence
    ├── data/
    │   └── portfolioData.ts       # Single source of truth for all portfolio data
    └── types/
        └── index.ts               # Core TypeScript data contracts & schemas
```

---

## Getting Started

### Prerequisites

- **Node.js**: `20.x` LTS recommended (check with `node -v`)
- **npm**: `10.x` or compatible package manager (`npm -v`)

### 1. Clone the Repository

```bash
git clone https://github.com/kusha-l921/portfolio.git
cd portfolio
```

*(Replace with your actual repository URL if cloning your own fork).*

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server on `http://localhost:3000` with hot-module reloading. |
| `npm run build` | Compiles an optimized, type-checked production build (`.next`). |
| `npm run start` | Starts the Next.js production server using the compiled build. |
| `npm run lint` | Runs Next.js ESLint diagnostics to verify code quality. |

---

## Environment Variables

This portfolio is built as a **zero-dependency, self-contained static application**. It does **not require external API keys, database URLs, or third-party secret credentials** for development or production deployment.

An optional template is provided in `.env.example`:

```env
# Optional canonical site URL for Open Graph & metadata
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## Security Best Practices

- **Never Commit Secrets**: Do not store private keys, tokens, or personal credentials in code files.
- **`.gitignore` Configured**: Pre-configured to ignore `.env`, `.env.local`, `.env*.local`, `.next/`, `node_modules/`, and build artifacts.
- **Safe Public Assets**: All files in `public/` (including resumes and images) are vetted for public display.

---

## Production Deployment

### Recommended Target: Vercel

Because this application is built with **Next.js 14 App Router**, **Vercel** is the native and zero-configuration deployment target.

#### Deploy via Vercel Web Dashboard

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete engineering portfolio"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and sign in.
3. Click **"Add New..."** → **"Project"**.
4. Import your portfolio repository from GitHub.
5. Vercel automatically detects:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Click **Deploy**. Your site will be live on an SSL-enabled `.vercel.app` domain in ~60 seconds.

#### Deploy via Vercel CLI (Alternative)

```bash
npx vercel
```

Follow the interactive prompts to link and deploy. For production releases:

```bash
npx vercel --prod
```

---

## Public Deployment Checklist

- [x] Production build tested and verified locally (`npm run build` exits with code 0).
- [x] No secrets or API credentials committed to version control.
- [x] `.gitignore` verified to exclude `.env`, `.next/`, and local caches.
- [x] Node version pinned to LTS in `.nvmrc`.
- [x] Responsive layout verified across Desktop, Tablet, and Mobile devices.
- [x] Horizontal scroll choreography verified with no horizontal browser scrollbars.
- [x] Floating detail modals verified with keyboard `Escape` dismiss and scroll locking.
- [x] Embedded terminal execution traces and diagnostic badges checked for accuracy.
- [x] Downloadable resume verified at `public/docs/Kushal_Patel_Resume.pdf`.
- [x] All external links (GitHub, LinkedIn, Email) tested and confirmed active.

---

## Customization Guide

All portfolio content is decoupled from layout components and centralized in `src/data/portfolioData.ts`.

### Editing Personal Data & Bio
Open `src/data/portfolioData.ts` and update:
- `PERSONAL_DATA`: Name, headline, contact emails, social links, resume URL.
- `ABOUT_DATA`: Bio paragraphs, focus areas, current learning topics.
- `EDUCATION_DATA`: University, honours, CGPA, coursework.

### Adding a New Project
In `src/data/portfolioData.ts`, append a new object adhering to the `Project` interface defined in `src/types/index.ts`:

```typescript
{
  id: 'my-project',
  number: '06',
  title: 'My Project Name',
  tagline: 'Concise one-line technical summary of what this project accomplishes.',
  tags: ['Python', 'PyTorch', 'Docker'],
  category: 'AI / ML', // 'AI / ML' | 'Computer Vision' | 'Systems'
  period: '2026',
  githubUrl: 'https://github.com/kusha-l921/my-project', // or omit + set isPrivate: true
  overview: 'Detailed description for modal view...',
  problem: 'Problem statement...',
  approach: 'Technical approach and algorithms used...',
  architecture: [
    'Subsystem 1 Name',
    'Subsystem 2 Name',
    'Subsystem 3 Name',
  ],
  results: [
    { metric: 'Latency', value: '12ms', detail: 'Measured on CPU hardware' },
    { metric: 'Accuracy', value: '94.2%', detail: 'Benchmark validation' },
  ],
  highlights: [
    'Key engineering accomplishment 1...',
    'Key engineering accomplishment 2...',
  ],
  systemFlow: [
    { step: '01', label: 'INGEST', detail: 'Data Ingestion' },
    { step: '02', label: 'PREPROCESS', detail: 'Tensor Transformation' },
    { step: '03', label: 'INFERENCE', detail: 'Model Forward Pass' },
    { step: '04', label: 'EVALUATE', detail: 'Confidence Filtering' },
    { step: '05', label: 'OUTPUT', detail: 'Structured Result' },
  ],
  technicalSnapshot: [
    { label: 'ARCHITECTURE', value: 'Custom Neural Network' },
    { label: 'HARDWARE', value: 'Edge Hardware' },
    { label: 'RUNTIME', value: 'ONNX Runtime' },
    { label: 'INTERFACE', value: 'REST API' },
    { label: 'LATENCY', value: '12ms Benchmark' },
    { label: 'DOMAIN', value: 'Deep Learning' },
  ],
  executionTrace: [
    { phase: '[01]', action: 'stream input packet', status: 'OK', duration: '1.1ms' },
    { phase: '[02]', action: 'normalize tensor matrix', status: 'OK', duration: '2.4ms' },
    { phase: '[03]', action: 'execute inference backbone', status: 'OK', duration: '5.2ms' },
    { phase: '[04]', action: 'filter outlier logits', status: 'OK', duration: '1.0ms' },
    { phase: '[05]', action: 'serialize final payload', status: 'OK', duration: '1.8ms' },
  ],
}
```

---

## Contributing

This repository is maintained as a personal portfolio project. Suggestions, feedback, and issue reports are welcome.

---

## License

No license has been specified yet. All rights reserved.

---

## Author

**Kushal Patel**  
*AI/ML Engineer · Systems Builder*  
- 💻 **GitHub**: [@kusha-l921](https://github.com/kusha-l921)  
- 🔗 **LinkedIn**: [kushalpatel15](https://linkedin.com/in/kushalpatel15)  
- ✉️ **Email**: [kushalpatel1596@gmail.com](mailto:kushalpatel1596@gmail.com)
