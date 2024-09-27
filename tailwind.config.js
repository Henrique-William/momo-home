/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'class'
  theme: {
    extend: {
      screens: {
        md: { min: "911px" },
        "max-sm": { max: "639px" }, // max-width: 639px
        "max-md": { max: "910px" }, // max-width: 767px
        "max-lg": { max: "1023px" }, // max-width: 1023px
        "max-xl": { max: "1279px" }, // max-width: 1279px
        "max-2xl": { max: "1535px" }, // max-width: 1535px
      },
      padding: {
        18: "4.5rem",
        22: "5.5rem",
        55: "13.75rem",
      },
      aspectRatio: {
        "2/3": "16 / 9",
      },
      height: {
        "custom-664": "664px",
        55: "13.75rem",
      },
      fontSize: {
        section: "2.5rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gradient1: "#FFC95C",
        gradient2: "#FEBD3B",
        primary: "#FFAB00",
        secondary: "#377DFF",
        secondary2: "#38CB89",
        dark: "#141718",
        subtitle: "#6C7275",
        holder: "#F3F5F7",
        grayBorder: "#E8ECEF",
        promotion: "rgba(255, 171, 0, 0.4)",
        socials: "#F2F4F6",
      },
      keyframes: {
        scaleUpDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "scale-up-down": "scaleUpDown 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
