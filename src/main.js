import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import api from './plugins/api';
import np from 'nprogress';
import 'nprogress/nprogress.css';
import './styles/reset.css';
import '@mdi/font/css/materialdesignicons.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

window.appVersion = import.meta.env.VITE_APP_VERSION;
window.api = api;
window.np = np;

export const app = createApp(App)
    .use(router)
    .mount('#app');
