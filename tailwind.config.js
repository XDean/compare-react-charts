const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        ...defaultTheme.spacing,
      },
      maxWidth: {
        ...defaultTheme.spacing,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
