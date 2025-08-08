<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Skills', url: '#skills' },
  { name: 'Portfolio', url: '#portfolio' },
  { name: 'Experience', url: '#experience' },
  { name: 'Education', url: '#educatiom' },
  { name: 'Contact', url: '#contact' }
]
</script>

<style scoped>
/* your styles */
</style>
