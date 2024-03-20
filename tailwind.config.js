/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F7C91A",
        dark: "#1C1C1C",
      },
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};
