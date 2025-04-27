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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
            strong: { fontWeight: '600' },
            h1: { fontSize: '2.25rem', fontWeight: '700' },
            h2: { fontSize: '1.875rem', fontWeight: '700' },
            h3: { fontSize: '1.5rem', fontWeight: '600' },
            blockquote: {
              borderLeft: '4px solid',
              borderColor: theme('colors.border'),
              paddingLeft: '1rem',
              color: theme('colors.muted.foreground'),
            },
            code: {
              backgroundColor: theme('colors.muted.DEFAULT'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.primary.foreground'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
            strong: { color: theme('colors.foreground') },
            h1: { color: theme('colors.foreground') },
            h2: { color: theme('colors.foreground') },
            h3: { color: theme('colors.foreground') },
            blockquote: {
              borderLeft: '4px solid',
              borderColor: theme('colors.muted.foreground'),
              color: theme('colors.muted.foreground'),
            },
            code: {
              backgroundColor: theme('colors.muted.DEFAULT'),
              color: theme('colors.foreground'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
            },
          },
        },
      }),
    },
    plugins: [tailwindcssAnimate, tailwindcssTypography],
  },
} satisfies Config;

export default config;
