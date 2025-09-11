/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js 13+ app dir
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}