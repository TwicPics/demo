module.exports = {
    purge: {
        enabled: false,
        content : [`./src/**/*.{html, ts}`]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                twicpics: "#9000ff",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require('@tailwindcss/typography'),
    ],
};
