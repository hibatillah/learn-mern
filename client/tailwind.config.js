module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans",
        montserrat: "'Montserrat', sans",
      },
      colors: {
        primary: "#1C5067",
        secondary: "#0A093D",
        grey: {
          light: "#e9eef0",
          dark: "#656464",
        },
      },
    },
  },
  plugins: [],
};