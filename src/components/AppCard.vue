<template>
  <div class="card" :class="{ checked: todo.status }">
    <BaseCheckbox v-model="todo.status" />
     <router-link :to="`/todo/${todo.id}`"><p>{{ todo.title }}</p></router-link> <!-- так можно? -->
    <div class="card-blocks">
      <button
        class="button button-edit"
        @click="emits('edit-todo', todo)"></button>
      <button
        class="button button-close"
        @click="emits('delete-todo', todo.id)"></button>
    </div>
  </div>
</template>

<script setup>
import BaseCheckbox from "./BaseCheckbox.vue";

const emits = defineEmits(["delete-todo", "edit-todo", "toggle-modal-edit"]);
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: inherit;
  transition: 0.5s;
}

.card p {
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
  overflow: hidden;
}

.card-blocks {
  display: flex;
  align-items: center;
  gap: 20px;
}

.checked {
  background-color: rgb(143, 228, 142);
  transition: 0.5s;
}
</style>
