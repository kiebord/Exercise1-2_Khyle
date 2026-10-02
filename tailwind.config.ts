import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070908", // page background
        panel: "#0c110e", // cards and panels
        line: "#1a2a20", // borders and tracks
        accent: "#39ff6a", // neon green
        fg: "#c8d3cb", // body text
        dim: "#6c7f72", // secondary text
      },
      fontFamily: {
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      boxShadow: {
        glow: "0 0 28px -6px rgba(57,255,106,0.45)",
        "glow-sm": "0 0 14px -2px rgba(57,255,106,0.6)",
      },
      keyframes: {
        // progress bars grow from the left on load
        bar: { from: { transform: "scaleX(0)" } },
      },
      animation: {
        bar: "bar 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
