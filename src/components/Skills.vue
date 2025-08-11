<template>
<section class="site-skills">
  <h1 class="section-title">&lt; &gt; Skills &lt; / &gt;</h1>

      <div class="skill-column">
        <div class="skill-icon">💻</div>
        <div class="skill-title">Web Development</div>
        <div class="skill-list">
          <span class="skill-item">AngularJS</span>
          <span class="skill-item">Bootstrap</span>
          <span class="skill-item">CSS3</span>
          <span class="skill-item">HTML5</span>
          <span class="skill-item">JavaScript</span>
          <span class="skill-item">jQuery</span>
          <span class="skill-item">UI/UX Design</span>
          <span class="skill-item">Vue.js</span>
          <span class="skill-item">WordPress</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-icon">🛠️</div>
        <div class="skill-title">Authoring Tools</div>
        <div class="skill-list">
          <span class="skill-item">Articulate Storyline</span>
          <span class="skill-item">Articulate Rise</span>
          <span class="skill-item">Captivate</span>
          <span class="skill-item">Lectora</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-icon">🎬</div>
        <div class="skill-title">Media Tools</div>
        <div class="skill-list">
          <span class="skill-item">After Effects</span>
          <span class="skill-item">Adobe Animate</span>
          <span class="skill-item">Audacity</span>
          <span class="skill-item">Camtasia</span>
          <span class="skill-item">Premiere Pro</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-icon">🔧</div>
        <div class="skill-title">Design</div>
        <div class="skill-list">
          <span class="skill-item">Illustrator</span>
          <span class="skill-item">Photoshop</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-icon">✅</div>
        <div class="skill-title">Accessibility</div>
        <div class="skill-list">
          <span class="skill-item">508 Compliance</span>
          <span class="skill-item">QA Testing</span>
          <span class="skill-item">SCORM</span>
        </div>
      </div>

      <div class="skill-column">
        <div class="skill-icon">📄</div>
        <div class="skill-title">Other</div>
        <div class="skill-list">
          <span class="skill-item">Adobe Acrobat</span>
          <span class="skill-item">LMS</span>
          <span class="skill-item">MS Office</span>
          <span class="skill-item">Technical Support</span>
          <span class="skill-item">Version Control</span>
        </div>
      </div>
  </section>
</template>

<script setup>
import skills from "../data/skills.js";
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

.skill-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.skill-icon {
  font-size: 2.5rem;
}

.skill-title {
  font-weight: bold;
  margin: 0;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 0.5rem;
}

.skill-item {
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
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
