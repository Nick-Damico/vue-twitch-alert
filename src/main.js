import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AuthHandler from './components/AuthHandler'
import TopTwenty from './components/TopTwenty'
import Notifications from './components/Notifications'
import Account from './components/Account'
import LandingPage from './components/LandingPage'
import Following from './components/Following'
import store from './store/index'
import './app.css'

Vue.config.productionTip = false
// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: LandingPage },
    { path: '/top-20', component: TopTwenty },
    { path: '/notifications', component: Notifications },
    { path: '/account', component: Account },
    { path: '/following', component: Following }
  ],
  linkActiveClass: "active",
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
