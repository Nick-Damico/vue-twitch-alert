import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AuthHandler from './components/AuthHandler'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'frow/dist/frow.min.css'
import './app.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/oauth2/callback', components: AuthHandler }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
