<template> 
    <h1>My store</h1>
    <p>Count: {{ store.count }}</p>
    <p>DoubleCount: {{ store.doubleCount }}</p>
    <button @click="store.increment">+1</button>

</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()

</script>

<style scoped>

</style>