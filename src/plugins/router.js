import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

let routeList = [];
const modules = import.meta.globEager('../modules/*/routes.js');

Object.keys(modules).forEach(r => {
    const { default: routes } = modules[r];
    routeList = routeList.concat(routes);
});
routeList.push({ path: '/', redirect: { name: 'home' } });

const router = createRouter({
    history: routerHistory,
    routes: routeList
});

router.beforeEach((to, from, next) => {
    window.np.start();
    next();
});

router.afterEach(() => {
    window.np.done();
});

export default router;
