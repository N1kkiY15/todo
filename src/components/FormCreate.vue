<template>
    <div class="container form-container" :class="{active: act}">
        
        <h2>Добавь новую задачу!</h2>
        <form class="form">
            <label> 
                <input 
                class='form-input' 
                type="text" 
                placeholder="Например: покормить кошку"
                v-model = "value">
            </label>
            <button prevent class='card-list__button' @click.prevent="emits('create-todo', value)" type="submit">Добавить</button>
        </form>
    </div>
</template>
смотри видео про пропсы мб там есть про модальные окна
<script setup>
import {ref} from 'vue';

const value = ref('')
const emits = defineEmits(['create-todo'])
</script>
   
<style scoped>
@import 'src\assets\global.css';

.form { 
    display: flex;
    flex-direction: column;
    width: 100%;    
    gap: 20px;
    justify-content: center;
}

.form-container {
    background-color: rgb(143, 228, 142);
    max-width: 600px;
    border-radius: 15px;
}

.form-input { 
    padding: 10px 20px;
    border-radius: 15px;
    width: 100%;
}

</style>
   