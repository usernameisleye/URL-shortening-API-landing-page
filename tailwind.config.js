/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'body' : ['"Poppins"', 'sans-serif']
    },
    colors: {
      //Primary
      'Cyan': 'hsl(180, 66%, 49%)',
      'Dark-Violet': 'hsl(257, 27%, 26%)',

      //Secondary
      'Red': 'hsl(0, 87%, 67%)',

      //Neutral
      'White': 'hsl(0, 0%, 100%)',
      'Black': 'hsl(0, 0%, 0%)',
      'Gray': 'hsl(0, 0%, 75%)',
      'Grayish-Violet': 'hsl(257, 7%, 63%)',
      'Very-Dark-Blue': 'hsl(255, 11%, 22%)',
      'Very-Dark-Violet': 'hsl(260, 8%, 14%)',
    }
  },
  plugins: [],
}
