import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  { path: '',  component: MainComponent,
    children: [
      { path: '', redirectTo: 'crm', pathMatch: 'full' },
      { path: 'crm', loadChildren: () => import('./CRM/crm.module').then(m => m.CRMModule) },
      { path: 'rvm', loadChildren: () => import('./RVM/rvm.module').then(m => m.RVMModule) }
    ]
  }
];
export const appRouting = RouterModule.forRoot(routes);
