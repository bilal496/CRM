import { createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { combineReducers, Action } from '@ngrx/store';
import { DashboardActionTypes } from './Dashboard-ActionTypes';
import { IDashBoardState } from './dashboard.state';
import { Contact } from '../../models/contacts';


 const FORM_ID = 'dashboardForm';
 const INITIAL_STATE = createFormGroupState<Contact>(FORM_ID, new Contact());

const reducers = combineReducers<IDashBoardState['dashboardForm'], any>({
  contacts(_state = INITIAL_STATE, _action: any) {
        let lstate = _state;
        switch (_action.type) {
            // case DashboardActionTypes.SETContacts:
            //     // lstate = _action.payload;
            //     lstate = {...lstate,  contracts : _action.payload };
            //     return lstate;
            // case DashboardActionTypes.SETPaymentHistoryForReducer:
            //     lstate = {...lstate,  paymentHistory : _action.payload };
            //     return lstate;
            // case DashboardActionTypes.SETRepaymentPlanForReducer:
            //     lstate = {...lstate,  repaymentPlan : _action.payload };
            //     return lstate;
            // default:
            //     return lstate;
            }
        lstate = formGroupReducer(lstate, _action);
        return lstate;
    },
    // ,
    // compaign(_state = INITIAL_STATE, _action: any) {
    //     const controlID = _state;
    //     let lstate = _state;
    //     // switch (_action.type) {
    //     //     case DashboardActionTypes.GETForChangePasswordReducer:
    //     //         // lstate = formStateReducer(_state, new SetValueAction(controlID.id, _action.payload));
    //     //     }
    //     lstate = formGroupReducer(lstate, _action);
    //   return lstate;
    // },
    contactList(_state : {}, _action: any) {
        let lstate = _state;
        switch (_action.type) {
            case DashboardActionTypes.SETContacts:
                lstate = {...lstate,  ContactList:_action.payload};
                return lstate;
            default:
                return lstate;
            }
    },
    lookups(_state : {}, _action: any) {
        let lstate = _state;
        switch (_action.type) {
            case DashboardActionTypes.SETLookups:
                lstate = {...lstate,  CountriesResultSet:_action.payload};
                return lstate;
            default:
                return lstate;
            }
    }
    // ,
    // Tasks(_state = INITIAL_STATE, _action:any){
    //     const controlID = _state.controls;
    //     let lstate = _state;
    //     // switch (_action.type) {
    //     //     case DashboardActionTypes.SetBpAddressForRducer:
    //     //         if (_action.payload !== undefined && _action.payload.length > 0) {

    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.ADDR_DET.id, _action.payload[0]['ADDR_DET']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.BLDG_VILG.id, _action.payload[0]['BLDG_VILG']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.ZIP_CODE.id, _action.payload[0]['ZIP_CODE']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.PRVN_ID.id, _action.payload[0]['PRVN_ID']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.CITY_ID.id, _action.payload[0]['CITY_ID']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.HOME_PHON.id, _action.payload[0]['HOME_PHON']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.MOBL_PHON.id, _action.payload[0]['MOBL_PHON']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.EMAL_ADDR.id, _action.payload[0]['EMAL_ADDR']));
    //     //         lstate = formStateReducer(lstate, new SetValueAction(controlID.ADDR_ID.id, _action.payload[0]['ADDR_ID']));

    //     //       }
    //     //     break;
    //     // }
    //     return lstate;
    // }
});


export function DashboardReducer(s: IDashBoardState['dashboardForm'], a: Action) {
    return reducers(s, a);
}


