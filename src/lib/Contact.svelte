<script lang="ts">
  const contacts = [
    {
      label: "github",
      value: "infodusha",
      href: "https://github.com/infodusha",
    },
    {
      label: "linkedin",
      value: "infodusha",
      href: "https://www.linkedin.com/in/infodusha/",
    },
  ];
</script>

<section class="note">
  <h2># contact</h2>
  <ul class="linklist">
    {#each contacts as c}
      <li>
        <span class="dim key">{c.label}</span> ·
        <a href={c.href} target="_blank" rel="noopener">{c.value}</a>
      </li>
    {/each}
  </ul>
</section>

<style>
  li {
    margin: 0.1rem 0;
  }
</style>
