import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudoperationsService } from '../api-Operations/api-methods.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
 export class ApicommunicationService<T, ID> implements CrudoperationsService <T, ID> {

  constructor(
    protected http: HttpClient  ) {

    console.log('DbOperations');
  }
  // url:string = 'http://localhost:80/nfs.wfs.API/api';
  post(url: string, t: T): Observable <T> {

    const headerDict = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      // tslint:disable-next-line: max-line-length
      '_context' : 'bHVxbWFufDQ0MzIwOXw0fDF8REFBU3wxNjV8MTAwMDpsaHpSMTFWdDdtMG9UZWY1d1UyUmo2MEVncVM1U0ZIcTowVXFlcE1iRGFlWE40NHJJbUVSL25Pdzg4QkE9fDYvMy8yMDIwIDEyOjAwOjAwIEFN'
    });


    const REQUEST_OPTIONS = {
      headers: headerDict
    };

   return this.http.post <T>(url, t, REQUEST_OPTIONS);

  }

  update(url: string, t: T): Observable <T> {
    return this.http.post <T>(url, t);
  }

  getOne(url: string, id: ID): Observable <T> {
    return this.http.get<T>(url + '?id=' + id);
  }

  getAll(url: string): Observable <T[]> {

    return this.http.get<T[]>(url);

  }

  delete(url: string, id: ID): Observable<T> {
    return this.http.delete<T>(url + '/' + id);
  }
}
