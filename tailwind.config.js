/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#0045FF',
      secondary: '#3CDBA2',
      lightGray: '#EDEDED',
      darkGray: '#202020',
      white: '#F2F2F2',
      black: '#101010',
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 576px) { ... }

      md: '760px',
      // => @media (min-width: 960px) { ... }

      lg: '1024px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
