<template>
    <div class="books-page">
    <h1>Books I've Read</h1>
    <ul class="book-list">
    <li v-for="book in books" :key="book.title">
        <strong>{{ book.title }}</strong> — <em>{{ book.author }}</em>
    </li>
    </ul>
</div>
</template>

<script setup>
const books = [
{ title: 'Deep Work', author: 'Cal Newport' },
{ title: 'Atomic Habits', author: 'James Clear' },
{ title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' }
]
</script>

<style scoped>
.books-page {
padding: 2rem;
}
.book-list {
list-style: none;
padding: 0;
}
.book-list li {
margin-bottom: 1rem;
font-size: 1.1rem;
}
</style>
