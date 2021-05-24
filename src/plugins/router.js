import { createRouter, createWebHistory } from 'vue-router';
import { i18nLocaleChange } from '../utils'

const routerHistory = createWebHistory();

const routes = [];
const modules = import.meta.globEager('../modules/*/routes.js');

Object.keys(modules).forEach(r => {
    const { default: list } = modules[r];
    routes.push(...list);
});
routes.push({ path: '/:pathMatch(.*)*', redirect: { name: 'Home' }});

const router = createRouter({
    history: routerHistory,
    routes
});

router.beforeEach((to, from) => {
    window.np.start();
    const lang = to.params.lang || '';
    window.localStorage.setItem(import.meta.env.VITE_SPECIFIED_LANG, lang);
    // 当从一种语言前缀切换到另一种时
    if (from.params.lang !== to.params.lang) {
      console.log('已更改指定语言：', lang);
      i18nLocaleChange(lang);
    }
    return true;
});

router.afterEach(() => {
    window.np.done();
});

export default router;
