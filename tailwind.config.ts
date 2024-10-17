import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--color-bg-primary)',
        bgSecondary: 'var(--color-bg-secondary)',

        tBase: 'var(--color-text-base)',
        tSecondary: 'var(--color-text-secondary)',
        tAlternative: 'var(--color-text-alternative)',
        tAlternativeSecondary: 'var(--color-text-alternative-secondary)',

        bPrimary: 'var(--color-border-primary)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1930px',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
