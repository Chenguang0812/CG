/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 你可以自定義符合公司形象的顏色
                'studio-red': '#e11d48',
            }
        },
    },
    plugins: [],
}