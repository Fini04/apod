<script>
  import { link } from "svelte-spa-router";
</script>

<header class="p-4 m-4 border-double border-4 border-sky-500">
  <h1 class="text-6xl font-bold font-space-mono">Daily Astronomy Images</h1>
  <nav class="">
    <a use:link href="/Gallary" class="btn">Gallary</a>
    <a use:link href="/" class="btn">Home</a>
  </nav>
</header>

<style lang="css">
  header {
    display: grid;
    grid: "t n";
  }

  h1 {
    grid-area: t;
    /* margin-bottom: 1.5rem; */
  }

  @media screen and (max-width: 992px) {
    header {
      display: grid;
      grid:
        "t"
        "n";
    }

    nav {
      grid-area: n;

      margin: auto;
    }

    h1 {
      /* grid-area: t; */
      margin-bottom: 1.5rem;
    }
  }

  nav {
    grid-area: n;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
