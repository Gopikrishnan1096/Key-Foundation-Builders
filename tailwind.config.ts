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
        // Palette from provided Pantone reference image
        navy: "#152257", // Pantone 281 XGC (approx)
        sky: "#7CA5DB", // Pantone 659 C (approx)
        purple: "#681F78", // Pantone 2613 C (approx)
        magenta: "#C80180", // Pantone 233 C (approx)
        orangeade: "#E2572E", // Pantone 17-1461 TCX Orangeade (approx)

        // Backward-compatible tokens used across the app
        primary: "#E2572E",
        secondary: "#7CA5DB",
        accent: "#C80180",
        dark: "#152257",
      },
      fontFamily: {
        // Headings and body are both sans-serif (industrial, modern)
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
