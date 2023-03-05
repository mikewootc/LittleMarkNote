<!-- Open/Create vaults -->
<template>
  <div class="file-selector-inner">
    <div class="selected-folder-line">
      <p class="file-selector-selected-folder">{{ selectedFolder }}</p>
      <li-button flat icon="create_new_folder" label="" class="file-selector-new-folder" @click="onClickCreateNewDir"></li-button>
    </div>
    <div class="file-selector-dir-tree">
      <!-- prettier-ignore -->
      <q-tree ref="treeRef" v-model:selected="selectedKey" label-key="name" node-key="path" :nodes="folderTree" dense
          accordion default-expand-all style="width: 100%" @lazy-load="onLazyLoad" @update:selected="onSelectedFolder">
          <template v-slot:default-header="prop">
            <div class="row items-center">
              <q-icon class="q-mr-sm" :name="prop.node.icon" :style="{ color: prop.node.iconColor }" outline size="20px" />
              <div>{{ prop.node.name }}</div>
            </div>
          </template>
        </q-tree>
    </div>
  </div>

  <lm-confirm-dialog v-model="isShowNewDirModal" @onConfirm="onConfirmCreateDir(selectedFolder, newDirName)">
    <li-input v-model="newDirName" :label="$t('fileSelector.newDirHolder')" style="width: 400px"></li-input>
    <div v-if="isShowNewDirNoNamePrompt">{{ $t('fileSelector.newDirNoNamePrompt') }}</div>
  </lm-confirm-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, inject } from 'vue';
import { useI18n } from 'vue-i18n';
// @ts-ignore
import Logger from 'cpclog';
import { Notify } from 'quasar';
import logoUrl from '@/assets/images/logo_unicorn_color.svg';
import MyFsClient from '../models/MyFsClient';
import type { MyFileInfo } from '../../common/MyFsTypes';
import LmConfirmBox from './LmConfirmBox.vue';
import LmConfirmDialog from './LmConfirmDialog.vue';

const logger = Logger.createWrapper('MyFilleSelector', Logger.LEVEL_DEBUG);

//defineProps<{
//  msg: string
//}>()

// @ts-ignore
const toast: Function = inject('toast');
const confirm = ref(true);
let folderTree = reactive([]);
let selectedKey = reactive([]);
let selectedFolder = ref('/');
let newDirName = ref('');
let isShowNewDirModal = ref(false);
let isShowNewDirNoNamePrompt = ref(false);

const { locale } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    let lstDirContents = await browseDir(selectedFolder.value);
    logger.debug('dir:', lstDirContents);
    folderTree.splice(0, folderTree.length, ...lstDirContents);
    logger.debug('folderTree:', lstDirContents);
  } catch (error) {
    logger.error('error:', error);
    throw error;
  }
});

function onClickCreateNewDir() {
  //$q.notify('Message');
  //Notify.create('Danger, Will Robinson! Danger!');
  toast('hello', 'world');
  logger.debug('onClickCreateNewDir_', isShowNewDirModal.value);

  if (!selectedFolder) {
    //$q.notify('Message');
  }

  isShowNewDirModal.value = true;
}

async function onSelectedFolder(absolutePath: string) {
  logger.debug('onSelectedFolder:', absolutePath);
  selectedFolder.value = absolutePath;

  //let dir = await MyFsClient.browseDir(absolutePath);
  //logger.debug('dir:', dir);
  //store.viewType = 'nodes'
  //setSelectedFolder(absolutePath)
  //await filterContents(await walkFolders(absolutePath))
  //// in case this came from breadcrumbs component
  //expandTree(absolutePath)
}

async function onLazyLoad({ node, key, done, fail }) {
  logger.debug('onLazyLoad############## node:', node, 'key:', key, 'node:', node, 'fail:', fail);
  try {
    let lstDirContents = await browseDir(node.path);
    logger.debug('dir:', lstDirContents);
    done(lstDirContents);
    return;
  } catch (error) {
    logger.error('onLazyLoad error:', error);
    done([]);
    return;
    //throw error;
  }
}

async function browseDir(path: string) {
  logger.debug('browseDir_. enter:', path);
  try {
    let lstDirContents = await MyFsClient.browseDir(path);
    logger.debug('browseDir_. enter:', lstDirContents);
    lstDirContents.forEach((it, ix) => {
      it.header = 'generic';
      it.iconColor = 'gray';
      if (it.isDir) {
        it.icon = 'folder';
        it.iconColor = '#ffd76a';
      } else if (it.name.endsWith('.mp4') || it.name.endsWith('.flv')) {
        it.icon = 'ondemand_video';
        it.iconColor = 'lightblue';
      } else {
        it.icon = 'description';
      }
    });
    return lstDirContents;
  } catch (error) {
    logger.error('browseDir_ error:', error);
    throw error;
  }
}

async function onConfirmCreateDir(parentPath: string, name: string) {
  logger.debug('onConfirmCreateDir_. enter:', parentPath, name);
  if (!parentPath) {
    isShowNewDirNoNamePrompt.value = true;
    return;
  }

  try {
    let res = await MyFsClient.createDir(parentPath, name);
    return res;
  } catch (error) {
    logger.error('createDir_ error:', error);
    throw error;
  }
}
</script>

<style scoped>
.file-selector-inner {
  flex: 1;
  /* width: 800px; */
  /* max-width: 90vw; */
  /* height: 650px; */
  background-color: #fff;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.page-header {
  width: 100%;
  height: 40px;
  background-color: #007acc;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.selected-folder-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.file-selector-selected-folder {
  flex: 1;
  margin-left: 10px;
}

.file-selector-new-folder {
  justify-self: flex-end;
}

.file-selector-dir-tree {
  overflow: scroll;
  height: 100%;
}
</style>
