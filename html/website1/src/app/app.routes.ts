import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Seite2 } from './pages/seite2/seite2';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'seite2',
        loadComponent: () =>
            import('./pages/seite2/seite2').then(m => m.Seite2),
    },
        {
        path: 'createAccount',
        loadComponent: () =>
            import('./pages/create-account/create-account').then(m => m.CreateAccount),
    },
];
