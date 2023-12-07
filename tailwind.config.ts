import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', 'body[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* primary color */
        'primary-100': 'rgb(155 159 242 / 1)',
        'primary-200': 'rgb(136 141 240 / 1)',
        'primary-300': 'rgb(117 123 238 / 1)',
        'primary-400': 'rgb(98 105 236 / 1)',
        'primary-500': 'rgb(99 102 241 / 1)',
        'primary-600': 'rgb(80 88 233 / 1)',
        'primary-700': 'rgb(61 70 231 / 1)',
        'primary-800': 'rgb(42 52 229 / 1)',
        'primary-900': 'rgb(23 34 227 / 1)',
        /* black color */
        'black-100': 'rgb(77 77 77 / 1)',
        'black-200': 'rgb(58 58 58 / 1)',
        'black-300': 'rgb(40 40 40 / 1)',
        'black-400': 'rgb(29 29 29 / 1)',
        'black-500': 'rgb(17 17 17 / 1)',
        'black-600': 'rgb(8 8 8 / 1)',
        'black-700': 'rgb(0 0 0 / 1)',
      },
      backgroundColor: {},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
