import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import authContext from '../auth/authContext'; 

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../../pages/Home.vue'),

       /*  beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
            if (authContext.isAuthenticated) {
                next();
            } else {
                next('/login');
            }
        }, */
        
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
