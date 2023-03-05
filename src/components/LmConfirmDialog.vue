<!-- Confirm box with title and confirm /cancel button, and with popup modal -->
<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<template>
  <li-modal-base
    class="lm-dialog-modal"
    persistent
    :model-value="modelValue"
    v-on:update:model-value="
      (value:boolean) => {
        $emit('update:modelValue', value);
      }
    "
  >
    <lm-confirm-box :title="attrs.title" class="lm-confirm-dialog-inner" @onConfirm="onClickConfirm" @onCancel="onClickCancel">
      <slot></slot>
    </lm-confirm-box>
  </li-modal-base>
</template>

<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<script setup lang="ts">
import { ref, onMounted, reactive, useAttrs, computed, defineEmits } from 'vue';
// @ts-ignore
import Logger from 'cpclog';
import LmConfirmBox from './LmConfirmBox.vue';

const logger = Logger.createWrapper('LmConfirmDialog', Logger.LEVEL_DEBUG);

const attrs = useAttrs();
const emit = defineEmits(['update:modelValue', 'onConfirm', 'onCancel']);

defineProps<{
  modelValue?: boolean;
}>();

onMounted(async () => {
  try {
  } catch (error) {
    logger.error('error:', error);
    throw error;
  }
});

const theValue = computed({
  get() {
    return attrs.modelValue;
  },
  set(value) {
    logger.debug('set modelValue');
    emit('update:modelValue', value);
  },
});

function onClickConfirm() {
  theValue.value = false;
  emit('onConfirm');
}

function onClickCancel() {
  theValue.value = false;
  emit('onCancel');
}
</script>

<!----------------------------------------------------------------------------->
<!----------------------------------------------------------------------------->
<style scoped>
.lm-dialog-modal {
  /* background-color: #ff0; */
}
.lm-confirm-dialog-inner {
  /* width: 800px; */
  max-width: 90vw;
  /* height: 650px; */
  background-color: #fff;

  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
