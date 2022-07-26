import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable'
//import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/arya-blue/theme.css';
import './assets/main.css'
//import 'primevue/resources/primevue.min.css';
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
app.component('Menubar', Menubar)
app.component('Column', Column);
app.component('DataTable', DataTable);



app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");

