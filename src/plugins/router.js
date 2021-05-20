import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const routes = [];
const modules = import.meta.globEager('../modules/*/routes.js');

Object.keys(modules).forEach(r => {
    const { default: list } = modules[r];
    routes.push(...list);
});
routes.push({ path: '/:pathMatch(.*)*', redirect: { name: 'Home' } });

const router = createRouter({
    history: routerHistory,
    routes
});

router.beforeEach((to, from, next) => {
    window.np.start();
    next();
});

router.afterEach(() => {
    window.np.done();
});

export default router;
