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
import { ref, onMounted, nextTick } from "vue";
import { json } from "@codemirror/lang-json";
import CodeMirror from "vue-codemirror6";

const value = ref<string>(``);
const func = (val: string) => new Function("return " + val)();
onMounted(async () => {
  await nextTick();
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read" as PermissionName,
    });
    if (permission.state === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }
    const text = await navigator.clipboard.readText();
    let data = func(text);
    if (typeof data === "string") {
      data = JSONParse(data);
    }
    const resetData = deepReset(data);
    value.value = JSON.stringify(resetData, null, 2);
  } catch (error) {
    alert(error);
  }
});
const JSONParse = (value: string) => {
  if (value && typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
  return value;
};
const deepReset = (data: any) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && typeof value === "object") {
      // console.log(key, value);
      return deepReset(value);
    } else if (typeof value === "string") {
      if (
        (value.startsWith("{") && value.endsWith("}")) ||
        (value.startsWith("[") && value.endsWith("]"))
      ) {
        value = JSONParse(value);
        // console.log(value);
        data[key] = value;
        // console.log(key, value, "ee");
        return deepReset(value);
      }
    }
  });
  return data;
};
</script>
<style>
.code-mirror,
.code-mirror .cm-editor {
  height: 100%;
}
</style>
