<script lang="ts">
  import ThemeToggle from "../ThemeToggle.svelte";
</script>

<header>
  <div class="title">
    <h1>andrei.karushev</h1>
    <p class="meta">personal wiki · edited {__BUILD_DATE__}</p>
  </div>
  <ThemeToggle />
</header>

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
