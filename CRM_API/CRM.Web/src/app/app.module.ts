import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRouting } from './app.routing';
import { MainComponent } from './main.component';
import { CoreModule } from './core';
import { NfsLoaderIndicatorService } from './nfs-loader-indicator.service';
import { NfsLoaderIndicatorInterceptor } from './nfs-loader-indicator.Interceptor'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    appRouting
    // , AppStoreModule
  ],
  declarations: [
    AppComponent, MainComponent
  ],
  providers: [ NfsLoaderIndicatorService
            , { provide: HTTP_INTERCEPTORS, useClass: NfsLoaderIndicatorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
