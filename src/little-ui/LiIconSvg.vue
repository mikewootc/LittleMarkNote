<template>
  <img :src="srcUrl" :onload="onLoadSvg" />
</template>

<script setup lang="ts">
// @ts-ignore
import SVGInject from '@iconfu/svg-inject';
const props = defineProps<{
  srcUrl: string;
  fill?: string;
}>();

function onLoadSvg(event: any) {
  //console.log('onLoadSvg:', event.currentTarget);
  SVGInject(event.currentTarget, {
    beforeInject(img: any, svg: any) {
      //console.log('beforeInject', img, svg);
      svg.setAttribute('fill', props.fill);
    },
  });
}
</script>

<style></style>
