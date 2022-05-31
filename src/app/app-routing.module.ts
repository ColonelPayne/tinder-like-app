import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule),
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
