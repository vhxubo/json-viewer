<template>
  <code-mirror
    class="code-mirror"
    basic
    :lang="json()"
    readonly
    v-model="value"
  >
  </code-mirror>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import CodeMirror from "vue-codemirror6";

const value = ref(``);
const func = (val) => new Function("return " + val)();
onMounted(async () => {
  const text = await navigator.clipboard.readText();
  let data = func(text);
  if (typeof data === "string") {
    data = JSONParse(data);
  }
  const resetData = deepReset(data);
  value.value = JSON.stringify(resetData, null, 2);
});
const JSONParse = (value) => {
  if (value && typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
  return value;
};
const deepReset = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && typeof value === "object") {
      console.log(key, value);
      return deepReset(value);
    } else if (typeof value === "string") {
      if (
        (value.startsWith("{") && value.endsWith("}")) ||
        (value.startsWith("[") && value.endsWith("]"))
      ) {
        value = JSONParse(value);
        console.log(value);
        data[key] = value;
        console.log(key, value, "ee");
        return deepReset(value);
      }
    }
  });
  return data;
};
</script>
<style>
.code-mirror {
  height: 100%;
}
</style>
