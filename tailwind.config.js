/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          shadow: {
            DEFAULT: 'oklch(37.4% 0.01 67.558)',
          },
          border: {
            DEFAULT: 'oklch(0.9249 0 0)',
            primary: 'oklch(14.7% 0.004 49.25)',
            secondary: 'oklch(44.6% 0.03 256.802)',
          },
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
          shadow: {
            DEFAULT: 'oklch(86.9% 0.005 56.366)',
          },
          border: {
            DEFAULT: 'oklch(14.7% 0.004 49.25)',
            primary: 'oklch(0.9249 0 0)',
            secondary: 'oklch(92.8% 0.006 264.531)',
          },
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
            DEFAULT: 'oklch(20.8% 0.042 265.755)',
            primary: 'oklch(21% 0.034 264.665)',
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
