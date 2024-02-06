/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-pattern-light': "url('./src/assets/images/bg-desktop-light.jpg')",
        'desktop-pattern-dark': "url('./src/assets/images/bg-desktop-dark.jpg')",
        'mobile-pattern-light': "url('./src/assets/images/bg-mobile-light.jpg')",
        'mobile-pattern-dark': "url('./src/assets/images/bg-mobile-dark.jpg')",
      },
      colors:{
        // primary colors
        'bright-blue':' hsl(220, 98%, 61%)',
        'left-gradient':'hsl(192, 100%, 67%)',
        'right-gradient':' hsl(280, 87%, 65%)',
        
        // light-theme
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue':'hsl(236, 33%, 92%)',
        'light-grayish-blue':'hsl(233, 11%, 84%)',
        'dark-grayish-blue-lightMode':'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue':'hsl(235, 19%, 35%)',

        // dark-theme
        'very-dark-blue':'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue':'hsl(235, 24%, 19%)',
        'light-grayish-blue-darkMode':'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover':'hsl(236, 33%, 92%)',
        'dark-grayish-blue-darkMode':'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-darkMode':'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-two-darkMode':'hsl(237, 14%, 26%)',

      }
    },
  },
  plugins: [],
}