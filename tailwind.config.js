/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        notify: "#CF1A1A",
        wine: {
          50: "#F4EDED",
          70: "#FFEFF0",
          100: "#FFE8EA",
          200: "#A8797D",
          300: "#786062",
          400: "#AB4343",
          500: "#6A4346",
          700: "#501B1F",
          800: "#3A1D1B",
          900: "#180A0B",
          950: "#441F1D",
          1000: "#6B2A2A",
        },
        newgray: {
          100: "#BEBEBE",
          200: "#CFC1C2",
          300: "#B2A1A3",
          400: "#A09192",
          500: "#FFFBFB",
          600: "#D9D9D9",
          700: "#F2EEED",
        },
      },
    },
  },
  plugins: [],
};
