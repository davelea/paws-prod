import plugin from 'tailwindcss/plugin';
import flowbitePlugin from 'flowbite/plugin';
import tailwindTypography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'false',
  fontFamily: {
    sans: ['Open Sans', 'sans-serif']
  },
  fontSize: {
    xs: ['.75rem', '1rem'],
    sm: ['.875rem', '1.25rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['2rem', '1.2'],
    '4xl': ['2.5rem', '1.2'],
    '5xl': ['3rem', '1'],
    '6xl': ['4rem', '1']
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        slate: colors.slate,
        gray: colors.gray,
        neutral: colors.neutral,
        orange: colors.orange,
        lime: colors.lime,
        green: colors.green,
        sky: colors.sky,
        blue: colors.blue,
        black: colors.black,
        white: colors.white,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        yellow: {
          50: '#fcfde9',
          100: '#f7fbc6',
          200: '#f5f98f',
          300: '#f4f450',
          400: '#efe720',
          500: '#e4d213', // default paws yellow
          600: '#c1a30d',
          700: '#9a770e',
          800: '#7f5e14',
          900: '#6d4d16',
          950: '#3f2809'
        },
        red: {
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5757',
          500: '#ff2323',
          600: '#ff0000', // default paws red
          700: '#ff0000',
          800: '#b10303',
          900: '#920a0a',
          950: '#500000'
        },
        // flowbite
        primary: {
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5757',
          500: '#ff2323',
          600: '#ff0000', // default paws red
          700: '#ff0000',
          800: '#b10303',
          900: '#920a0a',
          950: '#500000'
        }
      }
    }
  },

  plugins: [flowbitePlugin, tailwindTypography]
};
