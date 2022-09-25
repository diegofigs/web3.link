/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      ssm: '375px',
      psm: '412px',
      smx: '576px',
      sm: '640px',
      md: '768px',
      mdx: '992px',
      lg: '1024px',
      lgs: '1180px',
      xl: '1280px',
      '2xl':'1536px',
    }
  },
  plugins: [],
};
