import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton
  // ElTable,
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElTabs,
  // ElTabPane
  // ElMenu,
  // ElMenuItem
} from 'element-plus'

//vue.config.js文件中有自动导入组件的配置，这里不太需要手动导入
const components = [
  ElButton
  // ElTable,
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElTabs,
  // ElTabPane
  // ElMenu,
  // ElMenuItem
]
export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
