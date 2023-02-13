<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
}>()
</script>

<template>

<div class="li-list-item__container">
  <slot name=left></slot>

  <div class="li-list-item__middle">
    <span class="li-list-item__title">{{ title }}</span>
    <span class="li-list-item__description">{{ description }}</span>
  </div>

  <slot name=right></slot>
</div>

</template>

<style>
.li-list-item__container {
  margin-bottom: 5px;
  padding-bottom: 5px;

  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgray;
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
  /* font-size: large; */
}

.li-list-item__description {
  font-size: small;
}
</style>
