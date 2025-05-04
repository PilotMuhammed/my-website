<template>
<div class="courses-page">
    <h1>Courses & Workshops</h1>
    <div class="course-list">
    <div class="card">
        <h2>Example Course Title</h2>
        <p>Description of the course or workshop content.</p>
    </div>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.courses-page {
padding: 2rem;
}

.course-list {
display: flex;
flex-direction: column;
gap: 1.5rem;
}

.card {
background-color: white;
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 1.5rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
