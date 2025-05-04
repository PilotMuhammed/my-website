<template>
<nav class="navbar">
    <router-link to="/" class="nav-icon" exact-active-class="active" title="Home">
    <div class="circle">
        <HomeIcon class="icon" />
    </div>
    </router-link>
    <router-link to="/projects" class="nav-icon" exact-active-class="active" title="Projects">
    <div class="circle">
        <BriefcaseIcon class="icon" />
    </div>
    </router-link>
    <router-link to="/cv" class="nav-icon" exact-active-class="active" title="CV">
    <div class="circle">
        <DocumentTextIcon class="icon" />
    </div>
    </router-link>
    <router-link to="/books" class="nav-icon" exact-active-class="active" title="Books">
    <div class="circle">
        <BookOpenIcon class="icon" />
    </div>
    </router-link>
    <router-link to="/courses" class="nav-icon" exact-active-class="active" title="Courses">
    <div class="circle">
        <PresentationChartBarIcon class="icon" />
    </div>
</router-link>

</nav>
</template>

<script setup>
import { HomeIcon, BriefcaseIcon, DocumentTextIcon, BookOpenIcon, PresentationChartBarIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.navbar {
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
border-right: none;
box-shadow: none;
}

.nav-icon {
display: flex;
align-items: center;
justify-content: center;
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

.active .circle {
background-color: var(--color-primary);
}

.active .icon {
color: white;
}
</style>
