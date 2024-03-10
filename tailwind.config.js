/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            '2xs': '360px',
            xs: '480px',
            '2md': '850px',
            '3xl': '1700px',
         },
         keyframes: {
            'fade-in': {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            'fade-in-from-right': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
            'fade-in-from-left': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(-20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
         },
         animation: {
            fadeIn: 'fade-in 0.3s ease-out forwards',
            fadeInFromRight: 'fade-in-from-right 0.7s ease-out forwards',
            fadeInFromLeft: 'fade-in-from-left 0.7s ease-out forwards',
         },
         spacing: {
            sectionGapSm: '4.5rem',
            sectionGapMd: '9rem',
            sectionGapLg: '13.5rem',
            sectionGapXl: '18rem',
         },
         boxShadow: {
            large: '0 10px 60px -10px rgba(0,0,0,0.25)',
            medium: '0 5px 40px -5px rgba(0,0,0,0.25)',
            small: '0 7px 20px -10px rgba(0,0,0,0.15)',
         },
         transitionDuration: {
            default: '150ms',
         },
         colors: {
            primary: '#ff8631',
            secondary: '#DB5937',
            primaryDark: '#e6792c',
            primaryLight: '#ff9246',
            primaryLightest: '#ffdbc1',
            textPrimary: '#1C1B1B',
            textMediumLight: '#1c1b1bcc',
            textLight: '#1c1b1b99',
            blackLight: '#151515',
            darkThemeBg: '#202124',
         },

         borderRadius: {
            default: '5px',
            defaultLg: '10px',
         },
      },
   },
   plugins: [
      // ...
      require('tailwind-scrollbar')({ nocompatible: true }),
   ],
};
