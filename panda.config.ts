import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  'html, body': {
    font: 'text',
  },
  h1: {
    fontSize: '3.75rem',
    lineHeight: 1,
  },
  h2: {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
  h3: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
})

export default defineConfig({
  globalCss,
  jsxFramework: 'react',
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',

  theme: {
    extend: {
      breakpoints: {
        md: '500px',
      },
      tokens: {
        colors: {
          background: {
            value: '#202126',
          },
          gray: {
            50: {
              value: '#f6f6f7',
            },
            100: {
              value: '#e1e3e6',
            },
            200: {
              value: '#c3c6cc',
            },
            300: {
              value: '#9da1ab',
            },
            400: {
              value: '#787c89',
            },
            500: {
              value: '#5e616e',
            },
            600: {
              value: '#4a4d57',
            },
            700: {
              value: '#3d4048',
            },
            800: {
              value: '#34353b',
            },
            900: {
              value: '#2e2f33',
            },
            950: {
              value: '#202126',
            },
          },
          primary: {
            50: {
              value: '#effef6',
            },
            100: {
              value: '#dafeea',
            },
            200: {
              value: '#b7fbd6',
            },
            300: {
              value: '#69f5ab',
            },
            400: {
              value: '#40e88f',
            },
            500: {
              value: '#16d16f',
            },
            600: {
              value: '#0cad59',
            },
            700: {
              value: '#0d8848',
            },
            800: {
              value: '#106b3d',
            },
            900: {
              value: '#105734',
            },
            950: {
              value: '#02311b',
            },
          },
          secondary: {
            value: '#f5d669',
          },
        },
        fonts: {
          text: {
            value: 'var(--font-plex-sans), sans-serif',
          },
          display: {
            value: 'var(--font-plex-mono), Menlo, monospace',
          },
        },
      },
    },
  },
})
