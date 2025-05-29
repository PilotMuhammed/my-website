<template>
<!-- Navbar الشاشات الكبيرة -->
<nav class="navbar desktop-navbar">
<router-link to="/" class="nav-icon" exact-active-class="active" title="Home">
    <div class="circle"><HomeIcon class="icon" /></div>
</router-link>
<router-link to="/cv" class="nav-icon" exact-active-class="active" title="Resume">
    <div class="circle"><DocumentTextIcon class="icon" /></div>
</router-link>
<router-link to="/projects" class="nav-icon" exact-active-class="active" title="Projects">
    <div class="circle"><BriefcaseIcon class="icon" /></div>
</router-link>
<router-link to="/courses" class="nav-icon" exact-active-class="active" title="Courses">
    <div class="circle"><PresentationChartBarIcon class="icon" /></div>
</router-link>
<router-link to="/books" class="nav-icon" exact-active-class="active" title="Books">
    <div class="circle"><BookOpenIcon class="icon" /></div>
</router-link>
</nav>

<!-- Navbar الموبايل -->
<div class="mobile-navbar">
<!-- زر أيقونة القائمة -->
<button
    class="hamburger"
    :class="{ open: menuOpen, glow: showGlow }"
    @click="toggleMenu"
    aria-label="Open Menu"
>
    <span></span>
    <span></span>
    <span></span>
</button>

<!-- Overlay شفاف -->
<transition name="fade">
    <div v-if="menuOpen" class="overlay" @click="closeMenu"></div>
</transition>

<!-- القائمة الجانبية -->
<transition name="slide">
    <aside v-if="menuOpen" class="side-menu">
    <router-link
        v-for="(item, idx) in menu"
        :key="idx"
        :to="item.to"
        class="side-icon"
        exact-active-class="active"
        @click="closeMenu"
        :title="item.title"
    >
        <div class="circle">
        <component :is="item.icon" class="icon" />
        </div>
    </router-link>
    </aside>
</transition>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
HomeIcon,
BriefcaseIcon,
DocumentTextIcon,
BookOpenIcon,
PresentationChartBarIcon
} from '@heroicons/vue/24/outline'

const menuOpen = ref(false)
const showGlow = ref(true)
const menu = [
{ to: '/', icon: HomeIcon, title: 'Home' },
{ to: '/cv', icon: DocumentTextIcon, title: 'Resume' },
{ to: '/projects', icon: BriefcaseIcon, title: 'Projects' },
{ to: '/courses', icon: PresentationChartBarIcon, title: 'Courses' },
{ to: '/books', icon: BookOpenIcon, title: 'Books' }
]

// تحكم بفتح/غلق القائمة
function toggleMenu() {
menuOpen.value = !menuOpen.value
if (showGlow.value) showGlow.value = false
}
function closeMenu() {
menuOpen.value = false
}

// وهج الأيقونة يظهر عند أول زيارة فقط
onMounted(() => {
if (window && window.localStorage) {
if (!localStorage.getItem('navbar-glow')) {
    showGlow.value = true
    localStorage.setItem('navbar-glow', '1')
} else {
    showGlow.value = true
    setTimeout(() => { showGlow.value = false }, 2000)
}
}
})
</script>

<style scoped>
:root {
--color-primary: #A0C878;
--color-text: #393E46;
--color-accent: #9FB3DF;
--color-background: #F8F8F8;
--color-border: #eeeeee;
}

/* ----------- Desktop Navbar ----------- */
.desktop-navbar {
position: fixed;
top: 0;
left: 0;
width: 70px;
height: 100vh;
background-color: var(--color-background);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
z-index: 1000;
border: none;
box-shadow: none;
transition: all 0.3s ease;
}
.nav-icon {
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.3s ease;
}
.circle {
background-color: var(--color-border);
border-radius: 50%;
width: 55px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease;
}
.circle:hover {
background-color: var(--color-accent);
transform: scale(1.1);
}
.icon {
width: 35px;
height: 35px;
color: var(--color-text);
transition: color 0.3s;
}
.active .icon {
color: white;
}
@media (min-width: 769px) {
.desktop-navbar .active .circle {
background-color: var(--color-primary);
transform: translateX(6px);
}
}
@media (max-width: 768px) {
.desktop-navbar {
display: none;
}
}

