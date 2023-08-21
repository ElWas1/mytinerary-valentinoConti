/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: ["synthwave"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}