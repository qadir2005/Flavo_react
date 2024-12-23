/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'green',
        darkGreen:"",
        secondary: "#D42D2A",  // normal red
        darkSecondary: "#AA2422",  // dark red

        
      },
      fontFamily: {
        oswald: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

