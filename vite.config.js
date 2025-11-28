// ...existing code...
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
   plugins: [
     legacy({
       targets: ["defaults", "not IE 11"],
     }),
   ],
   // use absolute paths based on this config file location
   root: resolve(__dirname, "."),
   publicDir: resolve(__dirname, "public"),
   build: {
     outDir: resolve(__dirname, "dist"),
     assetsDir: "assets",
     emptyOutDir: true,
     rollupOptions: {
       input: {
         main: resolve(__dirname, "index.html"),
         about: resolve(__dirname, "about.html"),
         contact: resolve(__dirname, "contact.html"),
       },
     },
   },
   server: {
     port: 3000,
     open: true,
   },
   plugins: [
     legacy({
       targets: ["defaults", "not IE 11"],
     }),
     viteStaticCopy({
       targets: [
         {
           src: resolve(__dirname, "public/_headers"),
           dest: "",
         },
       ],
     }),
   ],
 });
 
 // ...existing code...