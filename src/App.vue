<script setup lang="ts">
import HomePage from './views/HomePage.vue'
</script>

<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
