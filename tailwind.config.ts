import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0a0908",
          soft: "#14110d",
          raised: "#1c1712",
        },
        gold: {
          deep: "#8a6b2f",
          DEFAULT: "#c9a355",
          bright: "#e8c873",
          pale: "#f2ddac",
        },
        ivory: "#f0e6d2",
        wine: "#3d0f14",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.22em",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
