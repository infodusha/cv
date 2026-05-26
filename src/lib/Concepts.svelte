<script lang="ts">
  import { concepts } from "../data/concepts";
  import Concept from "./Concept.svelte";

  let counts = $state<Record<string, number>>({});

  $effect(() => {
    requestAnimationFrame(() => {
      const next: Record<string, number> = {};
      for (const el of document.querySelectorAll<HTMLElement>("[data-concept]")) {
        const id = el.dataset.concept!;
        if (id in concepts) next[id] = (next[id] || 0) + 1;
      }
      counts = next;
    });
  });
</script>

<section class="note">
  <h2># concepts</h2>
  <p class="dim">
    Hover a [[wikilink]] anywhere on this page to see every mention. Click to pin and jump to the
    entry.
  </p>
  <ul class="concepts">
    {#each Object.entries(concepts) as [id, c]}
      <Concept {id} concept={c} count={counts[id] ?? 0} />
    {/each}
  </ul>
</section>

<style>
  ul.concepts {
    list-style: none;
    margin: 0.6rem 0 0;
    padding: 0;
  }
</style>
