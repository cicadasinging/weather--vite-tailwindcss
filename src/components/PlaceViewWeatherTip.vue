<template>
  <p v-show="placesStore.preview" class="w-full p-4 text-center text-sm underline decoration-dotted">
    You are currently previewing this city, click the "+" icon to start tracking this city, or click the "x" icon to
    close this city.
  </p>
</template>

<script setup>
const placesStore = usePlacesStore();
</script>
