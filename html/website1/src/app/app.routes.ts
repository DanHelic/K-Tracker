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
  {
    path: 'purchases',
    loadComponent: () =>
      import('./pages/purchases/purchases').then(m => m.Purchases),
  },
  {
    path: 'purchase',
    loadComponent: () =>
      import('./pages/purchase/purchase').then(m => m.Purchase),
  },
  {
    path: 'items',
    loadComponent: () =>
      import('./pages/items/items').then(m => m.Items),
  },
  {
    path: 'item',
    loadComponent: () =>
      import('./pages/item/item').then(m => m.Item),
  },
];
