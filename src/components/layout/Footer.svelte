<script>
  import { img, imgArray } from "../../lib/stores/selectedImage";
  function Share() {
    navigator.share({
      title: $img.title,
      url: $img.url,
      text: $img.explanation,
    });
  }
</script>

<footer class="p-4 m-4 border-double border-4 border-sky-500">
  <h1>Share</h1>
  <button class="btn" on:click={Share}>Share</button>
</footer>
