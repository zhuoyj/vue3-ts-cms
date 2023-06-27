import { createApp } from 'vue'
import { globalRegister } from './global'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'

//全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
