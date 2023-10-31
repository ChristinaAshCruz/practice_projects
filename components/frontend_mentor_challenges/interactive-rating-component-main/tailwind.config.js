/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(217, 12%, 63%)",
      "medium-gray": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
