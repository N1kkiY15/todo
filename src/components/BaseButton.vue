<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 20px 40px;
  border-radius: 15px;
  cursor: pointer;
  max-width: 500px;
  background-color: rgb(166, 166, 195);
  font-family: arial, sans-serif;
  font-weight: 600;
  font-size: 1rem;
}

.base-button:not(:disabled):hover {
  background-color: rgb(59, 59, 101);
  color: white;
}
</style>
