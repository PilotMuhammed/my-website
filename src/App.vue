<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
</script>

<style scoped>
@media (max-width: 768px) {
  #app {
    padding-bottom: 80px;
    position: relative;
    overflow-x: hidden;
  }
}
@media (min-width: 769px) {
  #app {
    margin-left: 70px; 
  }
}
</style>
