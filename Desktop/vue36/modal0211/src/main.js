import Vue from 'vue'
import App from './App.vue'
import router from './router'
import List from "./components/List.vue";

Vue.config.productionTip = false;
Vue.component("List", List);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