/* ----------- Mobile Navbar ----------- */
.mobile-navbar {
display: none;
}
@media (max-width: 768px) {
.mobile-navbar {
display: block;
position: fixed;
z-index: 2000;
left: 0;
top: 0;
width: 100vw;
height: 0;
pointer-events: none;
}
/* أيقونة القائمة */
.hamburger {
position: fixed;
top: 50%;
left: 0;
z-index: 2100;
width: 54px;
height: 54px;
background: transparent;
border: none;
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
pointer-events: all;
/* مكان البداية */
transform: translateY(-50%) translateX(0);
transition: transform 0.35s cubic-bezier(.63,-0.12,.41,1.18);
}
/* دفع الأيقونة للأمام عند فتح القائمة */
.hamburger.open {
transform: translateY(-50%) translateX(68px); /* يساوي عرض القائمة الجانبية */
}
/* الخطوط الثلاثة لأيقونة الهامبرغر */
.hamburger span {
display: block;
position: absolute;
width: 32px;
height: 4px;
background: var(--color-primary);
border-radius: 2px;
margin: 0;
left: 11px;
transition: 0.4s cubic-bezier(.68,-0.55,.27,1.55);
box-shadow: 0 0 6px 0 var(--color-primary);
}
.hamburger span:nth-child(1) { top: 16px; }
.hamburger span:nth-child(2) { top: 25px; }
.hamburger span:nth-child(3) { top: 34px; }

/* Animation: Hamburger to X */
.hamburger.open span:nth-child(1) {
top: 25px;
transform: rotate(45deg);
}
.hamburger.open span:nth-child(2) {
opacity: 0;
transform: scaleX(0.1);
}
.hamburger.open span:nth-child(3) {
top: 25px;
transform: rotate(-45deg);
}
/* Glow Effect */
.hamburger.glow {
animation: glowPulse 1.1s infinite alternate;
}
@keyframes glowPulse {
from {
    box-shadow: 0 0 0 0 rgba(160, 200, 120, 0.6), 0 0 12px 0 var(--color-primary);
}
to {
    box-shadow: 0 0 18px 6px rgba(160, 200, 120, 0.4), 0 0 22px 6px var(--color-accent);
}
}

/* Overlay */
.overlay {
position: fixed;
inset: 0;
background: rgba(60,70,60,0.17);
backdrop-filter: blur(1px);
z-index: 2005;
transition: opacity 0.4s;
}
.fade-enter-active, .fade-leave-active {
transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

/* Side Menu */
.side-menu {
position: fixed;
left: 0;
top: 50%;
transform: translateY(-50%);
z-index: 2101;
width: 68px;
min-height: 320px;
background: var(--color-background);
border-top-right-radius: 34px;
border-bottom-right-radius: 34px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
box-shadow: 0 0 18px 0 #bebebe24;
padding-top: 12px;
padding-bottom: 18px;
gap: 1.3rem;
animation: slideMenuIn 0.4s cubic-bezier(.63,-0.12,.41,1.18);
}
.slide-enter-active { animation: slideMenuIn 0.45s cubic-bezier(.63,-0.12,.41,1.18);}
.slide-leave-active { animation: slideMenuOut 0.35s cubic-bezier(.63,-0.12,.41,1.18) reverse;}
@keyframes slideMenuIn {
from { transform: translate(-120%, -50%);}
to { transform: translate(0, -50%);}
}
@keyframes slideMenuOut {
from { transform: translate(0, -50%);}
to { transform: translate(-120%, -50%);}
}

.side-icon {
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
}
.side-icon .circle {
width: 48px;
height: 48px;
background: var(--color-border);
margin: 0;
transition: all 0.28s cubic-bezier(.68,-0.55,.27,1.55);
box-shadow: none;
}
.side-icon .icon {
width: 30px;
height: 30px;
color: var(--color-text);
transition: color 0.3s;
}
.side-icon.active .circle {
background: var(--color-primary);
box-shadow: 0 0 10px 1px var(--color-primary);
transform: scale(1.08);
}
}
</style>
