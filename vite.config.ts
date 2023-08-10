import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  define: { __API_KEY__: process.env.VITE_API_KEY },
  plugins: [svelte()],
  base: "/apod/",
});
