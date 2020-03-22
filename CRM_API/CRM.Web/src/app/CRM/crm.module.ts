import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './crm.routing';
import * as core from '../core/index';
import { CRMComponent } from './crm.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    core.CoreModule,
    routing
  ],
  declarations: [ CRMComponent ],
  exports : [
    core.CoreModule
  ]
})

export class CRMModule { }
