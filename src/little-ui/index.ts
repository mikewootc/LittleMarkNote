import LiIconButton from './LiIconButton.vue';
//import Vue from 'vue';

export const components:any = {
	LiIconButton,
};

const install = (app:any) => {
	Object.keys(components).forEach(key => {
		app.component(key, components[key]);
	});
};


const LittleUi = {
    install,
};

export default LittleUi;