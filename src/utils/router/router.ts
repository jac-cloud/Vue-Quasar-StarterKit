const routes = [
    {
        path: '/',
        component: () => import('../../App.vue'), // Layout wrapper
        children: [
            /* { path: '', component: () => import('pages/IndexPage.vue') }, // Default route
            { path: 'about', component: () => import('pages/AboutPage.vue') }, // About page */
        ],
    },
];

export default routes;
