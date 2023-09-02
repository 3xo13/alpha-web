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
        'orange-sky': "url('/assets/images/backgrounds/1.png')",
        'blue-lightning-cloud': "url('/assets/images/backgrounds/2.png')",
        'blue': "url('/assets/images/backgrounds/3.png')",
        'city-lightning': "url('/assets/images/backgrounds/4.png')",
        'dark-lightning': "url('/assets/images/backgrounds/5.png')",
        'blue-lightning': "url('/assets/images/backgrounds/6.png')",
        'orange-lightning': "url('/assets/images/backgrounds/7.png')",
        'white-lightning': "url('/assets/images/backgrounds/8.png')",
        'blue-lightning-icon': "url('/assets/images/backgrounds/9.png')",
        'switch-box': "url('/assets/images/backgrounds/10.png')",
        'blue-icons-grid': "url('/assets/images/backgrounds/11.png')",
        'riadh-day': "url('/assets/images/backgrounds/20.png')",
        'tower-night': "url('/assets/images/backgrounds/21.png')",
        'cables-light': "url('/assets/images/backgrounds/cables-light.png')",
        'cables-dark': "url('/assets/images/backgrounds/cables-dark.png')",
        'cables-orange': "url('/assets/images/backgrounds/cables-orange.png')",
        'earth-connect': "url('/assets/images/backgrounds/earth-connect.png')",
        'blueprint': "url(/assets/images/backgrounds/blueprints.jpg)"
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
