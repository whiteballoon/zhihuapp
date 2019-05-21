import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import './assets/fonts/iconfont.css'

import {formatDate} from './utils/date.js'
Vue.filter('timestampToDate',function(time){
  // time为秒s的时间戳，需要转换成毫秒
  var htime = time + '000';
  var date = new Date(Number(htime));
  return formatDate(date, 'yyyy-MM-dd hh:mm');
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
