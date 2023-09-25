/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    stroke: {
      current: 'currentColor',
    },
    stroke: theme => ({
      'green': theme('colors.green.500')
    }),
    extend: {
      fontFamily:{
        "base":'Poppins, sans-serif',
        "Krona": 'Krona One, sans-serif'
      },
      colors:{
        dark: "#0C080B",
        green: "#1E3329",
        light: "#FAFAFA",
        yellow: "#FFD470",
        "grey-light": "#ededed",
        'dark_grey': "#B8B8B8",
        'light-orange': ""
      }
  
    },
  },
  plugins: [],
}

