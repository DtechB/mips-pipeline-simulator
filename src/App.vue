<template>
  <div>
    <h1 class="text-3xl font-bold underline text-blue-500">Hello world!</h1>
    <div
      class="fixed bottom-0 flex justify-center xl:justify-between w-full text-black bg-blue-200 p-1"
    >
      <p>{{ time }}</p>
      <div class="flex items-center">
        Copyright © 2024 DtechB -
        <img src="/src/assets/images/logo.png" alt="" class="w-10" /> Danial
        Bayati
        <span class="icon-[bi--memory]"></span>
      </div>
      <p>version 1.0.0</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const time = ref("");

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>
