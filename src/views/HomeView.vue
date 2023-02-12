<script setup lang="ts">
import MainMenu from '../components/MainMenu.vue'
</script>

<template>
  <div class="home__container">
    <MainMenu class="home__main-menu" />
  </div>
</template>

<style>
.home__container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* background-color: #224466; */
}

.general-icon-button {
  /* background-color: #cc5599; */
}
</style>
