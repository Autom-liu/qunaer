import Vue from 'vue';
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import './assets/style/reset.css';
import './assets/style/border.css';
import './assets/style/iconfont.css';

Vue.config.productionTip = false;

fastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
