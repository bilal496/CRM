import { Contact } from '../../models/contacts';
import { FormGroupState } from 'ngrx-forms';



export interface IDashBoardState  {
    dashboardForm: {
        contacts: FormGroupState<Contact>;
        //compaign:FormGroupState<any>;
        contactList: any;
        //Tasks: any;
        lookups:any;
    };
}
