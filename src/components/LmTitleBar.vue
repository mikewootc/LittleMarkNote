<!-- Open/Create vaults -->
<template>
  <div class="lm-title-bar">
    <li-icon-svg :srcUrl="logoUrl" style="width: 32px; height: 32px; margin: 4px" fill="white"></li-icon-svg>
    <span style="color: white">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
// @ts-ignore
import Logger from 'cpclog';
import logoUrl from '@/assets/images/logo_unicorn_color.svg';

const logger = Logger.createWrapper('LmTitleBar', Logger.LEVEL_DEBUG);

defineProps<{
  title: string
}>()

onMounted(async () => {
  try {
  } catch (error) {
    logger.error('error:', error);
    throw error;
  }
});

</script>

<style scoped>
.lm-title-bar {
  width: 100%;
  height: 40px;
  background-color: #007acc;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
