<template>
  <div class="modal__container">
    <h2>Добавь новую задачу!</h2>
    <form class="form" @submit.prevent="emits('create-todo', value)">
      <BaseInput v-model="value" />
      <BaseButton :disabled="!value" type="submit"> Добавить </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const value = ref("");
const emits = defineEmits(["create-todo", "closeWindow"]);
</script>
