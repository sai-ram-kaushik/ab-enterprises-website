/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#000000",
        secondary: "#E44F46",
      },

      fontFamily: {
        heading: "Odor Mean Chey",
        bodyContent: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
