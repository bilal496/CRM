import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { NgrxFormsModule } from 'ngrx-forms';
import { CommunicationModule } from './communication.module';
import { HttpClientModule } from '@angular/common/http';
import { NfsLoaderIndicatorComponent } from './nfs-loader-Indicator/nfs-loader-indicator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NfsLoaderIndicatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [NfsLoaderIndicatorComponent]
})
export class CoreModule {
}
