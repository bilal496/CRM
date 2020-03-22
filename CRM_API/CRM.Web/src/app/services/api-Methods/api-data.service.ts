import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApiDataService } from '../api-Operations/api-Methods.interface';


@Injectable({
  providedIn: 'root'
})

export class ApiDataService implements IApiDataService  {

  /**
   *http://localhost/NFS.CMS.CSI
   */
   // private _url = 'http://192.96.33.109/CRM_API/api/';
  private _url = 'http://localhost/CRM_API/api/';
  constructor(private _http: HttpClient) {

  }
  httpPost<TResult>(controllerName: string, actionName: string, t: any): Observable<TResult> {

    let url = this._url;
    url = url + controllerName + '/' + actionName;
    return this._http.post<TResult>(url, t, {
       headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
          //,'_context': localStorage.getItem('_context')
      }
    });
  }

   httpGet<TResult>(controllerName: string, actionName: string, requestobj: any): Observable<TResult> {

    let url = this._url;
    url = url + controllerName + '/' + actionName;
    if (requestobj !== undefined && requestobj !== null && requestobj !== ''
      //&& (localStorage.getItem('_context') !== null || localStorage.getItem('_context') !== undefined)
      ) {
      return this._http.get<TResult>(url
         ,{
            params: requestobj
            , headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate'
                // ,'_context': localStorage.getItem('_context')
            }
          }
        );
    } else {
      return this._http.get<TResult>(url);
    }
  }
  httpDelete<T>(url: string, t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
