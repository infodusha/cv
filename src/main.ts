import { mount } from "svelte";
import "./style.css";
import App from "./App.svelte";

const target = document.getElementById("app");

if (!target) {
  throw new Error("Target element #app not found");
}

mount(App, { target });
