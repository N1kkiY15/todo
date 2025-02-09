<template>
            <h1>ToDo List</h1>
            <div class="card-list">
                <AppCard 
                    v-for="todo in cards" 
                    :todo="todo" 
                    :key="todo.id" 
                    @todo-toggle-checked="toggleChecked"
                    @delete-todo = 'deleteTodo'
                />  <!--:todo="todo"  что это + @ -->
            </div>
            <button class="card-list__button" @click="emits()">Добавить задачу</button>
            <FormCreate @create-todo="addTodo"/>
</template> 
   
<script setup>
import {ref} from 'vue';
import AppCard from './AppCard.vue';
import FormCreate from './FormCreate.vue';

const emits = defineEmits(['todo-toggle-checked'])

    let FormStatus = ref(false)

   const cards = ref([
    { 
        id: 1,
        title: 'Помыть посуду',
        status: false,
    }, 
    { 
        id: 2,
        title: 'Сходить к зубному',
        status: false,
    }, 
    { 
        id: 3,
        title: 'Покормить кошку',
        status: false,
    }, 
    { 
        id: 4,
        title: 'Выбросить мусор',
        status: false,
    }, 

   ])

   const toggleChecked = (todo) => {
        todo.status = !todo.status
   }

   const deleteTodo = (todoId) => { 
        cards.value = cards.value.filter((todo) => todo.id !== todoId)
   }

   const addTodo = (value) => { 
    const newTodo = { 
        id:  cards.value.length + 1,
        title: value, 
        status: false,
    }
    cards.value.push(newTodo)
  }


</script>
   
<style scoped>
@import 'src\assets\global.css';
                
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
</style>
   