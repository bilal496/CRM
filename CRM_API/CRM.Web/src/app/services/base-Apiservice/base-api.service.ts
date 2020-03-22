import { Injectable } from '@angular/core';
import { ApicommunicationService } from '../api-Methods/api-communication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseapiService <T, ID> extends ApicommunicationService<T, ID> {

  constructor(protected http: HttpClient) {
    super(http);
    console.log('BaseService');
   }

}

