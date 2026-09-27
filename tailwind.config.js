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
        background: "#05080E",
        "bg-dark": "#05080E",
        "bg-card": "#0A0F17",
        "bg-panel": "#0D131D",
        "cyan-accent": "#00E5FF",
        "cyan-bright": "#2DE2E6",
        "border-cyan": "rgba(0, 229, 255, 0.22)",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "text-primary": "#FFFFFF",
        "text-secondary": "#90A2B5",
        "text-muted": "#546578",
      },
      fontFamily: {
        sans: ["var(--font-main)", "'Inter'", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
        handwritten: ["var(--font-handwriting)", "'Architects Daughter'", "cursive", "sans-serif"],
      },
      boxShadow: {
        cyan: "0 0 20px rgba(0, 229, 255, 0.25)",
        "cyan-sm": "0 0 10px rgba(0, 229, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
