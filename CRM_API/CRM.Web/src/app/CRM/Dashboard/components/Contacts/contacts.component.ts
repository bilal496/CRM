import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { TablesDataService } from '../../../../pages/table/components/data-table/tablesData.service';
import { ActionsSubject, Store, select } from '@ngrx/store';
import { GetContacts } from '../../store/dashboard-actions-index';
import { IDashBoardState } from '../../store/dashboard.state';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/CRM/models/contacts';
import { FormGroupState } from 'ngrx-forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../../../../services/api-Methods/api-data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'crm-contacts',
  templateUrl: `./contacts.component.html`,
  styleUrls:[`./contacts.component.scss`]
})
export class ContactsComponent {

  @ViewChild('closebutton') closebutton;
  
  title = 'CRM';
  showloading: boolean = false;
  public PieOption;
  tableData: Array<any>;
  contactList = [];
  FormState$: Observable<FormGroupState<Contact>>;
  Contracts$: Observable<any>;
  additionalInfo: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  lookupsList: any[];
  contactSourceList: any[];
  contactStatusList: any[];
  hotnessLevelList: any[];
  assignedUserList: any[];
  addContact: Contact;

  constructor( private _tablesDataService: TablesDataService
             , public service: ActionsSubject
             , private _store: Store<IDashBoardState>
             , private activatedRoute: ActivatedRoute
             , private cd: ChangeDetectorRef
             , public _http: ApiDataService
             , public router: Router){
      this.additionalInfo = 1;
      this.addContact = new Contact();
  }
  ngOnInit(){
    // this.loadData();
    // this.service.next(new GetContacts());
    if (this.activatedRoute.snapshot.data !== undefined &&
      this.activatedRoute.snapshot.data.settings !== undefined &&
      this.activatedRoute.snapshot.data.settings.length > 0) {
      if (this.activatedRoute.snapshot.data.settings[0].Table !== undefined) {
        this.lookupsList = this.activatedRoute.snapshot.data.settings[0].Table;
        this.contactSourceList = this.lookupsList.filter(x=> x.LookupID == 3);
        this.contactStatusList = this.lookupsList.filter(x=> x.LookupID == 1);
        this.hotnessLevelList = this.lookupsList.filter(x=> x.LookupID == 4);
        this.assignedUserList = [{DisplayValue: "LoginUSer", DataValue: 1}];
      }
      if (this.activatedRoute.snapshot.data.settings[1].Table !== undefined) {
        this.tableData = this.activatedRoute.snapshot.data.settings[1].Table;
        console.log(this.tableData);
      }
  }

  }
  loadData() {
    this.tableData = this._tablesDataService.DATA;
    // this.Contracts$.subscribe(x=> this.contactList = x.Table);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  save(){
    console.log(this.addContact);
    this._http.httpPost('CRM', 'AddContact', { contact: this.addContact }).subscribe(
      x=> { console.log(x);
            swal({
              title: 'Automated REI - CRM',
              text: 'Contact Successfully Added.',
              type: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.value) {
                this.closebutton.nativeElement.click();
                this._http.httpGet('CRM', 'getcontacts', null).subscribe
                (
                  x => this.tableData = x['Table']
                )
              }
            });
          }
    );
  }

  call(callNo: string) {
    alert('Call button: ' + callNo);
  }

  text(callNo: string) {
    alert('Text button: ' + callNo);
  }

  editContact(contactId: string) {
    this.router.navigateByUrl('/crm/dashboard/edit', { state: { contactId: contactId } });
  }
}
