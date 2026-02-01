import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        electric: {
          blue: "#00d4ff",
          "blue-dim": "rgba(0, 212, 255, 0.15)",
          "blue-glow": "rgba(0, 212, 255, 0.5)",
        },
        cyber: {
          lime: "#b8ff3c",
          "lime-dim": "rgba(184, 255, 60, 0.15)",
          "lime-glow": "rgba(184, 255, 60, 0.5)",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)",
        "glow-lime": "0 0 20px rgba(184, 255, 60, 0.4), 0 0 40px rgba(184, 255, 60, 0.2)",
        "glow-blue-strong": "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.3)",
        "glow-lime-strong": "0 0 30px rgba(184, 255, 60, 0.6), 0 0 60px rgba(184, 255, 60, 0.3)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
