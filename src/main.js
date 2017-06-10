// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import iView from 'iview'
import router from './router'
import 'iview/dist/styles/iview.css'
import AdminContent from './components/admin-content'

Vue.config.productionTip = false

Vue.use(iView)

const globalComponents = {
  AdminContent
}

// 注册全局组件
Object.keys(globalComponents).forEach((key) => {
  Vue.component(key, globalComponents[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
