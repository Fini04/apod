<script lang="ts">
  import Image from "../elements/Image.svelte";
  import type { Image as ImageType } from "./../../lib/types.d.ts";
  import { img } from "../../lib/stores/selectedImage";

  let image: ImageType = $img;
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
  </article>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
