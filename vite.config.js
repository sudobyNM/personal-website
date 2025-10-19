import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "contact.html",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
