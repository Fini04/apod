<script lang="ts">
  import Router, { location, link } from "svelte-spa-router";
  import Home from "./components/pages/Main.svelte";
  import Gallary from "./components/pages/Gallary.svelte";
  import About from "./components/pages/About.svelte";
  import Headerbar from "./components/layout/Headerbar.svelte";
</script>

<main class="h-screen flex flex-col">
  <Headerbar />

  <Router
    routes={{
      "/": Home,
      "/Gallary": Gallary,
      "/About": About,
    }}
  />
</main>
