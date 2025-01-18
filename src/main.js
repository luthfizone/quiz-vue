import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// render routes
app.use(router);

// render webApps
app.mount("#app");
