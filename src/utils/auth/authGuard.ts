import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useUserStore } from '../store/userStore';

const authGuard = {
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        const authContext = useUserStore();

        const userRoles: string[] | null = authContext.user?.roles as string[] || null;
        const requiredRoles: string[] = to.meta.roles as string[];
        const authRequired = to.meta.auth as boolean;
        if (authRequired && !authContext.isAuthenticated) {
            next('/login');
        }

        if (requiredRoles && requiredRoles.length > 0) {
            const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
            if (hasRequiredRole) {
                next();
            } else {
                next('/unauthorized');
            }
        } else {
            next();
        }
    }
};

export default authGuard;