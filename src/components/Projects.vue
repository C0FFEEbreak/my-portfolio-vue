<template>
  <section>
    <h2>Projects</h2>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.js'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
