import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AuthHandler from './components/AuthHandler'
import TopTwenty from './components/TopTwenty'
import LandingPage from './components/LandingPage'
import store from './store/index'
import './app.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: LandingPage },
    { path: '/top-20', component: TopTwenty },
  ],
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
