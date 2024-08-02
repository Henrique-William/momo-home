/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        section: '2.5rem'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FFAB00',
        secondary: '#377DFF',
        button: '#141718',
        holder: 'F3F5F7'
      },
    },
  },
  plugins: [],
};
