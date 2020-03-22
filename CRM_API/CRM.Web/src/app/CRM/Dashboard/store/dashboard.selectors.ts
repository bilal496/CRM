import { createSelector } from '@ngrx/store';
import { IDashBoardState } from './dashboard.state';
// import { FormGroupState } from 'ngrx-forms';

export const TargetState  = (state: IDashBoardState) => state.dashboardForm;
export const formstate = createSelector(TargetState , state => <any>state.contacts);
export const contactslist = createSelector(TargetState , state => <any>state.contactList);
export const lookups = createSelector(TargetState, state => <any> state.lookups);
