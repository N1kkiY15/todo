<template>
    <div class="details-container">
        <h2>Детали карточки</h2>
        <h4>id карточки: {{ route.params.id }}</h4>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

// import cards from '@/components/ToDo.vue';
// console.log(cards[1])

</script>

<style scoped>
.details-container { 
    width: 400px;
    height: 300px;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 30px;
}

</style>
