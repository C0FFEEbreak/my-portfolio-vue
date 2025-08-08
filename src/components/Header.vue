<template>
  <header>
    <header class="site-header">
      <h1>Donica</h1>
      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </header>
</template>

<script setup>
const navLinks = [
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Portfolio", url: "#portfolio" },
  { name: "Education", url: "#educatiom" },
];
</script>

<style scoped>
header {
  background-color: #888;
}
.site-header {
  display: flex;
  justify-content: space-between; /* pushes items to edges */
  align-items: center; /* vertically centers items */
  padding: 1rem;
}
.site-header h1 {
  margin: 0; /* removes default margin */
}
.site-header nav ul {
  display: flex; /* horizontal list */
  list-style: none; /* removes bullets */
  margin: 0;
  padding: 0;
  gap: 2rem; /* space between links */
}
.site-header nav ul li a {
  text-decoration: none;
  color: inherit;
}

/* Responsive grid layout for smaller screens */
@media (max-width: 768px) {
.site-header nav ul {
  grid-row: 2;
  grid-column: 1 / -1;
  
  display: grid;
  grid-auto-flow: column;      /* place items in a row */
  grid-auto-columns: 1fr;      /* each <li> takes equal fraction */
  justify-content: stretch;    /* stretch across full width */
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;                      /* no gaps, since items evenly spaced */
}

.site-header nav ul li a {
  display: block;
  text-align: center;          /* center text inside each nav item */
  padding: 0.5rem 0;
  color: inherit;
  text-decoration: none;
}
}



@media (max-width: 500px) {
  .site-header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
    padding: 1rem;
  }

  .site-header h1 {
    grid-column: 1 / -1; /* full width */
  }

  .site-header nav ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* two equal columns */
    gap: 0 3rem; /* 3rem gap between columns */
    padding: 0;
    margin: 0;
    justify-content: stretch; /* stretch columns to fill */
  }

  .site-header nav ul li {
    /* optional: to left-align text inside each column */
    text-align: left;
  }

  .site-header nav ul li a {
    display: block;
    padding: 0.5rem 0;
    width: 100%;
    color: inherit;
    text-decoration: none;
  }
}

</style>
