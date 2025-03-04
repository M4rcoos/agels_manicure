/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#F1F5F9',
        'purple-dark': '#4B2995',
        'purple': '#8047f8',
        'purple-light': '#ebe5f9',
        'yellow-dark': '#C47F17',
        'yellow': '#DBAC2C',
        'black': '#000',
        'yellow-light': '#F1E9C9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        'background': '#FAFAFA',
        'white': '#FFFFFF',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
