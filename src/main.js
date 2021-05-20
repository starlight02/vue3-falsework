import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import api from './plugins/api';
import i18n from './plugins/i18n';
import np from 'nprogress';
import 'nprogress/nprogress.css';
import './styles/reset.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

window.appVersion = import.meta.env.VITE_APP_VERSION;
window.api = api;
window.np = np;

export const app = createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
