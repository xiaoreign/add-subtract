import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/index', component: App },
  { path: '*', redirect: '/index' }   /*默认跳转路由*/
]

const router = new VueRouter({
  mode: 'hash',   /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
