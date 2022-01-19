import router from './plugins/router';
import i18n from './plugins/i18n';
import api from './plugins/api';
import np from 'nprogress';
import {createApp} from 'vue';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './styles/reset.css';
import smoothscroll from 'smoothscroll-polyfill';
import {formatI18nRoute} from './utils';

smoothscroll.polyfill();

window.appVersion = import.meta.env.VITE_APP_VERSION;
window.api = api;
window.np = np;

const app = createApp(App)
  .use(router)
  .use(i18n)
  .provide('formatI18nRoute', formatI18nRoute);
    
router.isReady().then(() => app.mount('#app'));