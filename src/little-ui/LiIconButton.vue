<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <q-btn flat round color="primary" :icon="icon" class="general-icon-button" />
</template>

<style>
</style>
