import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router/routes.js";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(routes)
  .use(store)
  .mount("#app");