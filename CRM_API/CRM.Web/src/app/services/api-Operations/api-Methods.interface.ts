import { Observable } from 'rxjs';

export interface IApiDataService {
 // httpPost<T>(url: string, t: T): Observable<T>[];
  httpPost<TResult, TRequest>(controllerName: string, actionName: string, requestobjs: TRequest): Observable<TResult>;
  httpGet<TResult>(controllerName: string, actionName: string, requestobjs: any): Observable<TResult>;
 // httpGet<T>(url: string, t: T): Observable<T>[];
  httpDelete<T>(url: string, t: T): Observable<T>;
}
