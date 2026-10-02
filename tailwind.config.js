/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4B5548',     // хвойный
                secondary: '#A89F8D',   // древесина
                accent: '#7A6E59',
                background: '#F5F3EE',
                textPrimary: '#2C302B',
            },
            fontFamily: {
                sans: ['"Segoe UI"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}