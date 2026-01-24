/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0ea5e9",
          hover: "#0284c7",
        },
        secondary: "#0f172a",
      },
    },
  },
  plugins: [],
};
