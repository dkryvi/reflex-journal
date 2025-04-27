import tailwindcssTypography from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';

import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: '#e0e0e0',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#f7f7f8',
        foreground: '#1a1a1a',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: '0.75rem', // 12px
        md: '0.5rem', // 8px
        sm: '0.375rem', // 6px
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      typography: (theme: (path: string) => unknown) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.primary.foreground'),
              },
            },
            h1: { fontSize: theme('fontSize.4xl'), fontWeight: '700' },
            h2: { fontSize: theme('fontSize.3xl'), fontWeight: '700' },
            h3: { fontSize: theme('fontSize.2xl'), fontWeight: '600' },
            p: { marginTop: '1rem', marginBottom: '1rem' },
            blockquote: {
              borderLeftColor: theme('colors.border'),
              color: theme('colors.muted.foreground'),
              fontStyle: 'normal',
            },
            code: {
              backgroundColor: theme('colors.muted.DEFAULT'),
              borderRadius: '0.25rem',
              padding: '0.25rem 0.375rem',
            },
          },
        },
      }),
    },
    plugins: [tailwindcssAnimate, tailwindcssTypography],
  },
} satisfies Config;

export default config;
