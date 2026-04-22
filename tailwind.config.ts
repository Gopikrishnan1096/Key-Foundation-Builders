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
        // SOBHA-style luxury palette
        gold: "#C9A96E",       // Warm muted gold – primary accent
        dark: "#0A0A0A",       // Near-black – header, stats bar backgrounds
        charcoal: "#111111",   // Deep charcoal – testimonials background
        cream: "#FAFAF8",      // Off-white – subtle section bg
        sand: "#F5F0E8",       // Warm sand – light accent bg

        // Backward-compatible brand tokens (updated to SOBHA palette)
        primary: "#C9A96E",    // Gold replaces old orange
        secondary: "#666666",  // Medium grey
        accent: "#C9A96E",     // Same gold
      },
      fontFamily: {
        // Inter (body) + Cormorant Garamond (headings) — SOBHA editorial style
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        serif: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        "nav": "0.15em",
        "tag": "0.25em",
        "hero": "0.08em",
      },
      maxWidth: {
        "content": "1200px",
        "page": "1440px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "line-grow": "lineGrow 0.6s ease-out both",
        "ken-burns": "kenBurns 10s ease-in-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [],
};

export default config;
