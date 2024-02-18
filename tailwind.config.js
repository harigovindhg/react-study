/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      content: {
        veg: 'url("https://img.icons8.com/color/48/vegetarian-food-symbol.png")',
        nonVeg: 'url("https://img.icons8.com/color/48/non-vegetarian-food-symbol.png")',
      },
      colors: {
        'offWhite': '#f0f0f0',
        'offWhiteDarker': '#d3d3d3',
        'darkmodeheader': '#8f8f8f',
        'darkmodebody': '#464646',
        'hoverLink': '#cccccc',
        'widen': '#d7d7d7aa',
        'darkerGray': '#6C6C6C',
        'ratingGreen': '#007504',
        'ratingYellow': '#c3b600',
        'ratingOrange': '#ff882d',
        'vegBorder': '#0b6a00'
      },
      fontFamily: {
        uzicute: ['Uzicute', 'sans-serif']
      },
      transitionDuration: {
        splitsec: '0.5s'
      },
      boxShadow: {
        offline: '0 0 20px #ff0101e0',
        offlineHover: '0 0 40px #ff0101e0'
      },
      backgroundImage: {
        vegBg: 'linear-gradient(90deg, rgba(2, 0, 36, 0) 40%, rgba(18, 171, 0, 1) 100%)',
        glimmer: 'linear-gradient(35deg, #0000001a 50%, #00000012 50%, #ffffff26 54% 100%)',
        cardshadow: 'linear-gradient(to bottom, transparent 0%, black 50%)'
      },
      keyframes: {
        shine: { to: { 'background-position': 'right -40px top 0' } }
      }
    },
  },
  plugins: [],
}