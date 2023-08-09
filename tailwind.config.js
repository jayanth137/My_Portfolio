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
      textGray: '#868787',
      contGray: '#DDDCDC',
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }

      md: '760px',
      // => @media (min-width: 760px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
