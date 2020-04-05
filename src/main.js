import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//将路由挂载到vue实例中
}).$mount('#app')
