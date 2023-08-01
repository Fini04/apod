<script lang="ts">
  import Image from "../elements/Image.svelte";
  import { getCurrentDate } from "./../../lib/date";
  import type { Image as ImageType } from "./../../lib/types.d.ts";

  let selectedDate = getCurrentDate();

  let image: ImageType;

  function fetchData() {
    let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
      import.meta.env.VITE_API_KEY
    }&date=${selectedDate}`;

    fetch(request).then(async (response) => {
      image = await response.json();
    });
  }
  fetchData();
</script>

<div
  id="wrapper"
  class="p-4 m-4 flex justify-between items-center border-double border-4 border-sky-500"
>
  <article class="basis-1/2">
    <div class="card">
      <Image src={image?.url} hdsrc={image?.hdurl} />
      Doubleclick to get the full quality image.
    </div>
  </article>
  <article class="basis-1/2">
    <h1 class="mb-1 text-2xl font-strait underline">
      {image?.title}
    </h1>
    <p class="font-strait">{image?.explanation}</p>
    <br />
    <h5 class="italic">{image?.date}</h5>
    <br />
    <input
      id="dateInput"
      type="date"
      bind:value={selectedDate}
      max={getCurrentDate()}
      min="1995-06-16"
      on:change={fetchData}
    />
  </article>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  /* 
  article {
    border: solid 0.1rem white;
    padding: 1rem;
  } */
</style>
