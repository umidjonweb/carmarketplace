/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
   ],
   theme: {
      container: {
         center: true,
         screens: {
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1100px",
            "2xl": "1300px",
         },
      },
      colors: {
         primary: "#5459EA",
         danger: "#E12C46",
         "danger-400": "#FFD4D4",
         "danger-100": "#F9D2D8",
         secondary: "#FF9533",
         "secondary-200": "#FFEAD7",
         black: "#000000",
         "black-800": "#2E3A59",
         "black-600": "#192A3E",
         "black-400": "#505470",
         success: "#25C418",
         white: "#ffffff",
         gray: "#9DA3BB",
         "gray-600": "#F2F4F7",
         "gray-200": "#F8F9FB",
         "gray-300": "#E9ECEF",
         "gray-700": "#EFEFEF",
         "gray-800": "#90A0B7",
      },
      extend: {
         fontFamily: {
            "montserrat-400": ["montserrat-400"],
            "montserrat-500": ["montserrat-500"],
            "montserrat-600": ["montserrat-600"],
            "montserrat-700": ["montserrat-700"],
         }
      },
   },
   plugins: [],
};
