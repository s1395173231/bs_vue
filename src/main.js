// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

/* eslint-disable no-new */

sync(store, router)

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  components: { App },
  template: '<App/>'
})
