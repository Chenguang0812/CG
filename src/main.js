import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// 新增這兩行
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')

// 啟動動畫偵測
AOS.init({
    duration: 800, // 動畫持續時間 (毫秒)
    once: true,    // 只要播一次就好，不要往回滾又播一次
})