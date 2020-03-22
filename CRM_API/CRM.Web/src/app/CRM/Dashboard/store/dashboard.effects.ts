import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { DashboardActionTypes } from './Dashboard-ActionTypes';
import * as DashboardActions from './dashboard-actions-index';
import { Router } from '@angular/router';
import { ApiDataService } from '../../../services/api-Methods/api-data.service';
import { Store } from '@ngrx/store';
// import { IDashBoardState } from './dashboard.state';

@Injectable()
export class DashboardEffects  {

    constructor(private _http: ApiDataService,  private _actions$: Actions
               , private router: Router
               // , private  _store: Store<IDashBoardState>
               ) {
    }

   getContacts$ = createEffect(() =>
   this._actions$.pipe(
      ofType(DashboardActionTypes.GETContactsForEffects),
      switchMap(() =>
         this._http.httpGet('CRM', 'getcontacts', null).pipe(
            map(
               data => {
                   return new DashboardActions.SetContacts(data);
               }
            )
         )
      )
   )
  );

  getContactLookups$ = createEffect(() =>
   this._actions$.pipe(
      ofType(DashboardActionTypes.GETContactsForEffects),
      switchMap(() =>
         this._http.httpGet('CRM', 'getlookups', {'id': 'contact' }).pipe(
            map(
               data => {
                   return new DashboardActions.SetContacts(data);
               }
            )
         )
      )
   )
  );
}