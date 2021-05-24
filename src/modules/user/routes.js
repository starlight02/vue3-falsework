const User = () => import('./views/User.vue');

export default [
    {
        name: 'User',
        path: '/user',
        component: User,
        // alias: ['/:lang/user']
    }, 
    {
        name: 'I18nUser',
        path: '/:lang/user',
        component: User,
    },
];
