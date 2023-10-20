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
      },
      boxShadow:{
        'input':'0 5px 1px 0 rgb(0,0,0, 0.1)',
        'input-focus':'0 2px 1px 0 rgb(0,0,0, 0.1)',
      },
      width:{
        '88':'22rem',
      }
    },
  },
  plugins: [],
}

