/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "bg-dark": "#050505",
        "bg-card": "#0D0D0D",
        "bg-card-hover": "#141414",
        "bg-surface": "#0B0B0B",
        "bg-elevated": "#101010",
        border: "#1A1A1A",
        "border-card": "#1C1C1C",
        "border-subtle": "#151515",
        "border-divider": "#171717",
        "border-hover": "#2E2E2E",
        "text-primary": "#F1F1F1",
        "text-secondary": "#9A9A9A",
        "text-muted": "#666666",
        "text-faint": "#454545",
        "text-bright": "#FFFFFF",
        accent: "#F1F1F1",
        "accent-muted": "#A0A0A0",
      },
      fontFamily: {
        sans: ["var(--font-main)", "'Inter'", "'Geist'", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
        handwritten: ["var(--font-handwriting)", "'Architects Daughter'", "cursive", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(0, 0, 0, 0.4)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
