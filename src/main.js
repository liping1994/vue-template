import Vue from 'vue'

// Normalize.css是一种CSS reset的替代方案。经过@necolas和@jon neal花了几百个小时来努力研究不同浏览器的默认样式的差异
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

new Vue({
  el: '#app', // 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。
  router,
  store,
  template: '<App/>', // 一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。
  components: { App } // 可以实现html 页面中不需要设置<app></app> 就可以加载 App
})
