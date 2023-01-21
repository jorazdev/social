import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

import CKEditor from '@ckeditor/ckeditor5-vue';

app.use(store)
	.use(router)
	.use(ElementPlus)
	.use(CKEditor)
	.mount('#app')

