import { Observable } from 'rxjs';


export interface CrudoperationsService<T, ID> {
   post(url: string, t: T): Observable<T>;
   update(url: string, t: T): Observable<T>;
   getOne(url: string, id: ID): Observable<T>;
   getAll(url: string): Observable<T[]>;
   delete(url: string, id: ID): Observable<any>;
}

