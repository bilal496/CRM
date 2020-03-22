import { Component } from '@angular/core';
import { TablesDataService } from '../../../../pages/table/components/data-table/tablesData.service';

@Component({
  selector: 'crm-compaigns',
  templateUrl: `./compaigns.component.html`,
  styleUrls:[`./compaigns.component.scss`]
})
export class CompaignsComponent {
  title = 'CRM';
  showloading: boolean = false;
  public PieOption;
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  constructor( private _tablesDataService: TablesDataService){

  }
  ngOnInit(){
    this.loadData();

  }
  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}
