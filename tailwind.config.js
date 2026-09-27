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
        background: "#05070A",
        "bg-dark": "#05070A",
        "bg-card": "#0B1016",
        "bg-card-hover": "#0F161F",
        "bg-panel": "#0D131D",
        "cyan-accent": "#16D9FF",
        "cyan-secondary": "#00A8CC",
        "cyan-bright": "#16D9FF",
        "border-cyan": "rgba(22, 217, 255, 0.16)",
        "border-subtle": "rgba(255, 255, 255, 0.07)",
        "text-primary": "#F2F5F7",
        "text-secondary": "#8A99A8",
        "text-muted": "#52606D",
      },
      fontFamily: {
        sans: ["var(--font-main)", "'Inter'", "'Geist'", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
        handwritten: ["var(--font-handwriting)", "'Architects Daughter'", "cursive", "sans-serif"],
      },
      boxShadow: {
        "cyan-subtle": "0 0 16px rgba(22, 217, 255, 0.08)",
        card: "0 4px 24px -2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
