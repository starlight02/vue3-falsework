const User = () => import('./views/User.vue');

export default [
    {
        name: 'User',
        path: '/user',
        component: User,
    }
];
