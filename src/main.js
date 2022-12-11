import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import './api/mock.js'
const app = createApp(App)

import BootstrapVue3 from 'bootstrap-vue-3'
/* set the theme color of bootstrap*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
app.use(BootstrapVue3)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import api from './api/api.js'
app.config.globalProperties.$api = api
    // 数据持久化，调用store中的addMenu方法，将路由信息传入，数据存储在store中
store.commit("addMenu", router);
app.use(router).use(store)
app.mount('#app')
//test


