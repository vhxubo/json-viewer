import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         codemirror: [
  //           "vue-codemirror6",
  //           "codemirror",
  //           // "@codemirror/autocomplete",
  //           // "@codemirror/commands",
  //           // "@codemirror/language",
  //           // "@codemirror/lint",
  //           // "@codemirror/search",
  //           // "@codemirror/state",
  //           // "@codemirror/view",
  //         ],
  //         "codemirror-lang": [
  //           "@codemirror/lang-json",
  //           // "@codemirror/lang-html",
  //           // "@codemirror/lang-javascript",
  //           // "@codemirror/lang-markdown",
  //         ],
  //       },
  //     },
  //   },
  // },
});
