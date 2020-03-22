import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IDashBoardState } from './dashboard.state';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { Contact } from '../../models/contacts';
import * as DashboardSelector from './dashboard.selectors';


@Injectable({
    providedIn: 'root'
})

export class DashboardFacade {

    FormState$: Observable<FormGroupState<Contact>>;
    Contracts$: Observable<any>;
    lookups$: Observable<any>

    constructor( _store: Store<IDashBoardState>) {
        this.FormState$  =  _store.pipe(select(DashboardSelector.formstate));
        this.Contracts$  =  _store.pipe(select(DashboardSelector.contactslist));
        this.lookups$  =  _store.pipe(select(DashboardSelector.lookups));
    }
}
