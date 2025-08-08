<template>
  <section>
    <h2>Education</h2>
    <ul>
      <li v-for="(edu, index) in education" :key="index">
        <strong>{{ edu.degree }}</strong> - {{ edu.school }} ({{ edu.year }})
      </li>
    </ul>
  </section>
</template>

<script setup>
import education from '../data/education.js'
</script>

