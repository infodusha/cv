<script lang="ts">
  import { theme } from "./theme.svelte";
</script>

<button
  class="toggle"
  type="button"
  aria-label="Toggle theme"
  aria-pressed={theme.current === "dark"}
  title="theme: {theme.current}"
  onclick={() => theme.toggle()}
>
  {#if theme.current === "dark"}
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <line x1="12" y1="2.5" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="21.5" />
        <line x1="2.5" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="21.5" y2="12" />
        <line x1="5.2" y1="5.2" x2="7" y2="7" />
        <line x1="17" y1="17" x2="18.8" y2="18.8" />
        <line x1="5.2" y1="18.8" x2="7" y2="17" />
        <line x1="17" y1="7" x2="18.8" y2="5.2" />
      </g>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor" />
    </svg>
  {/if}
</button>

<style>
  .toggle {
    flex: none;
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--dim);
    border: 1px solid var(--rule);
    border-radius: 4px;
    background: var(--paper);
    transition:
      color 0.15s ease,
      border-color 0.15s ease;
  }
  .toggle:hover {
    color: var(--ink);
    border-color: var(--ink);
  }
</style>
