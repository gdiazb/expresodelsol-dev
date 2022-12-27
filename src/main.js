import "./assets/scss/main.scss";

import Vue from 'vue'
import App from './App.vue'

import router from './router'

import axiosVue from 'axios-vue'

import VueScrollTo from 'vue-scrollto'

Vue.use(axiosVue)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
  offset: -100,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created: function() {
    this.globalVar = "It's will change global var";
  }
}).$mount('#app')
