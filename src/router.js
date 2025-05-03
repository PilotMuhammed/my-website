import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import CV from './pages/CV.vue'
import Books from './pages/Books.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/cv', component: CV },
    { path: '/books', component: Books }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
