import { Component, OnInit } from '@angular/core';
import { NfsLoaderIndicatorService } from '../../nfs-loader-indicator.service';

@Component({
  selector: 'nfs-loader-indicator',
  templateUrl: './nfs-loader-indicator.component.html',
  styleUrls: ['./nfs-loader-indicator.component.scss']
})
export class NfsLoaderIndicatorComponent implements OnInit {

  constructor(public spinner: NfsLoaderIndicatorService) { }

  ngOnInit() {
  }
}