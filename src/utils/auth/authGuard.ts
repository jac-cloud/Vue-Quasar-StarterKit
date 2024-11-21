import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import authContext from '../auth/authContext';

const authGuard = {
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        if (authContext.isAuthenticated) {
            const userRoles: string[] | null = authContext.user?.roles as string[] || null;
            const requiredRoles: string[] = to.meta.roles as string[];

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
        } else {
            next('/login');
        }
    }
};

export default authGuard;