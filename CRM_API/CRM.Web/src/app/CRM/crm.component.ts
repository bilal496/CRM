import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-crm',
  template: `
  <nfs-loader-indicator></nfs-loader-indicator>
  <router-outlet></router-outlet>
 `
})
export class CRMComponent {
  response: Observable<any>;
  constructor(private http: HttpClient) {}

  request() {
      const url = 'http://localhost/CRM_API/api/CRM/callspWithoutParams?spName=prGetDashboardData';
      this.response = this.http.get(url, {observe: 'body'});
  }
}
