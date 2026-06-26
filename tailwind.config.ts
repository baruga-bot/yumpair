import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7ED",
        tomato: "#FF5A3C",
        basil: "#1F7A4D",
        ink: "#1F2933",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 90, 60, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
