import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../../pages/charts/components/echarts/charts.service';
import { TablesDataService } from '../../../pages/table/components/data-table/tablesData.service';
import { ActionsSubject } from '@ngrx/store';
import { ApiDataService } from '../../../services/api-Methods/api-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crm-root',
  templateUrl: `./dashboardInfo.component.html`,
  styleUrls:[`./dashboardInfo.component.scss`],
  providers: [ChartsService,TablesDataService]

})
export class DashboardInfoComponent implements OnInit{
  showloading: boolean = false;
  title = 'CRM';
  public PieOption;
  tableData: Array<any>;
  contacts = "0";
  tasks = "0";
  compaigns = "0";
  feedbacks = "0";
  conDisabled = true;
  comDisabled = true;
  feedDisabled = true;
  taskDisabled = true;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  constructor(private _chartsService: ChartsService
            , private _tablesDataService: TablesDataService
            , public service: ActionsSubject
            , public _http: ApiDataService
            , private activatedRoute: ActivatedRoute
            , private route: Router){
  }

  ngOnInit(){
    // this.PieOption = this._chartsService.getPieOption();
    // this.loadData();
    if (this.activatedRoute.snapshot.data !== undefined &&
      this.activatedRoute.snapshot.data.settings !== undefined &&
      this.activatedRoute.snapshot.data.settings.length > 0) {
        if (this.activatedRoute.snapshot.data.settings[0].Table !== undefined) {
          this.tableData = this.activatedRoute.snapshot.data.settings[0].Table;
          console.log(this.tableData);
          if (this.tableData != undefined && this.tableData != null
              && this.tableData[0] != undefined && this.tableData[0] != null) {
                this.contacts = this.tableData[0].Contacts;
                this.tasks = this.tableData[0].tasks;
                this.compaigns = this.tableData[0].Comapigns;
                this.feedbacks = this.tableData[0].feedBacks;
                if ( this.contacts != "0") {
                    this.conDisabled = false;
                }
                if (this.tasks != "0") {
                  this.taskDisabled = false;
                }
                if (this.compaigns != "0") {
                  this.comDisabled = false;
                }
                if (this.feedbacks != "0") {
                  this.feedDisabled = false;
                }
          }
        }
    }
  }
  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  redirect(value) {
    if(value == "contacts") {
      this.route.navigateByUrl("/crm/dashboard/contacts");
    } else if (value == "tasks") {
      this.route.navigateByUrl("/crm/dashboard/tasks");
    } else if (value == "compaigns") {
      this.route.navigateByUrl("/crm/dashboard/compaigns");
    } else if (value == "feedbacks") {
      this.route.navigateByUrl("/crm/dashboard/feedbacks");
    }
  }
}
