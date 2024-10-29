/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hello: {
          "0%, 100%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-15deg)" },
        },
      },
    },
  },
  plugins: [],
};
