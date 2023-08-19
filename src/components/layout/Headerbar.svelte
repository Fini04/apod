<script>
  import { link } from "svelte-spa-router";
</script>

<header class="p-4 m-4 border-double border-4 border-sky-500">
  <h1 class="text-6xl font-bold font-space-mono">Daily Space Images</h1>
  <nav class="">
    <a use:link href="/" class="btn btn-outline btn-primary">Home</a>
    <a use:link href="/Gallary" class="btn btn-outline btn-primary">Gallary</a>
  </nav>
</header>

<style lang="css">
  header {
    display: grid;
    grid: "t n";
  }

  a {
    margin: 0.5rem;
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
