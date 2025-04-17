// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // якщо ти його використовуєш
    "./src/**/*.{js,ts,jsx,tsx}", // всі твої компоненти
    "./node_modules/@heroui/theme/dist/components/**/*.js", // всі HeroUI компоненти
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
