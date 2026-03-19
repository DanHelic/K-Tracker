import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Seite2 } from './seite2/seite2';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () =>
            import('./home/home').then(m => m.Home),
    },
    {
        path: 'seite2',
        loadComponent: () =>
            import('./seite2/seite2').then(m => m.Seite2),
    },
];
