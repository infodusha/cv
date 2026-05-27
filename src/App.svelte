<script lang="ts">
  import Bio from "./lib/Bio.svelte";
  import Work from "./lib/Work.svelte";
  import Made from "./lib/Made.svelte";
  import Concepts from "./lib/Concepts.svelte";
  import Etc from "./lib/Etc.svelte";
  import Contact from "./lib/Contact.svelte";
  import ThemeToggle from "./lib/ThemeToggle.svelte";
</script>

<main class="graph">
  <header>
    <div class="title">
      <h1>andrei.karushev</h1>
      <p class="meta">a small personal wiki · last edited {__BUILD_DATE__}</p>
    </div>
    <ThemeToggle />
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
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .title {
    min-width: 0;
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
