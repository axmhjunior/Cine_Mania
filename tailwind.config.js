/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {},
    colors: {
        gray: '#333',
        black: '#000',
        yellow:'#ffc300',
        blue: '#00bfff',
        royalBlue: '#4169E1',
        grayV2:'#606060',
        green:'#3cb371',

    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'min':'768px','max': '1023px'},
      'lg': {'min': '1024px'},
    },
  },
  plugins: [],
}

