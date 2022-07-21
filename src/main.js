import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/rhea/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from "./App.vue";
import {router}  from "./router";
import {jwtInterceptor} from "./helpers/jwtInterceptor";
import {errorInterceptor} from "./helpers/errorInterceptor";

jwtInterceptor(); 
errorInterceptor(); 

const app = createApp(App);


app.component('InputText', InputText);
app.component('Button', Button);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");

