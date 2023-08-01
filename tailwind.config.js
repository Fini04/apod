/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        strait: ["Strait"],
        "space-mono": ["Space Mono", "bold"],
      },
    },
  },
  plugins: [require("daisyui")],
};
