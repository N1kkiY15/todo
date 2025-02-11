<template>
        <div class="model__container">
            <h2>Добавь новую задачу!</h2>
            <form class="form">
                <label> 
                    <input 
                    v-model = "value"
                    class='form-input' 
                    type="text" 
                    placeholder="Например: покормить кошку"
                    >
                </label>
            </form>
            <button class='card-list__button' 
                @click.prevent="emits('create-todo', value)" 
                @click="emits('closeWindow')" 
                type="submit">Добавить
            </button>
        </div>
</template>

<script setup>

const emits = defineEmits(['create-todo', 'closeWindow'])
</script>
   
<style scoped>
@import 'src\assets\global.css';
</style>
   