/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '18': '4.5rem'
      },
      aspectRatio: {
        '2/3': '16 / 9',
      },
      height: {
        'custom-664': '664px',
        '55': '13.75rem'
      },
      fontSize: {
        section: '2.5rem'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FFAB00',
        secondary: '#377DFF',
        dark: '#141718',
        subtitle: '#6C7275',
        holder: '#F3F5F7',
        promotion: 'rgba(255, 171, 0, 0.4)'
      },
    },
  },
  plugins: [],
};
