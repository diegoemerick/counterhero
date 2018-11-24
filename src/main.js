import Vue from 'vue';
import App from './App';
import router from './router';
import VueSuperagent from 'vue-superagent';
import Vuetify from 'vuetify'

Vue.config.productionTip = false;

Vue.use(
  VueSuperagent, {
    baseUrl: 'https://your-url',
  });

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
