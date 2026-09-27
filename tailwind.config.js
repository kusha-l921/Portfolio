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
        background: "#05070B",
        "bg-secondary": "#080C12",
        panel: "#0B1118",
        "panel-elevated": "#101722",
        "primary-text": "#F4F8FF",
        "secondary-text": "#91A4B8",
        "muted-text": "#536579",
        border: "rgba(90, 160, 230, 0.18)",
        "electric-blue": "#1687FF",
        "bright-blue": "#38A3FF",
        "soft-blue": "#75C2FF",
        "blue-glow": "rgba(22, 135, 255, 0.35)",
        success: "#32D583",
        warning: "#FFB84D",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        "electric-glow": "0 0 25px rgba(22, 135, 255, 0.35)",
        "electric-glow-lg": "0 0 45px rgba(22, 135, 255, 0.45)",
        "panel-border": "inset 0 0 0 1px rgba(90, 160, 230, 0.18)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "sweep": "sweep 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        }
      },
    },
  },
  plugins: [],
};
