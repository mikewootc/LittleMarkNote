<script setup lang="ts">
defineProps<{
  title: string,
  content: string,
}>()
</script>

<template>

<div class="li-list-item__container">
  <slot name=left></slot>
  <div class="li-list-item__middle">
    <span class="li-list-item__title">{{ title }}</span>
    <span class="li-list-item__content">{{ content }}</span>
    <slot name="content"></slot>
  </div>
  <slot name=right></slot>
</div>

</template>

<style>
.li-list-item__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.li-list-item__middle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: flex-start; */
}
.li-list-item__title {
  font-size: large;
}

</style>
