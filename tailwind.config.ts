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
        gold:      "#C9A96E",  // Warm muted gold – primary accent
        "gold-light": "#DFC08C",
        "gold-dark": "#A8864E",
        dark:      "#0A0A0A",  // Near-black
        charcoal:  "#111111",  // Deep charcoal
        cream:     "#FAFAF8",  // Off-white
        sand:      "#F5F0E8",  // Warm sand

        // Backward-compatible brand tokens
        primary:   "#C9A96E",
        secondary: "#666666",
        accent:    "#C9A96E",
      },
      fontFamily: {
        sans:    ["var(--font-body)",    "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-serif",      "Georgia",   "serif"],
        serif:   ["var(--font-heading)", "ui-serif",      "Georgia",   "serif"],
      },
      letterSpacing: {
        "nav":  "0.15em",
        "tag":  "0.25em",
        "hero": "0.08em",
      },
      maxWidth: {
        "content": "1200px",
        "page":    "1440px",
      },
      animation: {
        "fade-up":    "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in":    "fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "line-grow":  "lineGrow 0.6s ease-out both",
        "ken-burns":  "kenBurns 12s ease-in-out both",
        "marquee":    "marquee 30s linear infinite",
        "gold-shimmer": "goldShimmer 4s linear infinite",
        "float-pulse":  "floatPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        kenBurns: {
          "0%":   { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "from": { transform: "translateX(0)" },
          "to":   { transform: "translateX(-50%)" },
        },
        goldShimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatPulse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },
      transitionDuration: {
        "350":  "350ms",
        "400":  "400ms",
        "600":  "600ms",
        "800":  "800ms",
        "1200": "1200ms",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
