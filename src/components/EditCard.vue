<template>
  <div class="modal__container">
    <h2>Редактирование задачи</h2>
    <h3>Название</h3>
    <form class="form">
      <label>
        <input
          class="form-input"
          type="text"
          placeholder="Например: покормить кошку"
          v-model="localCopy.title"
        />
      </label>
    </form>
    <h3>Статус</h3>
    <label>
        <input 
          class="visually-hidden" 
          type="checkbox" 
          v-model="localCopy.status"
        />
        <span class="pseudo-checkbox"></span>
    </label>
    <ButtonPrimary @click.prevent="editTitle; emits('edited-todo', localCopy)" type="submit"> <!-- сделать тока один эмит-->
      Изменить
    </ButtonPrimary>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ButtonPrimary from './ButtonPrimary.vue';
import CustomCheckbox from './CustomCheckbox.vue';
const emits = defineEmits(["close-edit", "edited-todo", 'todo-toggle-checked']);

const props = defineProps({
    todoToEdit: {
    type: Object,
    required: true,
  },
});

const localCopy = computed(() => ({ ...props.todoToEdit }));

const editTitle = (value) => {
  localCopy.title = value;
};

</script>

<style scoped>
</style>
