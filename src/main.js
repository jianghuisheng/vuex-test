import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import router from './router';
import 'iview/dist/styles/iview.css';

import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(iView);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
