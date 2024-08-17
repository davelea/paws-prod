

import plugin from 'tailwindcss/plugin';
import flowbitePlugin from 'flowbite/plugin'
import tailwindTypography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'],
  darkMode: 'false',
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
  },
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  },

  plugins: [flowbitePlugin, tailwindTypography]
};
