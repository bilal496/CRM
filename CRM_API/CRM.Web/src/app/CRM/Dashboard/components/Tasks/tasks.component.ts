import { Component } from '@angular/core';
import { TablesDataService } from '../../../../pages/table/components/data-table/tablesData.service';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../../../../services/api-Methods/api-data.service';

@Component({
  selector: 'crm-tasks',
  templateUrl:`./tasks.component.html`,
  styleUrls:[`./tasks.component.scss`]
})
export class TasksComponent {
  title = 'CRM';
  showloading: boolean = false;
  public PieOption;
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  constructor( private _tablesDataService: TablesDataService
             , public _http: ApiDataService
             , private activatedRoute: ActivatedRoute){

  }
  ngOnInit(){
    // this.loadData();
    if (this.activatedRoute.snapshot.data !== undefined &&
      this.activatedRoute.snapshot.data.settings !== undefined &&
      this.activatedRoute.snapshot.data.settings.length > 0) {
        if (this.activatedRoute.snapshot.data.settings[0].Table !== undefined) {
          this.tableData = this.activatedRoute.snapshot.data.settings[0].Table;
          console.log(this.tableData);
        }
    }
    // this._http.httpGet('CRM', 'getTasks', null).subscribe
    // (
    //   x => this.tableData = x['Table']
    // );
  }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}
