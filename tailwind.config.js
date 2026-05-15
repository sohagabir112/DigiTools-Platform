/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1727",
        mist: "#f5f7fb",
      },
    },
  },
  plugins: [require("daisyui")],
}

