import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
