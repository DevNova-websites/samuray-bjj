import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fdf9ed",
          100: "#f9efcc",
          200: "#f2dc95",
          300: "#eac95a",
          400: "#e3b832",
          500: "#C8A84B",
          600: "#a8851c",
          700: "#856118",
          800: "#6e4e19",
          900: "#5e421b",
        },
        crimson: {
          500: "#B91C1C",
          600: "#991b1b",
          700: "#7f1d1d",
        },
        dark: {
          50:  "#f5f5f5",
          100: "#e5e5e5",
          200: "#a3a3a3",
          300: "#737373",
          400: "#525252",
          500: "#404040",
          600: "#2a2a2a",
          700: "#1a1a1a",
          800: "#111111",
          900: "#0a0a0a",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(ellipse at center, #C8A84B22 0%, transparent 70%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      },
      animation: {
        "fade-in":    "fadeIn 0.6s ease forwards",
        "slide-up":   "slideUp 0.6s ease forwards",
        "slide-left": "slideLeft 0.6s ease forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp:   { from: { opacity: "0", transform: "translateY(30px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideLeft: { from: { opacity: "0", transform: "translateX(-30px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        pulseGold: { "0%, 100%": { boxShadow: "0 0 0 0 #C8A84B44" }, "50%": { boxShadow: "0 0 20px 8px #C8A84B22" } },
      },
    },
  },
  plugins: [],
};

export default config;
