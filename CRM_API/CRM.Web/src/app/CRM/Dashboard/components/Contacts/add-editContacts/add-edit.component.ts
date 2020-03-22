import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../../../../../services/api-Methods/api-data.service';
import { Contact } from 'src/app/CRM/models/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {

    default_data: Array<any>;
    Task: Array<any>;
    Compain: Array<any>;
    contactId: string;
    
    lookupsList: any;
    taglist: string;
    Hotness: any;
    AddressType: any;
    Type: string[] = ['None', 'Client', 'Agent', 'Lender', 'Title Company', 'Inspector', 'Appraiser'];
    Status: any;
    source: any;
    contact: Contact;
    assignedUserList: any;


    constructor(private router: Router
              , public _http: ApiDataService
              , private activatedRoute: ActivatedRoute) {
      const navigation = this.router.getCurrentNavigation();
      this.contactId = navigation.extras.state ? navigation.extras.state.contactId : 0;
    }

  ngOnInit() {
      this._http.httpGet('CRM', 'getContactEdit', {contactId: this.contactId}).subscribe
        (
          x => {
            if(x !== undefined && x!== null
              && x['Table'] !== undefined && x['Table'] !== null
              && x['Table'][0] !== undefined && x['Table'][0] !== null) {
                this.contact = <Contact>(x['Table'][0]);
              }
          }
        );

        if (this.activatedRoute.snapshot.data !== undefined &&
          this.activatedRoute.snapshot.data.settings !== undefined &&
          this.activatedRoute.snapshot.data.settings.length > 0) {
          if (this.activatedRoute.snapshot.data.settings[0].Table !== undefined) {
            this.lookupsList = this.activatedRoute.snapshot.data.settings[0].Table;
            this.source = this.lookupsList.filter(x=> x.LookupID == 3);
            this.Status = this.lookupsList.filter(x=> x.LookupID == 1);
            this.Hotness = this.lookupsList.filter(x=> x.LookupID == 4);
            this.AddressType = this.lookupsList.filter(x=> x.LookupID == 2);
            this.assignedUserList = [{DisplayValue: "LoginUSer", DataValue: 1}];
          }
        }

      this.default_data = [
        { type:'Inboud Call', Created_By: 'Steve', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Created_t_d: 'Mar 11, 2020 4:07 AM' },
        { type:'Lead Assigned', Created_By: 'Simon', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Created_t_d: 'Mar 11, 2020 4:07 AM' },
        { type:'Email Sent', Created_By: 'Jane', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Created_t_d: 'Mar 11, 2020 4:07 AM' },
        { type:'Lead Assigned', Created_By: 'Larry', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Created_t_d: 'Mar 11, 2020 4:07 AM' },
      ];

    this.Task = [
      { type:'Inboud Call', assignee: 'Steve', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Lead Assigned', assignee: 'Simon', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Email Sent', assignee: 'Jane', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Lead Assigned', assignee: 'Larry', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Due_date: 'Mar 11, 2020 4:07 AM' }
    ];

    this.Compain = [
      { type:'Inboud Call', assignee: 'Steve', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Lead Assigned', assignee: 'Simon', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Email Sent', assignee: 'Jane', Description: 'It is stated here that we are announcing a holiday on 23rd March, 2020.', Due_date: 'Mar 11, 2020 4:07 AM' },
      { type:'Lead Assigned', assignee: 'Larry', Description: 'Contact assigned to Tahsin Ali Jafri by Tahsin Ali Jafri', Due_date: 'Mar 11, 2020 4:07 AM' }
    ];
  }

  
  
    // // toppings = new FormControl();
    // taglist: string[] = ['Birthday', 'Sample Tag', ];
    // Hotness: string[] = ['None', 'Hot', 'warm', 'Cold' ];
    // AddressType: string[] = ['Home', 'Main Office', 'Branch Office', 'Second Home', 'Investment', 'Mailing'];
    // Type: string[] = ['None', 'Client', 'Agent', 'Lender', 'Title Company', 'Inspector', 'Appraiser'];
    // Status: string[] = ['None', 'New', 'Prospecting', 'Active', 'Future', 'Close/Inactive', 'Non-Client', 'Soon'];
    // source: string[] = ['None', 'Facebook', 'Friend/Family/Refferal', 'My Website', 'Realtor.com', 'Trulia', 'Zillow'];
}

