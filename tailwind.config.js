module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-footer": "#222",
        "footer-text": "#999",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
  },
};
