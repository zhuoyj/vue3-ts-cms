import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  //使用app.use会自动向registerElement这个函数加上一个app参数来使用
  //如果传入的是对象的话，该对象要有一个install方法
  app.use(registerElement)
  app.use(registerProperties)
}
