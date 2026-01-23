import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由設定
import './assets/main.css'

// 動畫套件
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router) // 啟用路由
app.mount('#app')

// 啟動動畫
AOS.init({
    duration: 800,
    once: true,
})