import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { TasksComponent } from './components/Tasks/tasks.component';
import { ContactsComponent } from './components/Contacts/contacts.component';
import { CompaignsComponent } from './components/Compaigns/compaigns.component';
import { routing } from './dashboard.routing';
import { DashboardInfoComponent } from './components/dashboardInfo.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard.component';
import { TablesDataService } from '../../pages/table/components/data-table/tablesData.service';
import { ContactAddEditComponent } from './components/Contacts/add-editContacts/add-edit.component';
import { TaskAddEditComponent } from './components/Tasks/add-editTasks/add-edittask.component';
import { DashboardResolver } from './dashboardResolver';
import { TaskResolver } from './taskResolver';
import { StoreModule } from '@ngrx/store';
import { DashboardReducer } from './store/dashboard.reducer';
import { AgePipe } from '../pipe/agePipe';
import { TaskLookupsResolver } from './taskLookupsResolver';
import { ContactResolver } from './contactResolver';
import { CoreModule } from '../../core';
import { EditContactResolver } from './EditContactResolver';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CommonModule,
    LayoutModule,
    SharedModule,
    NgxEchartsModule,
    NgxPaginationModule,
    routing,
    StoreModule.forRoot([DashboardReducer])
  ],
  declarations: [ DashboardComponent
                , DashboardInfoComponent
                , TasksComponent
                , ContactsComponent
                , CompaignsComponent
                , ContactAddEditComponent
                , TaskAddEditComponent
                , AgePipe
              ],
  providers:[TablesDataService, 
             DashboardResolver,
             TaskResolver,
             TaskLookupsResolver,
             ContactResolver,
             EditContactResolver
            ]
})
export class DashboardModule { }
