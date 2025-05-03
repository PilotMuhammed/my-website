<template>
<nav class="navbar">
    <h2>test</h2>
    <router-link to="/" class="nav-item" exact-active-class="active">
    <House size="24" weight="duotone" />
    </router-link>
    <router-link to="/projects" class="nav-item" exact-active-class="active">
    <Briefcase size="24" weight="duotone" />
    </router-link>
    <router-link to="/cv" class="nav-item" exact-active-class="active">
    <FileText size="24" weight="duotone" />
    </router-link>
    <router-link to="/books" class="nav-item" exact-active-class="active">
    <BookOpen size="24" weight="duotone" />
    </router-link>
</nav>
</template>

<script setup>
import { House, Briefcase, FileText, BookOpen } from '@phosphor-icons/vue'
</script>

<style scoped>
.navbar {
position: fixed;
top: 0;
left: 0;
width: 60px;
height: 100vh;
background-color: #ffffff;
border-right: 1px solid #e5e7eb;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1rem;
gap: 1.5rem;
}

.nav-item {
color: #1f2937;
transition: color 0.3s;
}

.nav-item:hover {
color: #3e64ff;
}

.active {
color: #3e64ff;
}
</style>
