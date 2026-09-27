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
        background: "#080A0D",
        "bg-secondary": "#0D1117",
        panel: "#11161D",
        "panel-elevated": "#161D26",
        "primary-text": "#F2F5F8",
        "secondary-text": "#9AA6B2",
        "muted-text": "#5E6975",
        border: "rgba(255, 255, 255, 0.10)",
        accent: "#2F9BFF",
        "accent-bright": "#5CB5FF",
        success: "#35C982",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.35)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "blue-glow": "0 0 16px rgba(47, 155, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
