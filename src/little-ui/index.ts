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
};

const LittleUi = {
  install,
};

export default LittleUi;
