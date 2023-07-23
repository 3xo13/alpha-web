/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      width: {
        '120': '30rem',
        '110': '27.5rem',
        'screen': '100dvw',
        '90%': '90dvw',
        '80%': '80dvw',
      },
      height: {
        '120': '30rem',
        '90%': 'calc(100vh - 2.5rem)',
        '70%': '70vh',
        '50%': '50vh', 
        '120%': '120vh',
        'screen': '100dvh',
      },
      translate: {
        '120': '30rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/crane2.svg')",
        'about-pattern': "url('/assets/images/about.svg')",
        'logo': "url('/assets/images/logo.png')",
        'about-header': "url('/assets/images/about/1.svg')",
        'our-vision': "url('/assets/images/about/2.svg')",
        'our-mission': "url('/assets/images/about/3.svg')",
        'about-header-sm': "url('/assets/images/about/1-1.svg')",
        'our-vision-sm': "url('/assets/images/about/2-2.svg')",
        'our-mission-sm': "url('/assets/images/about/3-3.svg')",
        'what-we-do': "url('/assets/images/about/4.svg')",
      },
      minWidth: {
        'inherit': 'inherit',
        '120': '30rem',
        '110': '27.5rem',
        'screen': '100dvw',
        '90%': '90dvw',
        '80%': '80dvw',
      }
      
    },
  },
  plugins: [],
}
