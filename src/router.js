import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Gallery from './pages/Gallery.vue'
import Books from './pages/Books.vue'
import Courses from './pages/Courses.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/gallery', component: Gallery },
    { path: '/books', component: Books },
    { path: '/courses', component: Courses }      
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
