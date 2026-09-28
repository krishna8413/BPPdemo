import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep indigo-navy — headings on light bg, dark section blocks, footer
        ink: {
          50: "#f5f5fb",
          100: "#ececf7",
          200: "#d4d3ea",
          300: "#aeacd0",
          400: "#8481ac",
          500: "#615e8c",
          600: "#4a4770",
          700: "#37345a",
          800: "#242143",
          900: "#161331",
          950: "#0d0b1f",
        },
        // Indigo accent — links, stat numbers, small headings
        brand: {
          50: "#eef0ff",
          100: "#e0e3ff",
          200: "#c6cbff",
          300: "#a3a9ff",
          400: "#8087fb",
          500: "#635bf0",
          600: "#4f46e5",
          700: "#4136c4",
          800: "#362da0",
          900: "#2f2a80",
        },
        // Mint / spring green — primary CTA buttons
        mint: {
          50: "#eafff6",
          100: "#c9ffe8",
          200: "#98f7d3",
          300: "#65edbd",
          400: "#3fe0aa",
          500: "#22c99b",
          600: "#15a381",
          700: "#118268",
          800: "#116653",
          900: "#0f5445",
        },
        // Warm gold — sparing decorative accent
        accent: {
          300: "#ffe1a1",
          400: "#ffcf66",
          500: "#f5b942",
          600: "#e0980f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-dots":
          "radial-gradient(circle, rgba(79,70,229,0.12) 1.5px, transparent 1.5px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(22,19,49,0.08)",
        card: "0 8px 30px -8px rgba(22,19,49,0.12)",
        lift: "0 20px 45px -12px rgba(22,19,49,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
