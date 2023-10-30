/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        light: "F9F9F9",
      },
      fontFamily: {
        inter: "'Inter, sans-serif'",
      },
    },
  },
  plugins: [],
};
