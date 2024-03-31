/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        play: ["Playfair", "serif"],
      },
      colors: {
        primaryBlue: "#1572A1",
      },
    },
  },
  plugins: [],
};
