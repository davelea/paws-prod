module.exports = {
  purge: {
    enabled: true,
    content: ['./views/**/*.pug'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    fontSize: {
      'xs': ['.75rem', '1rem'],
      'sm': ['.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['2rem', '1.2'],
      '4xl': ['2.5rem', '1.2'],
      '5xl': ['3rem', '1'],
      '6xl': ['4rem', '1']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
