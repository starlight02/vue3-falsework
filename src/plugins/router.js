import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const Home = () => import('../views/Home.vue');
const Market = () => import('../views/Market.vue');
const User = () => import('../views/User.vue');
const Design = () => import('../views/Design.vue');
const Furniture = () => import('../views/Furniture.vue');

export default createRouter({
    history: routerHistory,
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
        },
        {
            name: 'Market',
            path: '/market',
            component: Market,
        },
        {
            name: 'User',
            path: '/user',
            component: User,
        },
        {
            name: 'Design',
            path: '/design',
            component: Design,
        },
        {
            name: 'Furniture',
            path: '/furniture',
            component: Furniture,
        },
    
    ],
});
