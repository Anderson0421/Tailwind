/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    container : {
      padding: '1.4rem'
    },
    extend: {
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia':"CascadiaCode",
      },
      colors:{
        'do-blue-dark': '#080c2d',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-blue-medium':'rgb(0, 86,255)',
        'do-blue-mediumdark':'#1d274c'
      }
    },
  },
  plugins: [],
}

