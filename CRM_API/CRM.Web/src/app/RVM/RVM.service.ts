import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { rvmDropdown } from "./rvmDropdownmodel";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Action } from "rxjs/internal/scheduler/Action";
import { jsonpFactory } from "@angular/http/src/http_module";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RVMService {
  constructor(private http: HttpClient) {}

  getFiles(): any {
    return this.http.get("http://localhost/CRM_API/api/RVM/GetFiles");

    // this.http
    //   .get("http://localhost/CRM_API/api/RVM/GetFiles")
    //   .pipe(map(res => res.json()));
  }

  sendRVM(to, URL): any {
    var body = "TO=" + to + "&URL=" + URL + "";
    var result: any;
    return this.http.get(
      "http://localhost/CRM_API/api/ytelApi/SendRVM?TO=" +
        to +
        "&URL=" +
        URL +
        ""
    );
    // .subscribe(
    //   data => {
    //     result= data;
    //   }
    // );

    //return result;
  }
}
