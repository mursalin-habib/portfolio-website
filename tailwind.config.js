/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          DEFAULT: "#5865F2", // Blurple
          dark: "#23272A", // Dark background
          greyple: "#99AAB5", // Grey
        },
      },
    },
  },
  plugins: [],
}