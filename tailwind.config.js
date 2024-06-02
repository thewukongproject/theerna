/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dp: "#151515",
        ds: "#7b7b7b",
        lp: "#ffffff",
        ls: "#f4f3ec",
        accent: "#FCB24C",
        br: "#dad8d5",
      },
    },
  },
  plugins: [],
};
