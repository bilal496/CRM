
import { Routes, RouterModule } from '@angular/router';
import { CRMComponent } from './crm.component';
const routes: Routes = [
  { path: '', component: CRMComponent,
  children: [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./Dashboard/dashboard.module').then(m => m.DashboardModule) }
  ]
}
];
export const routing = RouterModule.forChild(routes);
