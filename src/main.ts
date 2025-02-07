import { createApp } from "vue";
import router from "./Router.js";
import { createPinia } from "pinia";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#0D6FB8",
    secondary: "#27AAE1",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(vuetify);
app.use(VueViewer);
app.mount("#app");
