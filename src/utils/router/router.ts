import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import authGuard from '../auth/authGuard';

import AppLayout from '../../layouts/AppLayout.vue';
import NoLayoutLayout from '../../layouts/NoLayoutLayout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: {  },
        component: AppLayout,
        children: [
            {
                path: '',
                meta: {  },
                component: () => import('../../pages/Home.vue'),
            },
        ] 
    },
    {
        path: '/login',
        meta: {  },
        component: NoLayoutLayout,
        children: [
            {
                path: '',
                meta: {  },
                component: () => import('../../pages/Login.vue'),
            },
        ]
    },
    {
        path: '/register',
        meta: {  },
        component: NoLayoutLayout,
        children: [
            {
                path: '',
                meta: {  },
                component: () => import('../../pages/Register.vue'),
            },
        ]
    },
    {
        path: '/me',
        meta: { auth: true },
        component: AppLayout,
        children: [
            {
                'path': '',
                'meta': { auth: true },
                'component': () => import('../../pages/Userinfo.vue'),
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    authGuard.beforeEnter(to, from, next);
});

export default router;
