import { createApp } from "vue";

import i18n from "@/plugins/i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@popperjs/core";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

import "./styles/variables.css";
import "./styles/global.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(i18n);
app.use(BootstrapVue3);
app.use(vuetify);
app.mount("#app");
