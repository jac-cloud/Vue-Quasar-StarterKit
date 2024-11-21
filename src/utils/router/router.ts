import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import authGuard from '../auth/authGuard';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: {  },
        component: () => import('../../pages/Home.vue'),
        beforeEnter: (to, from, next) => {
            authGuard.beforeEnter(to, from, next);
        }

       
        
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
