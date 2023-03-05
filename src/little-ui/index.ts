import { Notify } from 'quasar';

import LiButton from './LiButton.vue';
import LiIconButton from './LiIconButton.vue';
import LiListItem from './LiListItem.vue';
import LiIconSvg from './LiIconSvg.vue';
import LiInput from './LiInput.vue';
import LiModalBase from './LiModalBase.vue';
//import Vue from 'vue';

export const components: any = {
  LiButton,
  LiIconButton,
  LiListItem,
  LiIconSvg,
  LiInput,
  LiModalBase,
};

const install = (app: any) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });

  console.log('app.config.globalProperties.$li 2');
  app.provide('toast', (...message: string[]) => {
    let allMessage: string = '';
    if (message instanceof Array) {
      console.log('is array');
      allMessage = message.join(' ');
    } else {
      console.log('is not array');
      allMessage = message;
    }
    Notify.create(allMessage);
  });
  //app.provide('toast', (message: string | string[]) => {
  //  let allMessage: string = '';
  //  if (message instanceof Array) {
  //    console.log('is array');
  //    allMessage = message.join(' ');
  //  } else {
  //    console.log('is not array');
  //    allMessage = message;
  //  }
  //  Notify.create(allMessage);
  //});
};

const LittleUi = {
  install,
};

export default LittleUi;
