<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<template>
  <!-- Open/Create vaults -->
  <div class="the-starter__container" style="max-width: 85vw">
    <div class="start-screen-inner">
      <div class="recent-vaults">
        <div class="recent-vaults-list"></div>
      </div>

      <div class="splash">
        <!-- <li-icon-svg></li-icon-svg> -->

        <div class=""></div>
        <li-icon-svg :srcUrl="logoUrl" style="width: 100px; height: 100px"></li-icon-svg>
        <p style="font-size: 30px">Little Mark Note</p>

        <div class="open-vault-options mod-open-vault">
          <li-list-item class="setting-item" :title="$t('starter.vault.create.title')" :description="$t('starter.vault.create.description')">
            <template #right>
              <li-button style="width: 100px" color="primary" :label="$t('starter.vault.create.buttonLabel')" class="general-icon-button" @click="showFileExplorer" />
            </template>
          </li-list-item>

          <li-list-item class="setting-item" :title="$t('starter.vault.open.title')" :description="$t('starter.vault.open.description')">
            <template #right>
              <li-button style="width: 100px" color="primary" :label="$t('starter.vault.open.buttonLabel')" class="general-icon-button" :click="showFileExplorer" />
            </template>
          </li-list-item>

          <li-button style="width: 100px" color="primary" :label="$t('langName')" class="general-icon-button" @click="changeLanguage" />
        </div>
      </div>

      <lm-confirm-dialog style="width: 800px; height: 650px" :title="$t('fileSelector.title')" v-model="isShowFileExplorer" class="starter__dialog">
        <MyFileSelector></MyFileSelector>
      </lm-confirm-dialog>
    </div>
  </div>
</template>

<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import logoUrl from '@/assets/images/logo_unicorn_color.svg';
import MyFileSelector from './MyFileSelector.vue';
import LmConfirmDialog from './LmConfirmDialog.vue';

//defineProps<{
//  msg: string
//}>()
let isShowFileExplorer = ref(false);

const { locale } = useI18n({ useScope: 'global' });

function changeLanguage() {
  if (locale.value == 'en-US') {
    locale.value = 'zh-CN';
  } else {
    locale.value = 'en-US';
  }
}

function showFileExplorer() {
  console.log('showFileExplorer');
  isShowFileExplorer.value = true;
}
</script>

<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<style scoped>
.start-screen-inner {
  width: 800px;
  /* max-width: 90vw; */
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
  padding: 36px 0 0;
  /* background-color: #f0f; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1 1 auto;
  text-align: center;

}

.open-vault-options {
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
    width: 100%;
    height: 100%;
    padding: 12px 36px;
    text-align: left;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
</style>
