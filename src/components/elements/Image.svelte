<script lang="ts">
  export let src: string;
  export let hdsrc: string = src;

  function goToImage() {
    window.open(`${hdsrc}`);
  }
</script>

<img {src} alt="a beautiful bitmap" on:dblclick={goToImage} />

<style>
  img {
    width: 50rem;
    height: auto;
    box-shadow: 0rem 0rem 5rem gray;
    /* opacity: 100%; */
  }
</style>
