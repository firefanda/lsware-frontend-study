// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cookies from 'js-cookie'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

function initLogin () {
  const token = Cookies.get('accessToken')
  if (token) {
    return store.dispatch('loginByToken', token)
  } else {
    return Promise.resolve()
  }
}

initLogin()
  .then(() => {
    // eslint-disable-next-line no-new
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  })
