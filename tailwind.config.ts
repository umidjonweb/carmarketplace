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
            xl: "1400px",
            "2xl": "1496px",
         },
      },
      colors: {
         primary: "#5459EA",
         danger: "#FA0305",
         "danger-400 ": "#FFD4D4 ",
         secondary: "#FF9533",
         "secondary-200": "#FFEAD7",
          black: "#000000",
         "black-800": "#2E3A59",
         "black-600": "#192A3E",
         "black-400": "#505470 ",
         success: "#34B87C",
         white: "#ffffff",
         gray: "#9DA3BB",
         "gray-800": "#90A0B7",
      },
      extend: {
         fontFamily: {
            "poppins-300": ["poppins-300"],
            "poppins-400": ["poppins-400"],
            "poppins-500": ["poppins-500"],
            "poppins-600": ["poppins-600"],
            "angry": ["angry"],
         }
      },
   },
   plugins: [],
};
