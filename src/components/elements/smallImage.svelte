<script lang="ts">
  export let src: string;
  export let date: string;
  export let hdsrc: string = src;

  function goToImage() {
    window.open(`${hdsrc}`);
  }
</script>

<div id="smimg">
  <div class="flex justify-center w-full font-strait">
    <p>{date}</p>
  </div>
  <img {src} alt="a beautiful bitmap" on:dblclick={goToImage} />
</div>

<style>
  #smimg {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

    margin: 0.5rem;
    width: 10rem;
    aspect-ratio: 3/4;
    height: auto;
    /* box-shadow: 0rem 0rem 5rem gray; */
    /* opacity: 100%; */
    border: 0.1rem solid whitesmoke;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    height: 100%;
  }
</style>
