// customization section
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2DA950",
        grey: "#727272",
        black: "#1C1C1C",
        white: "#FFFFFF",
        red: "#FF0000",
        olive: "#E8EEE7",
        "accordian-grey": "#9E9D9D",
        "hover-color": "#EFEFEF",
        "button-disable-color": "#C9C9C9",
        "footer-color": "#F5F5F5",
      },
      fontFamily: {
        "covered-by-your-grace": ["Covered By Your Grace", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },

  plugins: [],
};
