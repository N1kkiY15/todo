<template>
  <label>
    <p v-if="!model" class="warning-text">Поле не может быть пустым!</p>
    <input
      v-model="model"
      class="form-input"
      type="text"
      placeholder="Например: покормить кошку"
    />
  </label>
</template>

<script setup>
const model = defineModel();
</script>

<style scoped>
.warning-text {
  color: red;
  margin-bottom: 10px;
}
</style>
