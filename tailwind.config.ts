import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "avene-coral": "#d4614a",
        "avene-coral-light": "#e8735a",
        "ducray-blue": "#1a6bb5",
        "ducray-blue-deep": "#0d3d6e",
        "avene-light": "#c8e3f0",
        gold: "#c9a96e",
        "gold-light": "#e8d5b0",
        charcoal: "#1a1e2e",
        "mol-dark": "#2a1a2e",
        "text-dark": "#1e2235",
        "text-mid": "#3a3f5c",
        "text-light": "#6b7090",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
