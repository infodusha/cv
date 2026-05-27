<script lang="ts">
  import { concepts } from "./data/concepts";

  const { id }: { id: keyof typeof concepts } = $props();

  function onclick(e: MouseEvent) {
    if (location.hash === `#${id}`) {
      e.preventDefault();
      location.hash = "";
      history.replaceState(null, "", location.pathname + location.search);
    }
  }
</script>

<a class="link" data-concept={id} href={`#${id}`} {onclick}>
  [[<span class="label">{concepts[id].label.replaceAll(" ", " ")}</span>]]
</a>

<style>
  .link {
    display: inline;
    font: inherit;
    color: var(--link);
    padding: 0.05em 0.15em;
    border-radius: 2px;
    transition:
      background 0.15s ease,
      color 0.15s ease;
    text-align: left;
    line-height: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  .label {
    text-decoration: underline;
  }
  .link:hover {
    background: var(--link-bg);
  }
  :global(main.graph:has(.link:hover)) .link {
    opacity: 0.35;
  }
</style>
