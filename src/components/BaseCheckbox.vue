<template>
  <label>
    <input 
    v-model="model" 
    class="visually-hidden" 
    type="checkbox" />
    <span class="pseudo-checkbox" />
  </label>
</template>

<script setup>
const model = defineModel();
</script>

<style scoped></style>
