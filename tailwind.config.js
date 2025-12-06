/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          link: {
            DEFAULT: 'oklch(60.9% 0.126 221.723)',
            hover: 'oklch(52% 0.105 223.128)',
            active: 'oklch(39.8% 0.07 227.392)',
          },
          text: {
            DEFAULT: 'oklch(14.7% 0.004 49.25)',
            primary: 'oklch(44.6% 0.03 256.802)',
            secondary: 'oklch(86.9% 0.005 56.366)',
            tertiary: 'oklch(1 0 0)',
            danger: 'oklch(57.7% 0.245 27.325)',
          },
          bg: {
            DEFAULT: 'oklch(1 0 0)',
            primary: 'oklch(21% 0.034 264.665)',
            secondary: 'oklch(14.7% 0.004 49.25)',
          },
          btn: {
            DEFAULT: 'oklch(60.9% 0.126 221.723)',
            hover: 'oklch(52% 0.105 223.128)',
            active: 'oklch(39.8% 0.07 227.392)',
          },
        },
        dark: {
          link: {
            DEFAULT: 'oklch(60.9% 0.126 221.723)',
            hover: 'oklch(52% 0.105 223.128)',
            active: 'oklch(39.8% 0.07 227.392)',
          },
          text: {
            DEFAULT: 'oklch(1 0 0)',
            primary: 'oklch(1 0 0)',
            secondary: 'oklch(1 0 0)',
            tertiary: 'oklch(14.7% 0.004 49.25)',
            danger: 'oklch(57.7% 0.245 27.325)',
          },
          bg: {
            DEFAULT: 'oklch(21% 0.034 264.665)',
            primary: 'oklch(14.7% 0.004 49.25)',
            secondary: 'oklch(1 0 0)',
          },
          btn: {
            DEFAULT: 'oklch(60.9% 0.126 221.723)',
            hover: 'oklch(52% 0.105 223.128)',
            active: 'oklch(39.8% 0.07 227.392)',
          },
        },
      },
    },
  },
  plugins: [],
};
