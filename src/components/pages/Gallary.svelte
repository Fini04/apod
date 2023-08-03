<script lang="ts">
  import SmallImage from "../elements/smallImage.svelte";
  import Image from "../elements/smallImage.svelte";
  import { getCurrentDate, getCurrentDateMinus } from "./../../lib/date";
  import type { Image as ImageType } from "./../../lib/types.d.ts";

  import { get_current_component } from "svelte/internal";

  let selectedDate = getCurrentDate();

  let image: ImageType;
  let url: string;

  let startdate = getCurrentDateMinus();
  let enddate = getCurrentDate();

  let item;

  function removeChildElements() {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }

  function fetchData() {
    let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
      import.meta.env.VITE_API_KEY
    }&start_date=${startdate}&end_date=${enddate}`;

    fetch(request).then(async (response) => {
      image = await response.json();
      url = image[0].url;

      for (let index = 0; index < Object.keys(image).length; index++) {
        const element = new Image({
          target: document.getElementById("gallary"),
          props: {
            src: image?.[index]?.url,
            date: image?.[index]?.date,
          },
        });
      }
    });
  }
  fetchData();
</script>

<div id="wrapper" class="p-4 m-4 border-double border-4 border-sky-500">
  <div id="gallary" bind:this={item} class="flex flex-row flex-wrap" />
  <div>
    <label for="startDate">start</label>
    <input
      id="startDate"
      type="date"
      bind:value={startdate}
      max={getCurrentDate()}
      min="1995-06-16"
    />

    <label for="endDate">end</label>
    <input
      id="endDate"
      type="date"
      bind:value={enddate}
      max={getCurrentDate()}
      min="1995-06-16"
    />
    <button
      class="btn"
      on:click={() => {
        removeChildElements();
        fetchData();
      }}>Save</button
    >
  </div>
</div>
