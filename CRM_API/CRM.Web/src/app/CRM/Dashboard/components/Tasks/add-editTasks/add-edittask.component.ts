import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../../../../animations';
import { Task } from '../../../../models/task';
import { ApiDataService } from '../../../../../services/api-Methods/api-data.service';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-edittasks',
  templateUrl: `./add-edittask.component.html`,
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' },
  styleUrls:[`./add-edittask.component.scss`]
})
export class TaskAddEditComponent implements OnInit {

  task: Task;
  lookupsList: any[];
  categoryList: any[];
  assigneToList: any[];

  constructor(public _http: ApiDataService
            , public router: Router
            , private activatedRoute: ActivatedRoute){
    this.task = new Task();
  }
  ngOnInit() {
    if (this.activatedRoute.snapshot.data !== undefined &&
      this.activatedRoute.snapshot.data.settings !== undefined &&
      this.activatedRoute.snapshot.data.settings.length > 0) {
      if (this.activatedRoute.snapshot.data.settings[0].Table !== undefined) {
        this.lookupsList = this.activatedRoute.snapshot.data.settings[0].Table;
        this.categoryList = this.lookupsList.filter(x=> x.LookupID == 5);
        this.assigneToList = this.lookupsList.filter(x=> x.LookupID == 6);
      }
    }
  }

  AddTask() {
    console.log(this.task);
    this._http.httpPost('CRM', 'AddTask', { task: this.task }).subscribe(
      x=> { console.log(x);
            swal({
              title: 'Automated REI - CRM',
              text: 'Task Successfully Added.',
              type: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.value) {
                this.router.navigateByUrl('/crm/dashboard/tasks');
              }
            });
          }
    );
  }
}
