<template>
  <section class="site-experiences">
    <h1 class="section-title">Experiences</h1>

    <div class="experience-column" v-for="(experience, index) in experiences.slice(0,3)" :key="index">
      <!-- <div class="icon">{{ experience.icon }}</div> -->
      <h2 class="experience-name">{{ experience.category }}</h2>
      <p class="experience-text">{{ experience.description }}</p>
    </div>

    <div class="experience-column" v-for="(experience, index) in experiences.slice(3,6)" :key="index">
      <!-- <div class="icon">{{ experience.icon }}</div> -->
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
