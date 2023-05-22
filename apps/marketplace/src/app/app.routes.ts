import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('@bmc/auth').then(m => m.AuthModule)
    },
    {
        path: 'feed',
        loadChildren: () => import('@bmc/feed').then(m => m.FeedModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('@bmc/cart').then(m => m.CartModule)
    }
];
