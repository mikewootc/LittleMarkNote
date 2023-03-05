<template>
  <q-dialog class="li-modal-base">
    <slot></slot>
  </q-dialog>
</template>

<script setup lang="ts">
defineProps<{
  //text?: string;
}>();
</script>

<style>
.li-modal-base {
  /* background-color: #f0f; */
}
</style>
