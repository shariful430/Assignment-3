 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        safelist: [
          "bg-gradient-to-r",
          "from-orange-500",
          "to-red-500",
        ],
      },
    },
    plugins: [],
  }