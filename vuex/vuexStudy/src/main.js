import Vue from 'vue'
import store from './stores/store.js'
import App from './App.vue'
import Add from './add.vue'
import Remove from './remove.vue'

Vue.component(Add.name,Add);
Vue.component(Remove.name,Remove);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
