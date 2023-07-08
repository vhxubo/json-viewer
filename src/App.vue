<script setup lang="ts">
import { onMounted, ref } from "vue";
import JsonViewer from "./components/JsonViewer.vue";
const value = ref<String>();
</script>

<template>
  <div>
    <json-viewer :value="value"></json-viewer>
  </div>
</template>

<style scoped></style>
