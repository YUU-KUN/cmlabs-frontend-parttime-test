/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F8B600',
        'secondary': '#FAC44D',
        'grey': '#DDDBE4',
        'dark-grey': '#F5F5F5',
        'white': '#FDFDFD',

        'primary-grey': '#CFCFCF',
        'secondary-grey': '#BBCCDF',
        'red': '#D22912',

        'primary-red': '#D22813',
        'primary-blue': '#1A3066',
        'primary-green': '#1CE51C', //56F397
        'primary-red': '#D22912',
        'primary-yellow': '#E3B72C',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },

      fontSize: {
        // Page Titles
        'header': ['34px', {
          lineHeight: '38.4px',
          fontWeight: '700'
        }],

        // Tabs, titles, forms
        'title1': ['28px', {
          fontWeight: '500'
        }],

        // Buttons, tabs, titles, forms
        'title2': ['22px', {
          fontWeight: '500'
        }],

        // Info Paragraph
        'headline': ['20px', {
          fontWeight: '400'
        }],

        // Body
        'body': ['14px', {
          fontWeight: '400'
        }],

        // Time Stamps, footers
        'caption': ['12px', {
          fontWeight: '400'
        }],

        // '12': ['12px', {
        //   lineHeight: '14.4px',
        // }],
        // '14': ['14px', {
        //   lineHeight: '19.1px',
        // }],
        // '16': ['16px', {
        //   lineHeight: '19.2px',
        // }],
        // '18': ['18px', {
        //   lineHeight: '24.55px',
        // }],
        // '20': ['20px', {
        //   lineHeight: '24.55px',
        // }],
        // '24': ['24px', {
        //   lineHeight: '39.5px',
        // }],
        // '32': ['32px', {
        //   lineHeight: '38.4px',
        // }],
        // '36': ['36px', {
        //   lineHeight: '49.1px',
        // }],
        // '40': ['40px', {
        //   lineHeight: '48.76px',
        // }],
        // '48': ['48px', {
        //   lineHeight: '65px',
        // }],
        // '51': ['51px', {
        //   lineHeight: '45.74px',
        // }],
        // '63': ['63px', {
        //   lineHeight: '56px',
        // }],
      },
    },
    screens: {
      'phone': '460px',
      // => @media (min-width: 460px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

