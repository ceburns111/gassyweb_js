import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import {router}  from "./router";
import {jwtInterceptor} from "./helpers/jwtInterceptor";
import {errorInterceptor} from "./helpers/errorInterceptor";

jwtInterceptor(); 
errorInterceptor(); 

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

