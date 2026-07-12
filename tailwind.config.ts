import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core "Moonlight" palette — sampled directly from the brand mark.
        // Deep indigo -> violet gradient, warm moon-yellow accent, white.
        midnight: {
          DEFAULT: "#1B0F7A",
          50: "#F1F0FD",
          100: "#DEDBFA",
          200: "#B7B0F3",
          300: "#8E82E9",
          400: "#6455D6",
          500: "#4632C4",
          600: "#33209E",
          700: "#28197E",
          800: "#1E1362",
          900: "#150C48",
          950: "#0D0730",
        },
        indigo: {
          start: "#2D10B8",
          end: "#4F3ABD",
        },
        moonlight: {
          DEFAULT: "#FFFFFF",
          muted: "rgba(255,255,255,0.7)",
        },
        moon: {
          DEFAULT: "#F1EA82",
          light: "#F9F5B8",
          dark: "#DFCE4E",
        },
        paper: "#FFFFFF",
        brass: {
          DEFAULT: "#F1EA82",
          light: "#F9F5B8",
          dark: "#DFCE4E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
      },
      backgroundImage: {
        "moonlight-gradient":
          "linear-gradient(135deg, #2D10B8 0%, #4534C1 55%, #4F3ABD 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.10), transparent 60%)",
        "grain-glow":
          "radial-gradient(circle at 70% 20%, rgba(241,234,130,0.18), transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
