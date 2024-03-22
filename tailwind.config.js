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

      animation: {
        translateAnimate: "translateKeyframe 1.5s ease-in infinite",
      },
      keyframes: {
        translateKeyframe: {
          "0%, 100px": { transform: "translate(3px, -3px)" },
          "50%": { transform: "translate(3px, -3px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
