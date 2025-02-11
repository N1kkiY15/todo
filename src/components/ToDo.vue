<template>
            <h1>ToDo List</h1>
            <div class="card-list">
                <AppCard 
                    v-for="todo in cards" 
                    :key="todo.id" 
                    :todo="todo" 
                    @todo-toggle-checked="toggleChecked"
                    @delete-todo = 'deleteTodo'
                    @edit-card = 'localEditCard'
                    @toggle-model = 'toggleModel'
                    @toggle-model-edit = 'toggleModelEdit'
                />  
            </div>            
            <button class="card-list__button" @click="toggleModel">Добавить задачу</button>
            
             <ModalWindow v-model="showModel">
                <FormCreate @create-todo="addTodo"
                @closeWindow="toggleModel"
                />
             </ModalWindow>

             <ModalWindow v-model="showModelEdit">
                <EditCard 
                :cardToEdit="cardToEdit"
                @close-edit="toggleModelEdit"
                @edited-card="changeCard"
                />
             </ModalWindow>
</template> 
   
<script setup>
import {ref} from 'vue';
import AppCard from './AppCard.vue';
import FormCreate from './FormCreate.vue';
import ModalWindow from './ModalWindow.vue';
import EditCard from './EditCard.vue';

   const showModel = ref(false)
   const showModelEdit = ref(false)

   let cardToEdit = ref(); // изначально была прописан скелет объекта. 

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

   const toggleModel = () => { 
    showModel.value = !showModel.value;
   }

   const toggleModelEdit = () => { 
    showModelEdit.value = !showModelEdit.value;
   }

   const localEditCard = (todo) => { 
    cardToEdit = todo;
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
  

  const changeCard = (localCopy) => { 
    console.log(localCopy)
        if (cards.value.find(card => card.id === localCopy.id)) {
            const originalCardIndex = cards.value.findIndex((card)=> card.id === localCopy.id) 
            cards.value[originalCardIndex] = { ... localCopy }
        }
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
   