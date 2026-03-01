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
        sans: ["var(--font-rajdhani)", "Rajdhani", "system-ui", "sans-serif"],
        heading: ["var(--font-orbitron)", "Orbitron", "system-ui", "sans-serif"],
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
          "linear-gradient(rgba(0, 212, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.06) 1px, transparent 1px)",
        "grid-pattern-subtle":
          "linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
        "gear-pattern":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg fill='rgba(0,212,255,0.05)' stroke='rgba(0,212,255,0.06)' stroke-width='0.5'%3E%3Ccircle cx='32' cy='32' r='8'/%3E%3Crect x='30' y='2' width='4' height='12' rx='1'/%3E%3Crect x='30' y='50' width='4' height='12' rx='1'/%3E%3Crect x='2' y='30' width='12' height='4' rx='1'/%3E%3Crect x='50' y='30' width='12' height='4' rx='1'/%3E%3Crect x='45' y='45' width='4' height='10' rx='1' transform='rotate(45 47 50)'/%3E%3Crect x='15' y='15' width='4' height='10' rx='1' transform='rotate(-45 17 20)'/%3E%3Crect x='45' y='15' width='4' height='10' rx='1' transform='rotate(45 47 20)'/%3E%3Crect x='15' y='45' width='4' height='10' rx='1' transform='rotate(-45 17 50)'/%3E%3C/g%3E%3C/svg%3E\")",
        "chip-pattern":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg stroke='rgba(0,212,255,0.04)' stroke-width='0.5' fill='none'%3E%3Crect x='8' y='8' width='20' height='20' rx='2'/%3E%3Crect x='36' y='36' width='20' height='20' rx='2'/%3E%3Cline x1='28' y1='18' x2='36' y2='18'/%3E%3Cline x1='28' y1='46' x2='36' y2='46'/%3E%3Cline x1='18' y1='28' x2='18' y2='36'/%3E%3Cline x1='46' y1='28' x2='46' y2='36'/%3E%3C/g%3E%3C/svg%3E\")",
        "robot-silhouettes":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 160'%3E%3Cg fill='rgba(0,212,255,0.04)'%3E%3Crect x='45' y='20' width='30' height='28' rx='4'/%3E%3Crect x='35' y='48' width='50' height='45' rx='4'/%3E%3Crect x='25' y='55' width='12' height='35' rx='2'/%3E%3Crect x='83' y='55' width='12' height='35' rx='2'/%3E%3Crect x='48' y='95' width='10' height='45' rx='2'/%3E%3Crect x='62' y='95' width='10' height='45' rx='2'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-lg": "80px 80px",
        "pattern": "64px 64px",
        "robot": "80px 100px",
      },
    },
  },
  plugins: [],
};

export default config;
