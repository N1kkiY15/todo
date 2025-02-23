<template>
  <h1>ToDo List</h1>
  <transition-group name="list" tag="ul" class="card-list">
    <AppCard
      v-for="todo in cards"
      v-model="todo.status"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo"
      @edit-todo="editableTodo"
      @toggle-modal="toggleModal"
      @toggle-modal-edit="toggleEditModal"
    />
  </transition-group>
  <BaseButton @click="toggleModal">Добавить задачу</BaseButton>

  <ModalWindow v-model="showModal">
    <CreateCard @create-todo="addTodo" />
  </ModalWindow>

  <ModalWindow v-model="showModalEdit">
    <EditCard :todoToEdit="todoToEdit" @edited-todo="changeTodo" />
  </ModalWindow>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AppCard from "./AppCard.vue";
import CreateCard from "./CreateCard.vue";
import ModalWindow from "./ModalWindow.vue";
import EditCard from "./EditCard.vue";
import BaseButton from "./BaseButton.vue";

const showModal = ref(false);
const showModalEdit = ref(false);

let todoToEdit = ref();

// onMounted(async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();

//   cards.value = data.map((todo) => {
//     return {
//       id: todo.id,
//       title: todo.title,
//       status: todo.completed
//     }
//   });
// });

const cards = ref([
  {
    id: 1,
    title: "Помыть посуду",
    status: false,
  },
  {
    id: 2,
    title: "Сходить к зубному",
    status: false,
  },
  {
    id: 3,
    title: "Покормить кошку",
    status: false,
  },
  {
    id: 4,
    title: "Выбросить мусор",
    status: false,
  },
]);

// defineExpose({ cards }); // ?????????????????????????????????????????????????

const toggleModal = (todo) => {
  showModal.value = !showModal.value;
};

const toggleEditModal = () => {
  showModalEdit.value = !showModalEdit.value;
};

const editableTodo = (todo) => {
  todoToEdit.value = todo;
  toggleEditModal();
};

const deleteTodo = (todoId) => {
  cards.value = cards.value.filter((todo) => todo.id !== todoId);
};

const addTodo = (value) => {
  const newTodo = {
    id: cards.value.length + 1,
    title: value,
    status: false,
  };
  cards.value.push(newTodo);
  toggleModal();
};

const changeTodo = (localCopy) => {
  const originalCardIndex = cards.value.findIndex(
    (card) => card.id === localCopy.id
  );
  if (originalCardIndex !== -1) {
    cards.value[originalCardIndex] = { ...localCopy };
  }
  toggleEditModal();
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  background-color: rgb(166, 166, 195);
  padding: 40px;
  width: 50%;
  border-radius: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>
