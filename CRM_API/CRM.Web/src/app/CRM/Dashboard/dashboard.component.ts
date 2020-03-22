import { Component, OnInit } from '@angular/core';
import { TablesDataService } from '../../pages/table/components/data-table/tablesData.service';
import { ChartsService } from '../../pages/charts/components/echarts/charts.service';

@Component({
  selector: 'crm-home',
  templateUrl: `./dashboard.component.html`,
  styleUrls:[`./dashboard.component.scss`],


})
export class DashboardComponent implements OnInit{
  showloading: boolean = false;
  title = 'CRM';
  public PieOption;
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  constructor(){

  }
  ngOnInit(){


  }

}
