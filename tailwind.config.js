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
    },
    animation: {
      typewriter: 'typewriter 2s steps(11) forwards',
      caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
    },
    keyframes: {
      typewriter: {
        to: { left: '100%' },
      },
      blink: {
        '0%': { opacity: '0'},
        '0.1%': { opacity: '1' },
        '50%': { opacity: '1' },
        '50.1%': { opacity: '0' },
        '100%': { opacity: '0' },
      },
    },
    zIndex:{
      '1000':'1000',
    }
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default{
//   content : ['./src/**/*.{html,js,svelte,ts}'],
// //module.exports = {
//   theme: {
//     extend: {
      
//     },
//   },
//   plugins: [],
// };


