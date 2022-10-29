import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/index.less'
import store from './store/index.js'
const app = createApp(App)

import BootstrapVue3 from 'bootstrap-vue-3'
/* set the theme color of bootstrap*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
app.use(BootstrapVue3)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)


import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store)
app.mount('#app')
//test

