<template>
    <transition name="fade">
        <div v-if="model" class="blur-container">
            <div class="model">
                <button class="button button-close" @click="() => {model = false}"></button>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
const model = defineModel() // ???

</script>

<style scoped>

.model { 
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    margin: auto;
    padding: 20px;
    min-width: 400px;
    background-color: rgb(143, 228, 142);
    border-radius: 15px;
    border: 1px solid black;
}

span { 
    display: flex;
    justify-content: end;
}

</style>