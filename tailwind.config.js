/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1280px',
      },
      fontFamily: {
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#262626',
        'secondary': '#6D6D6D',
        'hash':'#767676',
        'textColor':'#C4C4C4'
      },

    },
  },
  plugins: [ require("flowbite/plugin"),],
}

