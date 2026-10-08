# Running Kushal Patel's Portfolio on a New Computer

A step-by-step guide to cloning, setting up, and running this portfolio on any new machine (macOS, Linux, or Windows).

---

## 1. Prerequisites

Make sure the following tools are installed on your computer:

- **Node.js**: `v18.18.0` or `v20.x`+ recommended (LTS).
  - Check with: `node -v`
  - If not installed, download from [nodejs.org](https://nodejs.org/) or install via [nvm](https://github.com/nvm-sh/nvm):
    ```bash
    nvm install 20
    nvm use 20
    ```
- **npm** (included with Node.js) or **pnpm** / **yarn**:
  - Check with: `npm -v`
- **Git** (optional, for cloning):
  - Check with: `git --version`

---

## 2. Quick Start (TL;DR)

Open your terminal in the project directory and run:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 3. Step-by-Step Setup Guide

### Step 1: Get the Repository

If cloning from GitHub:
```bash
git clone https://github.com/kusha-l921/port.git
cd port
```

If copying the project directory directly from another machine or USB:
```bash
cd port
```

---

### Step 2: Install Project Dependencies

Run the package installer to set up all required libraries (Next.js 14, React 18, Three.js, Lucide icons, Framer Motion, Tailwind CSS):

```bash
npm install
```

*(Optional: if using clean CI installs)*:
```bash
npm ci
```

---

### Step 3: Run the Development Server

Start Next.js in development mode with hot-reloading:

```bash
npm run dev
```

You should see output similar to:
```text
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1.2s
```

Visit **`http://localhost:3000`** in your browser.

---

### Step 4: Verify Production Build (Optional)

To test the exact production build before deploying:

```bash
# Compile and create static optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 4. Available NPM Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server on `http://localhost:3000` with hot-module reload |
| `npm run build` | Compiles TypeScript, runs linting, and produces optimized production build |
| `npm run start` | Serves the production build locally on `http://localhost:3000` |
| `npm run lint` | Runs Next.js ESLint checks |

---

## 5. OS-Specific Notes

### macOS & Linux
Everything works out of the box with standard bash/zsh:
```bash
npm install && npm run dev
```

### Windows (PowerShell or CMD)
1. Open PowerShell or Command Prompt.
2. Navigate to the folder:
   ```powershell
   cd path\to\port
   ```
3. Run:
   ```powershell
   npm install
   npm run dev
   ```

---

## 6. Troubleshooting & Common Issues

### Issue 1: "command not found: npm" (even after activating `.venv`)
- **Why this happens**: `.venv` is a **Python virtual environment** (for Python and `pip`). It does **not** include JavaScript/Node.js or `npm`.
- **How to fix on this current computer**:
  The project includes local Node binaries in `./.node/bin`. Add them to your current terminal session:
  ```bash
  export PATH="$(pwd)/.node/bin:$PATH"
  ```
  Now `node -v` and `npm -v` will work immediately.
- **How to fix on a new computer**:
  Install Node.js globally using **nvm** or from **nodejs.org**:
  ```bash
  # Using nvm (macOS / Linux):
  nvm install 20
  nvm use 20

  # Or on Ubuntu/Debian:
  sudo apt install nodejs npm

  # Or on macOS Homebrew:
  brew install node
  ```

### Issue 2: Port 3000 is already in use
If another service is using port `3000`:
- **Option A**: Run on another port:
  ```bash
  PORT=3001 npm run dev
  # On Windows PowerShell:
  $env:PORT="3001"; npm run dev
  ```
- **Option B**: Free port 3000:
  ```bash
  npx kill-port 3000
  ```

### Issue 3: Node.js version is too old
If you see errors related to `unsupported engine` or modern JavaScript features:
- Ensure Node is at least `18.18.0` or higher (`node -v`).
- Switch to Node 20 LTS using `nvm use 20`.

### Issue 3: Offline Google Font Warning
During `npm run build`, you may see:
```text
⚠ Failed to download the stylesheet for https://fonts.googleapis.com/... Skipped optimizing this font.
```
- **This is completely harmless.** Next.js simply falls back to the system font stack (`Inter`, `JetBrains Mono`, `system-ui`) and the build still passes with code `0`.

### Issue 4: Resetting cache / Corrupted `node_modules`
If you ever experience strange build cache issues on a new computer:
```bash
# Remove build artifacts and modules
rm -rf .next node_modules package-lock.json

# Fresh install
npm install

# Test dev server
npm run dev
```

---

## 7. Project Architecture Overview

```text
port/
├── public/                 # Static assets (images, avatar, resume PDF)
│   ├── docs/               # Kushal_Patel_Resume.pdf
│   └── images/             # Profile & project artwork
├── src/
│   ├── app/                # Next.js App Router (layout.tsx, page.tsx, globals.css)
│   ├── components/         # React UI Components
│   │   ├── Navbar.tsx             # Sticky navbar with section anchors
│   │   ├── Hero.tsx               # Hero header & whoami prompt
│   │   ├── AboutSection.tsx       # Bio & domain focus
│   │   ├── EducationSection.tsx   # Degree & coursework
│   │   ├── ExperienceSection.tsx  # iPolygon Internship & Role Card
│   │   ├── ExperienceModal.tsx    # Animista-inspired floating detail window
│   │   ├── ProjectsSection.tsx    # Selected engineering work & filters
│   │   ├── ProjectModal.tsx       # Full project detail modal
│   │   ├── AchievementsSection.tsx# Hackathon & engineering awards
│   │   ├── AchievementModal.tsx   # Competition specs modal
│   │   ├── SkillsSection.tsx      # Categorized technical skills
│   │   ├── ContactSection.tsx     # Direct email & social links
│   │   └── PortfolioTerminal.tsx  # Integrated interactive VS Code terminal
│   ├── context/            # Theme & Terminal state contexts
│   ├── data/               # portfolioData.ts (Single source of truth)
│   └── types/              # TypeScript interfaces (Project, Achievement, Experience)
├── package.json            # Project dependencies & scripts
└── next.config.js          # Next.js settings
```
