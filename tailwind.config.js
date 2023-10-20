/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        // secondary: "#000000",
        // light: "#d9dcd6",
        // dark: "#16425b",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
