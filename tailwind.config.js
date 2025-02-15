/** @type {import('tailwindcss').Config} */
export default {

  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:
      {
        montserrat:["Montserrat","sans-serif"],
      }
    },
  },
  plugins: [],
}