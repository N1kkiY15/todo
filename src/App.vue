<template>
  <body>
    <header class="header">
      <div class="header__container">
        <router-link to="/todo" class="header__link">Список</router-link>
        <router-link :to="{ name: 'main' }" class="header__link">Секрет</router-link>
        <router-link :to="{ name: 'store' }" class="header__link">Store</router-link>
      </div>
    </header>

    <RouterView />

    <footer class="footer">
      <p>Pizdec Interesno</p>
      <p>All rights reserved</p>
    </footer>
  </body>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

header {
  transition: (1s) ease;
}

.header__container {
  padding: 30px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  margin: auto;
  text-transform: uppercase;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.header__link {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
  transition: 0.5s;
}

.header__link:hover {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transform: scale(1.5);
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 50px;
  background-color: rgb(79, 53, 172);
  color: white;
  margin-top: 100px;
}
</style>
