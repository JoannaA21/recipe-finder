/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        swirl: "#D8D3CA",
        darkerswirl: "#9E9B95",
        lunargreen: "#314130",
        lighterlunargreen: "#88B588",
        sepiaskin: "#9A6238",
        spicypink: "#7F6A6D",
      },
    },
  },
  plugins: [],
});
