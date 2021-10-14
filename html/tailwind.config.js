module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "daily-dev-tips": "#F89283",
        twicpics: "#9000ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/typography"),
  ],
};
