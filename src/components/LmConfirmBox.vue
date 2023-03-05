<!-- Confirm box with title and confirm /cancel button, but without popup modal -->
<template>
  <div class="lm-confirm-box" style="max-width: 85vw">
    <lm-title-bar v-if="title" :title="title || ''"></lm-title-bar>
    <div class="lm-confirm-box-content">
      <slot></slot>
    </div>
    <div class="lm-confirm-box-bottom">
      <li-button class="lm-confirm-box-bottom-btn" :label="$t('buttonLabel.confirm')" @click="$emit('onConfirm')"></li-button>
      <li-button class="lm-confirm-box-bottom-btn" :label="$t('buttonLabel.cancel')" @click="$emit('onCancel')"></li-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
// @ts-ignore
import Logger from 'cpclog';
import logoUrl from '@/assets/images/logo_unicorn_color.svg';
import LmTitleBar from './LmTitleBar.vue';

const logger = Logger.createWrapper('MyFilleSelector', Logger.LEVEL_DEBUG);

defineProps<{
  title?: string;
}>();

onMounted(async () => {
  try {
  } catch (error) {
    logger.error('error:', error);
    throw error;
  }
});
</script>

<style scoped>
.lm-confirm-box {
  width: 800px;
  /* max-width: 90vw; */
  height: 650px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.lm-confirm-box-content {
  flex: 1;

  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.lm-confirm-box-bottom {
  height: 60px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.lm-confirm-box-bottom-btn {
  width: 100px;
  margin-left: 10px;
}
</style>
