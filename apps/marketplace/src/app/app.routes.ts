import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadComponent: () => import('@bmc/auth').then(m => m.LoginComponent)
    },
    {
        path: 'feed',
      loadComponent: () => import('@bmc/feed').then(m => m.FeedComponent)
    },
    {
        path: 'cart',
      loadComponent: () => import('@bmc/cart').then(m => m.CartComponent)
    }
];
