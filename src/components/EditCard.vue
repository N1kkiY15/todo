<template>
  <div class="model__container">
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
    <button
      class="card-list__button"
      @click.prevent="editTitle;
        emits('edited-card', localCopy);
        emits('close-edit');"
      type="submit">
      Изменить
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const emits = defineEmits(["close-edit", "edited-card", 'todo-toggle-checked']);

const props = defineProps({
  cardToEdit: {
    type: Object,
    required: true,
  },
});

const localCopy = computed(() => ({ ...props.cardToEdit }));

const editTitle = (value) => {
  localCopy.title = value;
};

</script>

<style scoped>
@import "src\assets\global.css";
</style>
