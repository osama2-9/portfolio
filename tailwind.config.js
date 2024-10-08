/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", "Poppins"],
      },
    },
  },

  plugins: [],
};
