module.exports = {
  purge: [
    "./public/**/*.html",
    "./public/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ['Poppins'],
        'roboto' : ['Roboto']
      },
      colors : {
        'light-green' : '#30D7BA',
        'light-blue' : '#03D6F3',
        'dark-blue' : '#112D57',
        'grey' : '#5c5c5c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
