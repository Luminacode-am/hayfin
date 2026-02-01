/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- LIGHT THEME ---
        'light-bg': 'oklch(1 0 0)',
        'light-bg-primary': 'oklch(21% 0.034 264.665)',
        'light-bg-secondary': 'oklch(14.7% 0.004 49.25)',

        'light-text': 'oklch(14.7% 0.004 49.25)',
        'light-text-primary': 'oklch(44.6% 0.03 256.802)',
        'light-text-secondary': 'oklch(86.9% 0.005 56.366)',
        'light-text-tertiary': 'oklch(1 0 0)',
        'light-text-danger': 'oklch(57.7% 0.245 27.325)',

        'light-link': 'oklch(60.9% 0.126 221.723)',
        'light-link-hover': 'oklch(52% 0.105 223.128)',
        'light-link-active': 'oklch(39.8% 0.07 227.392)',

        'light-border': 'oklch(0.9249 0 0)',
        'light-border-primary': 'oklch(14.7% 0.004 49.25)',
        'light-border-secondary': 'oklch(44.6% 0.03 256.802)',

        'light-btn': 'oklch(60.9% 0.126 221.723)',
        'light-btn-hover': 'oklch(52% 0.105 223.128)',
        'light-btn-active': 'oklch(39.8% 0.07 227.392)',

        'light-shadow': 'oklch(37.4% 0.01 67.558)',

        // --- DARK THEME ---
        'dark-bg': 'oklch(20.8% 0.042 265.755)',
        'dark-bg-primary': 'oklch(21% 0.034 264.665)',
        'dark-bg-secondary': 'oklch(1 0 0)',

        'dark-text': 'oklch(1 0 0)',
        'dark-text-primary': 'oklch(1 0 0)',
        'dark-text-secondary': 'oklch(86.9% 0.005 56.366)',
        'dark-text-tertiary': 'oklch(14.7% 0.004 49.25)',
        'dark-text-danger': 'oklch(57.7% 0.245 27.325)',

        'dark-link': 'oklch(60.9% 0.126 221.723)',
        'dark-link-hover': 'oklch(52% 0.105 223.128)',
        'dark-link-active': 'oklch(39.8% 0.07 227.392)',

        'dark-border': 'oklch(95.6% 0.045 203.388)',
        'dark-border-primary': 'oklch(0.9249 0 0)',
        'dark-border-secondary': 'oklch(92.8% 0.006 264.531)',

        'dark-btn': 'oklch(60.9% 0.126 221.723)',
        'dark-btn-hover': 'oklch(52% 0.105 223.128)',
        'dark-btn-active': 'oklch(39.8% 0.07 227.392)',

        'dark-shadow': 'oklch(30.2% 0.056 229.695)',
      },
    },
  },
  plugins: [],
};
