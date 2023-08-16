<script lang="ts">
  import { onMount } from "svelte";
  import SmallImage from "../elements/smallImage.svelte";
  import { getCurrentDate, getCurrentDateMinus } from "./../../lib/date";
  import { imgArray, imgArrayArrived } from "../../lib/stores/selectedImage";

  let startdate = getCurrentDateMinus(9);
  let enddate = getCurrentDate();

  let item;
  function removeChildElements() {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }

  onMount(() => {
    renderImages();
  });

  setInterval(test, 1000);
  function test() {
    if ($imgArrayArrived) renderImages();
    $imgArrayArrived = false;
  }

  export function renderImages() {
    removeChildElements();
    for (let index = Object.keys($imgArray).length - 1; index >= 0; index--) {
      // if ($imgArray[0].date === "00.00.0000") return;
      new SmallImage({
        target: document.querySelector("#gallary"),
        props: {
          src: $imgArray?.[index]?.url,
          date: $imgArray?.[index]?.date,
        },
      });
    }
  }

  function fetchData() {
    let request: string = `https://api.nasa.gov/planetary/apod?&api_key=${
      import.meta.env.VITE_API_KEY
    }&start_date=${startdate}&end_date=${enddate}`;

    fetch(request).then(async (response) => {
      imgArray.set(await response.json());

      removeChildElements();
      renderImages();
    });
  }
</script>

<div id="wrapper" class="p-4 m-4 border-double border-4 border-sky-500">
  <div
    id="gallary"
    bind:this={item}
    class="flex flex-row justify-center flex-wrap"
  />
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
      class="btn btn-outline btn-secondary"
      on:click={() => {
        fetchData();
      }}>Save</button
    >
  </div>
</div>
