/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#184690",
        secondary: "#0E2A56",
        // light: "#d9dcd6",
        // dark: "#16425b",
      },
      height: {
        140: "35rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
