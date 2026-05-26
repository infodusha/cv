<script lang="ts">
  import Bio from "./lib/Bio.svelte";
  import Work from "./lib/Work.svelte";
  import Made from "./lib/Made.svelte";
  import Concepts from "./lib/Concepts.svelte";
  import Etc from "./lib/Etc.svelte";
  import Contact from "./lib/Contact.svelte";
</script>

<main class="graph">
  <header>
    <h1>andrei.karushev</h1>
    <p class="meta">a small personal wiki · last edited {__BUILD_DATE__}</p>
  </header>

  <Bio />
  <Work />
  <Made />
  <Concepts />
  <Etc />
  <Contact />
</main>

<style>
  header {
    margin-bottom: 3rem;
  }
  header h1 {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: 0;
  }
  .meta {
    font-size: 0.74rem;
    color: var(--dim);
    margin: 0.2rem 0 0;
  }
</style>
