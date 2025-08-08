<template>
  <div id="app">
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app {
  font-family: sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 1rem;
}
</style>
