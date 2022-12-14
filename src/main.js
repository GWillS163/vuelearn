import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/index.less'
import './api/mock.js'
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

import api from './api/api.js'
app.config.globalProperties.$api = api

store.commit("addMenu", router)
// 路由守卫
function checkRouter(path) {
  let hasCheck = router.getRoutes().filter(item => item.path === path).length > 0
  return hasCheck
}
checkRouter()
router.beforeEach((to,
                   from,
                   next) => {
  const token = store.state.token
  // console.log(token);
  if (!token && to.path !== '/login') { // 没有token，跳转到登录页
    console.log("no token", to);
    next({name: 'login'})
  } else if (!checkRouter(to.path)) {
    console.log("no router", to);  // 已登录后的异常路由
    next({name: 'home'})
  } else {
    next()
  }
})


app.use(router).use(store)
app.mount('#app')
//test


