import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import BootstrapVue3 from 'bootstrap-vue-3'
/* set the theme color of bootstrap*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
app.use(BootstrapVue3)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
