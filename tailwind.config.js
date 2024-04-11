/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                p: ['"Public Sans"', "sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    xl: "1rem",
                    "2xl": "2rem",
                },
                screens: {
                    "2xl": "1440px",
                },
            },
            colors: {
                dot: {
                    primary: "#152430",
                    grey: "#515C62",
                    hazel: "#BAB78D",
                },
                nq: {
                    forest: "#152430",
                    primary: "#515C62",
                    jade: "#2EC99B",
                    grey: "#DBDFD4",
                },
            },
        },
    },
    plugins: [],
};
