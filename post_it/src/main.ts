import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";

import "./assets/main.css";

const app = createApp(App).use(Toaster).use(router).mount("#app");
