<script lang="ts">
  import ConceptLink from "../ConceptLink.svelte";

  const openSource = [
    {
      name: "aldrin",
      description: "A frontend framework that runs on the server side.",
      url: "https://github.com/infodusha/aldrin",
    },
    {
      name: "define-html",
      description: "A frontend framework for simple projects.",
      url: "https://github.com/infodusha/define-html",
    },
    {
      name: "from-protobuf-object",
      description: "A type-safe helper for grpc-web.",
      url: "https://github.com/infodusha/from-protobuf-object",
    },
    {
      name: "prefont",
      description:
        "Pre-measure font character widths in the browser, compute text widths anywhere.",
      url: "https://github.com/infodusha/prefont",
    },
    {
      name: "arctics-status",
      description: "System tray app for SteelSeries Arctis headset battery and status.",
      url: "https://github.com/infodusha/arctics-status",
    },
    {
      name: "mds",
      description: "Unofficial PWA for the radio show.",
      url: "https://github.com/infodusha/mds",
    },
    {
      name: "grid-drawing",
      description: "A web app for graphical dictation exercises.",
      url: "https://github.com/infodusha/grid-drawing",
    },
  ];
</script>

<section class="note">
  <h2># made</h2>
  <p>
    <ConceptLink id="open-source" />
    —
    <ConceptLink id="frameworks" />, utilities, and small apps. Two web frameworks, a grpc-web
    helper, a font-width measurer, plus a few apps.
  </p>
  <ul class="linklist">
    {#each openSource as p}
      <li>
        <a href={p.url} target="_blank" rel="noopener">{p.name}</a>
        <span class="dim">— {p.description}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  li {
    margin: 0.2rem 0;
  }
</style>
