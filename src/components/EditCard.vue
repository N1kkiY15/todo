<template>
  <div class="modal__container">
    <h2>Редактирование задачи</h2>
    <h3>Название</h3>
    <form class="form" @submit.prevent="editTitle">
      <BaseInput v-model="localCopy.title" />
      <h3>Статус</h3>
      <baseCheckbox v-model="localCopy.status" />
      <p v-if="localCopy.status">Выполнено</p>
      <p v-else>Не выполнено((</p>
      <BaseButton :disabled="!localCopy.title" type="submit">Изменить</BaseButton>
    </form>
  </div>
</template>

<script setup>
import { toRef, ref, computed } from "vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import baseCheckbox from "./BaseCheckbox.vue";
const emits = defineEmits(["close-edit", "edited-todo"]);

const props = defineProps({
  todoToEdit: {
    type: Object,
    required: true,
  },
});

// const localCopy = computed(() => ({ ...props.todoToEdit }));

const local = JSON.parse(JSON.stringify(props.todoToEdit));

const localCopy = toRef(local);
console.log(localCopy);

const editTitle = () => {
  emits("edited-todo", localCopy.value);
};
</script>
