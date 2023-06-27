const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c6cc',
          300: '#9da1ab',
          400: '#787c89',
          500: '#5e616e',
          600: '#4a4d57',
          700: '#3d4048',
          800: '#34353b',
          900: '#2e2f33',
          950: '#202126',
        },
        primary: {
          50: '#effef6',
          100: '#dafeea',
          200: '#b7fbd6',
          300: '#69f5ab',
          400: '#40e88f',
          500: '#16d16f',
          600: '#0cad59',
          700: '#0d8848',
          800: '#106b3d',
          900: '#105734',
          950: '#02311b',
        },
        secondary: '#f5d669',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        text: ['var(--font-plex-sans)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-plex-mono)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
