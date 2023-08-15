<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./components/pages/Main.svelte";
  import Gallary from "./components/pages/Gallary.svelte";
  import About from "./components/pages/About.svelte";
  import Headerbar from "./components/layout/Headerbar.svelte";
  import Footer from "./components/layout/Footer.svelte";

  import { img, imgArray, imgArrayArrived } from "./lib/stores/selectedImage";
  import { getCurrentDate, getCurrentDateMinus } from "./lib/date";

  let fallback = {
    copyright: "error",
    date: "00.00.0000",
    explanation: "Just a cat on a carpet",
    hdurl: "/src/img/fallback.jpg",
    media_type: "error",
    service_version: "error",
    title: "The Black Cat",
    url: "/src/assets/img/fallback.jpg",
  };
  img.set(fallback);
  imgArray.set([fallback]);

  //TODO - Put all the API-request code in extra file
  let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
    import.meta.env.VITE_API_KEY
  }&date=${getCurrentDate()}`;

  fetch(request).then(async (response) => {
    img.set(await response.json());
  });

  let requestArray: string = `https://api.nasa.gov/planetary/apod?&api_key=${
    import.meta.env.VITE_API_KEY
  }&start_date=${getCurrentDateMinus(9)}&end_date=${getCurrentDate()}`;

  fetch(requestArray).then(async (response) => {
    imgArray.set(await response.json());
    imgArrayArrived.set(true);
  });

  if ("serviceworker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
</script>

<div>
  <Headerbar />
  <main>
    <Router
      routes={{
        "/": Home,
        "/Gallary": Gallary,
        "/About": About,
      }}
    />
  </main>
  <!-- <Footer /> -->
</div>

<style>
  div {
    display: grid;
    grid:
      "h"
      "m"
      "f";
  }
  Headerbar {
    grid-area: h;
  }
  main {
    grid-area: m;
  }
  Footer {
    grid-area: f;
  }
</style>
