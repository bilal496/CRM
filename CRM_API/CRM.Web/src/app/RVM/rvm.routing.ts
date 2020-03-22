
import { Routes, RouterModule } from '@angular/router';
import { RingLessVoiceComponent } from './ringLessVoice.component';
const routes: Routes = [
  { path: '', redirectTo: 'ringLess', pathMatch: 'full' },
  { path: 'ringLess', component: RingLessVoiceComponent }
];
export const rvmRouting = RouterModule.forChild(routes);
