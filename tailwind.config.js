/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // 全站配色：要換風格只改這裡
            colors: {
                parchment: '#f7f7f4', // 頁面底色
                bone: '#f2f1ed',      // 卡片底色
                linen: '#e6e5e0',     // 次要按鈕 / 標籤
                stone: '#cdcdc9',     // 細框線
                ash: '#7a7974',       // 次要文字
                ink: '#26251e',       // 主要文字 / 深色按鈕
                ember: '#f54e00',     // 強調色（只用在文字重點）
            },
            fontFamily: {
                serif: ['"EB Garamond"', '"Noto Serif TC"', 'serif'],
                sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '4px',
            },
            maxWidth: {
                site: '1200px',
            },
        },
    },
    plugins: [],
}
