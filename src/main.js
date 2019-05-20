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

// import {formatDate} from './utils/date.js'
// Vue.filter('timestampToDate',function(time){
//   var date = new Date(time);
//   return formatDate(date, 'yyyy-MM-dd hh:mm');
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
