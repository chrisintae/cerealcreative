/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["News Cycle", "sans-serif"],
      serif: ["Playfair", "serif"],
      cursive: ["Shadows Into Light", "cursive"],
      display: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
