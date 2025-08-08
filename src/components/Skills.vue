<template>
  <section class="site-skills">
    <!-- First row: Title spanning all columns -->
    <h1 class="skills-title">Skills</h1>

    <!-- Second row: 3 skill columns -->
    <div class="skill-column" v-for="(skill, index) in skills.slice(0,3)" :key="index">
      <div class="icon">{{ skill.icon }}</div>
      <h2 class="skill-name">{{ skill.category }}</h2>
      <p class="skill-text">{{ skill.description }}</p>
    </div>

    <!-- Third row: next 3 skill columns -->
    <div class="skill-column" v-for="(skill, index) in skills.slice(3,6)" :key="index">
      <div class="icon">{{ skill.icon }}</div>
      <h2 class="skill-name">{{ skill.category }}</h2>
      <p class="skill-text">{{ skill.description }}</p>
    </div>
  </section>
</template>


<script setup>
import skills from '../data/skills.js'
</script>

<style scoped>
.site-skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 1.5rem;
  padding: 1rem;
  text-align: center;
}

.skills-title {
  grid-column: 1 / -1; /* Span all 3 columns */
  margin-bottom: 2rem;
}

.skill-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.icon {
  font-size: 2.5rem;
}

.skill-name {
  font-weight: bold;
  margin: 0;
}

.skill-text {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
}

/* Responsive: stack columns on narrow screens */
@media (max-width: 768px) {
  .site-skills {
    grid-template-columns: 1fr;
    grid-template-rows: auto repeat(6, 1fr);
  }
  .skills-title {
    margin-bottom: 1rem;
  }
}



</style>
