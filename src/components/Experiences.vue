<template>
  <section class="site-experiences">
    <!-- First row: Title spanning all columns -->
    <h1 class="experiences-title">Experiences</h1>

    <!-- Second row: 3 experience columns -->
    <div class="experience-column" v-for="(experience, index) in experiences.slice(0,3)" :key="index">
      <div class="icon">{{ experience.icon }}</div>
      <h2 class="experience-name">{{ experience.category }}</h2>
      <p class="experience-text">{{ experience.description }}</p>
    </div>

    <!-- Third row: next 3 experience columns -->
    <div class="experience-column" v-for="(experience, index) in experiences.slice(3,6)" :key="index">
      <div class="icon">{{ experience.icon }}</div>
      <h2 class="experience-name">{{ experience.category }}</h2>
      <p class="experience-text">{{ experience.description }}</p>
    </div>
  </section>
</template>


<script setup>
import experiences from '../data/experiences.js'
</script>

<style scoped>
.site-experiences {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 1.5rem;
  padding: 1rem;
  text-align: center;
}

.experiences-title {
  grid-column: 1 / -1; /* Span all 3 columns */
  margin-bottom: 2rem;
}

.experience-column {
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

.experience-name {
  font-weight: bold;
  margin: 0;
}

.experience-text {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
}

/* Responsive: stack columns on narrow screens */
@media (max-width: 768px) {
  .site-experiences {
    grid-template-columns: 1fr;
    grid-template-rows: auto repeat(6, 1fr);
  }
  .experiences-title {
    margin-bottom: 1rem;
  }
}



</style>
