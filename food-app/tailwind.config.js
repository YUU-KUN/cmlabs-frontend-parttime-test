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
        'primary-grey': '#CFCFCF',
        'white': '#FDFDFD',
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
      },
    },
    screens: {
      'phone': '460px',
      // => @media (min-width: 460px) { ... }

      'tablet': '600px',
      // => @media (min-width: 600px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

