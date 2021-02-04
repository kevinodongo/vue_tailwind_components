import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/tailwind.css";
import "./assets/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
