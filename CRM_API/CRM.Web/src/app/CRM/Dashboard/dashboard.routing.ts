import { Routes, RouterModule } from '@angular/router';
import {  DashboardInfoComponent } from './components/dashboardInfo.component';
import { ContactsComponent } from './components/Contacts/contacts.component';
import { TasksComponent } from './components/Tasks/tasks.component';
import { CompaignsComponent } from './components/Compaigns/compaigns.component';
import { DashboardComponent } from './dashboard.component';
import { ContactAddEditComponent } from './components/Contacts/add-editContacts/add-edit.component';
import { TaskAddEditComponent } from './components/Tasks/add-editTasks/add-edittask.component';
import { DashboardResolver } from './dashboardResolver';
import { TaskResolver } from './taskResolver';
import { TaskLookupsResolver } from './taskLookupsResolver';
import { ContactResolver } from './contactResolver';
import { EditContactResolver } from './EditContactResolver';

export const childRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent, 
        children: [
          {path: '', redirectTo: 'dashboardinfo' },
          {path: 'dashboardinfo', component: DashboardInfoComponent, resolve: { settings : DashboardResolver } },
          { path: 'contacts', component: ContactsComponent, resolve: { settings : ContactResolver } },
          { path: 'edit', component: ContactAddEditComponent, resolve: { settings : EditContactResolver } },
          { path: 'tasks', component: TasksComponent, resolve: { settings : TaskResolver },
            children: [
              { path: 'addtask', component: TaskAddEditComponent, resolve: { settings : TaskLookupsResolver } }
            ]
          },
          { path: 'compaigns', component: CompaignsComponent}
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
