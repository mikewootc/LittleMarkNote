<script setup lang="ts">
import { ref } from 'vue';
//defineProps<{
//  msg: string
//}>()
const confirm = ref(true);
</script>

<template>
  <!-- Open/Create vaults -->
  <div class="the-starter__container" style="max-width: 85vw">
    <div class="start-screen-inner">
      <div class="recent-vaults">
        <div class="recent-vaults-list">
        </div>
      </div>

      <div class="splash">
        <li-list-item title="Here might be a page title" content="Here might be a page content">
          <template #right>
            <li-button style="width: 100px;" color="primary" label="创建" class="general-icon-button" />
          </template>
        </li-list-item>
      </div>
    </div>
  </div>
</template>

<style scoped>
.start-screen-inner {
  width: 800px;
  max-width: 85vw;
  height: 650px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
}
.recent-vaults {
  width: 280px;
  height: 100%;
  padding: 32px 12px 8px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: lightgray;
}

.recent-vaults-list {
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
}

.splash {
  flex: 1;
  height: 100%;
  padding-top: 36px;
  /* background-color: #f0f; */
}
</style>
