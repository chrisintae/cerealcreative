/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Shadows Into Light", "cursive"],
      sans: ["News Cycle", "sans-serif"],
      serif: ["Playfair", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
