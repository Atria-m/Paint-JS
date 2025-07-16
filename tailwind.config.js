/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
