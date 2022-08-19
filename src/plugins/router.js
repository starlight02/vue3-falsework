import { createRouter, createWebHistory } from 'vue-router';
import { i18nLocaleChange } from '../utils';

const routes = [];
const modules = import.meta.glob('../modules/*/routes.js', { eager: true });

Object.keys(modules).forEach(r => {
    const {default: list} = modules[r];
    routes.push(...list);
});
routes.push({path: '/:pathMatch(.*)*', redirect: {name: 'Home'}});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    window.np.start();
    const lang = to.params.lang || '';
    window.localStorage.setItem(import.meta.env.VITE_SPECIFIED_LANG, lang);
    // 当从一种语言前缀切换到另一种时
    if (from.params.lang !== to.params.lang) {
        console.log('已更改指定语言：', lang);
        // 如果指定的语言不支持则重定向到默认语言
        if (!i18nLocaleChange(lang)) {
            return {redirect: {name: to.name.replace('I18n', '')}};
        }
    }
    return true;
});

router.afterEach(() => {
    window.np.done();
});

export default router;
