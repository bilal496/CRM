import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpBackend } from '@angular/common/http';
import { NfsLoaderIndicatorService } from './nfs-loader-indicator.service';
import 'rxjs/add/operator/do';

@Injectable({providedIn: 'root'})
export class NfsLoaderIndicatorInterceptor implements HttpInterceptor {

  constructor(public spinnerService: NfsLoaderIndicatorService) {
    console.log('test');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();

    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      },
      (err: any) => {

      }
    );
  }
}
