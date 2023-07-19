/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md","content/**/*.html", "layouts/**/*.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },
  plugins: [],
}

