import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiDataService } from '../../services/api-Methods/api-data.service';

@Injectable()
export class DashboardResolver implements Resolve<any> {

  constructor(private http: ApiDataService ) { }

  public news: any = undefined;

  // resolve(): Observable<any> {
  //   return this.http.httpGet('CRM', 'getlookups', 'contact');
  // }

  resolve(): Observable<any> {
    let data: Observable<any>;
    data = forkJoin(this.getCallList());
    return data;
  }


  getCallList(): any {
    const list = new Array<any>();
    list.push(this.http.httpGet('CRM', 'callspWithoutParams', { spName: "prGetDashboardData" }));
    return list;
  }
}