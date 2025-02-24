<template>
    <div class="details-container">
        <h2>Детали карточки</h2>
        <h4>id карточки: {{ route.params.id }}</h4>
        <AppCard :todo="card" /> 
        <button @click="$router.go(-1)" class="backButton"><</button>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
const route = useRoute()

const card = ref({})

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`);
  const data = await response.json();

  card.value = {
      id: data.id,
      title: data.title,
      status: data.completed
  };

  console.log(data)

});

</script>

<style scoped>
.details-container { 
    width: 400px;
    height: 300px;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 20px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 30px;
}

.backButton { 
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -50px;
    font-size: 20px;
    
}

</style>
