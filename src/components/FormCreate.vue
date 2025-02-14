<template>
        <div class="modal__container">
            <h2>Добавь новую задачу!</h2>
            <form class="form">
                <input 
                v-model = value
                class='form-input' 
                type="text" 
                placeholder="Например: покормить кошку">
            </form>
            <ButtonPrimary :disabled=!value @click.prevent="emits('create-todo', value)" type="submit"> <!-- сделать тока один эмит-->
                Добавить
            </ButtonPrimary>
        </div>
</template>

<script setup>
import {ref} from 'vue';
import ButtonPrimary from './ButtonPrimary.vue';

const value = ref('')
const emits = defineEmits(['create-todo', 'closeWindow'])
</script>
   
<style scoped>

</style>
   