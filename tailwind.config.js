/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "1320px",
      },
      colors: {
        "primary-color": "#F53E32",
        "secondary-color": "#3BB77E",
        "cus-blue": "#67BCEE",
        "cus-pink": "#F74B81",
        "cus-orrange": "#F59758",
        "primary-text": "#2B2B2D",
        "secondary-text": "#777777",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "quicksand": ["Quicksand", "sans-serif"],
        "arial": ["Open Sans", "sans-serif"],
        "lato": ["Lato", "sans-serif"],                                      
      }
    },
  },
  plugins: [],
}