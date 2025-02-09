<template>
  <div class="card" :class="{ checked: todo.status }">
    <h3>{{ todo.id }}</h3>
    <p>{{ todo.title }}</p>
    <div class="card-blocks">
      <label>
        <input 
          class="visually-hidden" 
          type="checkbox" 
          :checked="todo.status"
          @change="emits('todo-toggle-checked', todo)"
        />
        <span class="pseudo-checkbox"></span>
      </label>
      <button class='button_primary' @click="emits('delete-todo', todo.id)">delete</button>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits(['todo-toggle-checked', 'delete-todo'])
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
}

.visually-hidden { 
    clip: rect (0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
}

.pseudo-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
    cursor: pointer;
}

input[type="checkbox"]:checked + .pseudo-checkbox::after {
  content: "";
  width: 16px;
  height: 16px;
  background-color: rgb(0, 0, 0);
}      

.checked { 
  background-color: rgb(143, 228, 142);
}

.card-blocks { 
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
