/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      ssm: '375px',
      psm: '538px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgs: '1180px',
      xl: '1280px',
      '2xl':'1536px',
    }
  },
  plugins: [],
}
