import Vue from 'vue'
import App from './App.vue'
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
