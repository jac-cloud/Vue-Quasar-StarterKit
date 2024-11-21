import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import authContext from '../auth/authContext'; 

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../../pages/Home.vue'),

       
        
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
