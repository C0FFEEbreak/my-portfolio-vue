<template>
  <section class="education">
    <!-- Top row -->
    <h1 class="section-title">Education</h1>

    <!-- Bottom row -->
    <div class="education-grid">
      <!-- Column 1 -->
      <div class="education-info">
        <h2>{{ schoolName }}</h2>
        <p>{{ degree }}</p>
      </div>

      <!-- Column 2 -->
      <div class="education-sphere">
        <WordSphere :words="courses" />
      </div>
    </div>
  </section>
</template>

<script>
import WordSphere from "@/components/WordSphere.vue";

export default {
  name: "Education",
  components: {
    WordSphere
  },
  data() {
    return {
      schoolName: "Ivy Tech State College",
      degree: "A.A.S., IT Web Management",
      courses: [
        "Multimedia",
        "Visual Communications",
        "Electronic Imaging",
        "Graphics Design",
        "Digital Publication",
        "Typography",
        "Network Fundamentals"
      ]
    };
  }
};
</script>

<style scoped>
.education {
  padding: 2rem;
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.education-info h2 {
  margin: 0;
}

.education-info p {
  margin: 0.5rem 0 0;
}

.education-sphere {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive: stack columns on small screens */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .education-sphere {
    margin-top: 1.5rem;
  }
}
</style>
