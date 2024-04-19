const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors:{ 
      ...colors,
      greenNav : '#A2AF9F',
      greenKLJ : '#34AD38',
      redKLJ: '#e92b2b',
    }
  },
  plugins: [],
}


