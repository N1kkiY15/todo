<template>
  <div class="card" :class="{ checked: todo.status }">
    <label>
        <input 
          class="visually-hidden" 
          type="checkbox" 
          :checked="todo.status"
          @change="emits('todo-toggle-checked', todo)"
        />
        <span class="pseudo-checkbox"></span>
      </label>
    <p>{{ todo.title }}</p>
    <div class="card-blocks">
      <button class='button button-edit' @click="emits('edit-card', todo); emits('toggle-model-edit')"></button>
      <button class='button button-close' @click="emits('delete-todo', todo.id)"></button>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits(['todo-toggle-checked', 'delete-todo', 'edit-card', 'toggle-model-edit'])
const props = defineProps({ 
  todo: { 
    type: Object, 
    required: true,
  },
})

</script>

<style scoped>

@import 'src\assets\global.css';

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

.card-blocks { 
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
