import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jetbrains_mono: ["var(--font-jetbrains-mono)"],
        old: ["var(--font-old-standard)"],
        bebas_neue: ["var(--font-bebas-neue)"],
        feixen: ["var(--font-feixen)"],
      },
    },
  },
  plugins: [],
};
export default config;
