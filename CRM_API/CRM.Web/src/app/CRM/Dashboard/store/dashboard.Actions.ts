import { Action } from '@ngrx/store';
import { DashboardActionTypes } from './Dashboard-ActionTypes';

export class GetLookups implements Action {
    type = DashboardActionTypes.GETLookups;
}

export class SetLookups implements Action {
    type = DashboardActionTypes.SETLookups;
    constructor(public payload?: any) { }
}

export class GetContacts implements Action {
    type = DashboardActionTypes.GETContactsForEffects;
}

export class SetContacts implements Action {
    type = DashboardActionTypes.SETContacts;
    constructor(public payload?: any) { }
}