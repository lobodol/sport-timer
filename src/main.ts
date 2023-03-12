import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/main.scss'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const routes = [
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.mount('body')
