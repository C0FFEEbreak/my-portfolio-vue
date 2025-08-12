<script setup>
import { ref } from 'vue'
import experiences from '@/data/experiences.js'

const activeIndex = ref(null)

function toggleAccordion(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="experiences">
    <h1 class="section-title">Experiences</h1>
    <div class="experiences-content">
      <div class="experiences-image">
        <img src="@/assets/icons/icon-briefcase.svg" alt="Experience Image" />
      </div>

      <div class="experiences-accordion">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="accordion-item"
        >
          <button
            class="accordion-header"
            :aria-expanded="activeIndex === index ? 'true' : 'false'"
            :aria-controls="'panel-' + index"
            @click="toggleAccordion(index)"
            :id="'accordion-header-' + index"
          >
            <span>{{ experience.category }}</span>
<span class="accordion-arrow" aria-hidden="true">
  <!-- Down arrow (shown when active) -->
  <svg
    v-if="activeIndex === index"
    xmlns="http://www.w3.org/2000/svg"
    height="40px"
    width="40px"
    viewBox="0 -960 960 960"
    fill="#e3e3e3"
  >
    <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
  </svg>

  <!-- Left arrow (shown when inactive) -->
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    height="40px"
    width="40px"
    viewBox="0 -960 960 960"
    fill="#e3e3e3"
  >
    <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
  </svg>
</span>

          </button>

          <div
            v-show="activeIndex === index"
            class="accordion-content"
            :id="'panel-' + index"
            role="region"
            :aria-labelledby="'accordion-header-' + index"
          >
            <p>{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experiences {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  padding: 1rem;
}

.section-title {
  grid-row: 1;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.experiences-content {
  grid-row: 2;
  display: flex;
  gap: 2rem;
}

.experiences-image {
  flex: 0 0 30%;
}

.experiences-image img {
  width: 100%;
  background: #101519;
}

.experiences-accordion {
  max-width: 370px; /* or whatever width fits your design */
  width: 100%;      /* lets it be responsive up to max-width */
  margin: 0 auto;   /* centers horizontally if narrower than parent */
  padding: 20px;
  background: #101519;
}

span.accordion-arrow svg {
  color: #C5C6BF;
}
.accordion-item {
  border-bottom: 1px solid #C5C6BF;
}

.accordion-header {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: normal;
  cursor: pointer;
  color: #fff;
}

.accordion-arrow svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.accordion-content {
  padding: 0 0 1rem 0;
  color: #555;
}

@media (max-width: 768px) {
  .experiences-content {
    flex-direction: column;
  }
  .experiences-image,
  .experiences-accordion {
    flex: 100%;
  }
}
</style>
