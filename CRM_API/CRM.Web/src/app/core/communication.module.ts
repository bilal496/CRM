import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    HttpClientModule
  ],
  exports: [ RouterModule, HttpClientModule ]
})
export class CommunicationModule {
}
