import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import '@/styles/index.scss'

// vant 组件导入
import Vant from 'vant';
import { Lazyload } from 'vant';
Vue.use(Vant);
Vue.use(Lazyload, {});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
