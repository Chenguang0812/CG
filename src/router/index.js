import { createRouter, createWebHistory } from 'vue-router'
// 引入兩個頁面檔案
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import ContactView from '../views/Contactview.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/works', // 這是「作品集專屬頁面」的網址
            name: 'works',
            component: WorksView
        },
        {
            path: '/contact', // 新增專屬的聯絡我們網址
            name: 'contact',
            component: ContactView
        }
    ],
    // 讓換頁時自動滾動到最上面
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    }
})

export default router