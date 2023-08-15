<script lang="ts">
  import { img } from "../../lib/stores/selectedImage";
  import Image from "../elements/Image.svelte";
  import { getCurrentDate } from "./../../lib/date";

  function fetchData() {
    let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
      import.meta.env.VITE_API_KEY
    }&date=${$img.date}`;

    fetch(request).then(async (response) => {
      img.set(await response.json());
    });
  }
</script>

<div id="wrapper" class="p-4 m-4 border-double border-4 border-sky-500">
  <article id="apodPicture" class="basis-1/2">
    <div class="card">
      <Image src={$img?.url} hdsrc={$img?.hdurl} />
      Doubleclick to get the full quality image.
    </div>
  </article>
  <article id="apodData" class="basis-1/2">
    <h1 class="mb-1 text-2xl font-strait underline">
      {$img?.title}
    </h1>

    <p class="font-strait">{$img?.explanation}</p>
    <br />
    <p class="italic">{$img?.date}</p>
    <br />

    <label for="dateInput">Date:</label>
    <input
      id="dateInput"
      type="date"
      bind:value={$img.date}
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
    align-items: center;
  }

  #wrapper {
    display: grid;
    grid: "p t";
  }

  @media screen and (max-width: 992px) {
    #wrapper {
      display: grid;
      grid:
        "p"
        "t";
    }
  }
  #apodPicture {
    grid-area: p;

    width: 80%;
    margin: auto;
  }
  #apodData {
    grid-area: t;

    width: 80%;
    margin: auto;
  }
</style>
