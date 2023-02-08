<script setup lang="ts">
//import LiIconButton from '../little-ui/LiIconButton.vue'
//defineProps<{
//  msg: string
//}>()
</script>

<template>
  <div class="main-menu__container">
    <q-btn flat round color="primary" icon="card_giftcard" class="general-icon-button" />
    <div class="main-menu__plugin-button-list">
    </div>
    <div class="main-menu__main-button-list">
      <q-btn flat round color="primary" icon="card_giftcard" class="general-icon-button" />
      <LiIconButton icon="card_giftcard"></LiIconButton>
      <li-icon-button icon="card_giftcard"></li-icon-button>
    </div>
  </div>
</template>

<style scoped>

.main-menu__container {
  /* width: 100px; */
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.main-menu__plugin-button-list {
  width: 100%;
  flex: 1;

  display: flexbox;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ff0;
}

.main-menu__main-button-list {
  width: 100%;

  display: flexbox;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

</style>
