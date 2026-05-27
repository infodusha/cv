type Theme = "light" | "dark";

function initial(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let current = $state<Theme>(initial());

function applyDom() {
  document.documentElement.style.colorScheme = current;
}

applyDom();

addEventListener("storage", (e) => {
  if (e.key !== "theme") return;
  if (e.newValue === "light" || e.newValue === "dark") {
    current = e.newValue;
    applyDom();
  }
});

export const theme = {
  get current() {
    return current;
  },
  toggle() {
    current = current === "dark" ? "light" : "dark";
    applyDom();
    localStorage.setItem("theme", current);
  },
};
