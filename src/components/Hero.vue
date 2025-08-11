<template>
  <section class="hero">
    <h1 class="name">{{ name }}</h1>
    <p class="title">{{ title }}</p>
    <p class="tagline">{{ tagline }}</p>
  </section>
</template>

<script setup>
const name = 'Your Name'
const title = 'Front-End Developer'
const tagline = 'I build clean, accessible websites and web apps.'
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>
