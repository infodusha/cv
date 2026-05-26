export interface Concept {
  label: string;
  blurb: string;
}

export const concepts: Record<string, Concept> = {
  "self-taught": {
    label: "self-taught",
    blurb: "The Moscow Aviation Institute provided the room; the rest was reading.",
  },
  architecture: {
    label: "architecture",
    blurb: "The work I keep coming back to. Most bugs are architecture in disguise.",
  },
  "design-systems": {
    label: "design systems",
    blurb: "A shared vocabulary for teams that have stopped enjoying their own UI.",
  },
  "ui-library": {
    label: "UI library",
    blurb: "Built one at three different companies. Each one taught me to build the next.",
  },
  exchange: {
    label: "exchange",
    blurb: "Two of them — metals at ETERNYZE, real-world assets at ATME. The domain rewards rigor.",
  },
  mentoring: {
    label: "mentoring",
    blurb: "Easier to teach than to debug a person.",
  },
  "code-review": {
    label: "code review",
    blurb: "The cheapest place to fix a design decision.",
  },
  testing: {
    label: "testing",
    blurb: "Cheap insurance against tomorrow’s self.",
  },
  frameworks: {
    label: "frameworks",
    blurb: "Wrote two of my own — aldrin (SSR), define-html (small).",
  },
  react: {
    label: "React",
    blurb: "The lingua franca; not always the right language.",
  },
  angular: {
    label: "Angular",
    blurb: "Two exchanges, four years. It enforces shape.",
  },
  typescript: {
    label: "TypeScript",
    blurb: "A type system that pays rent.",
  },
  nextjs: {
    label: "Next.js",
    blurb: "Where the frontend remembered the server existed.",
  },
  node: {
    label: "Node.js",
    blurb: "The other half of the stack I keep coming back to.",
  },
  legacy: {
    label: "legacy",
    blurb: "Working software that outlasted its authors. Not pejorative.",
  },
  bottleneck: {
    label: "the bottleneck",
    blurb:
      "Development was never the bottleneck. Integration, architecture, and figuring out which features matter — that is the work.",
  },
  docs: {
    label: "design docs",
    blurb: "Writing forces a decision; the doc is the artifact of the thought.",
  },
  "open-source": {
    label: "open source",
    blurb: "Unsanctioned work. Written on weekends, defended on principle.",
  },
};
