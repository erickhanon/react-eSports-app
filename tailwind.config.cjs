/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      backgroundImage: {
        'gradient': "linear-gradient(89.86deg, #DCD2F9 14.08%, #FF4090 34.61%, #B84EDD 44.57%)",
        'card-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
        fundo: 'url("/fundo.png")',
      },
    },
  },
  plugins: [],
};
