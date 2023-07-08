import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/json-viewer/",
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          codemirror: ["vue-codemirror6", "codemirror"],
          "codemirror-lang": ["@codemirror/lang-json"],
        },
      },
    },
  },
});
