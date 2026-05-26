<script lang="ts">
  import type { Concept } from "../data/concepts";

  const { id, concept, count }: { id: string; concept: Concept; count: number } = $props();

  const css = $derived(`
    main.graph:has(.link[data-concept="${id}"]:hover) .link[data-concept="${id}"],
    main.graph:has(#${id}:target) .link[data-concept="${id}"] {
      background: var(--hot-bg);
      color: var(--ink);
      opacity: 1;
    }
    main.graph:has(.link[data-concept="${id}"]:hover) #${id} {
      background: var(--hot-bg-soft);
      margin: 0 -0.6rem;
      padding: 0.7rem 0.6rem;
    }
    main.graph:has(#${id}:target) .link:not([data-concept="${id}"]) {
      opacity: 0.35;
    }
  `);
</script>

<svelte:head>
  {@html `<style>${css}</style>`}
</svelte:head>

<li {id}>
  <span class="cid">[[{concept.label}]]</span>
  <span class="cnt">{count}↩</span>
  <p>{concept.blurb}</p>
</li>

<style>
  li {
    scroll-margin-top: 40vh;
    border-top: 1px solid var(--rule);
    padding: 0.7rem 0;
    transition: background 0.2s ease;
  }
  li:target {
    background: var(--hot-bg-soft);
    margin: 0 -0.6rem;
    padding: 0.7rem 0.6rem;
  }
  .cid {
    color: var(--link);
    margin-right: 0.4rem;
  }
  .cnt {
    font-size: 0.72rem;
    color: var(--dim);
  }
  p {
    margin: 0.2rem 0 0;
    color: var(--dim);
    font-size: 0.84rem;
  }
</style>
