import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['selector'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent-color)',
        'accent-light': 'var(--accent-color-light)',
      },
      fontFamily: {
        jetbrains_mono: ['var(--font-jetbrains-mono)'],
        old: ['var(--font-old-standard)'],
        bebas_neue: ['var(--font-bebas-neue)'],
        feixen: ['var(--font-feixen)'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.headings': {
          'content-visibility': 'auto',
        },
      });
    }),
  ],
};
export default config;
