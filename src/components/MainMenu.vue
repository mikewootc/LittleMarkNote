<script setup lang="ts">
import { ref } from 'vue';
import TheStarter from './TheStarter.vue';
//import LiIconButton from '../little-ui/LiIconButton.vue'
//defineProps<{
//  msg: string
//}>()
const isShowStarter = ref(false);
</script>

<template>
  <div class="main-menu__container">
    <q-btn flat round color="primary" icon="card_giftcard" class="general-icon-button" />
    <div class="main-menu__plugin-button-list"></div>
    <div class="main-menu__main-button-list">
      <li-icon-button icon="import_contacts" @click="isShowStarter = true"></li-icon-button>
      <li-icon-button icon="settings"></li-icon-button>
    </div>

    <!-- Open/Create vaults -->
    <q-dialog v-model="isShowStarter" class="starter__dialog">
      <TheStarter></TheStarter>
    </q-dialog>
    <!-- 
    <q-dialog :modelValue="true" class="starter__dialog">
      <lm-confirm-box title="Input dir name">
        <slot></slot>
      </lm-confirm-box>
    </q-dialog> -->
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
  /* background-color: #ff0; */
}

.main-menu__plugin-button-list {
  width: 100%;
  flex: 1;

  display: flexbox;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main-menu__main-button-list {
  width: 100%;

  display: flexbox;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.starter__dialog {
  /* max-width: 90vw; */
}
</style>
