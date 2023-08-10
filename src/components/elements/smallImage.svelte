<script lang="ts">
  // import Show from "./../pages/Show.svelte";

  import type { Image as ImageType } from "./../../lib/types.d.ts";
  import { img } from "../../lib/stores/selectedImage";

  export let src: string;
  export let date: string;

  let image: ImageType;

  function fetchData() {
    let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
      import.meta.env.VITE_API_KEY
    }&date=${date}`;

    fetch(request).then(async (response) => {
      image = await response.json();
      img.set(image);
      window.location.href = "/#/";
    });
  }
</script>

<div id="smimg">
  <div class="flex justify-center w-full font-strait">
    <p>{date}</p>
  </div>
  <img {src} loading="lazy" alt="a beautiful bitmap" on:dblclick={fetchData} />
</div>

<style>
  #smimg {
    display: flex;
    flex-direction: column;

    margin: 0.5rem;
    width: 10rem;
    aspect-ratio: 3/4;
    height: auto;
    border: 0.1rem solid whitesmoke;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    height: 100%;
  }
</style>
