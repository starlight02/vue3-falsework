const Home = () => import('./views/Home.vue');

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'I18nHome',
        path: '/:lang',
        component: Home,
    }
];
