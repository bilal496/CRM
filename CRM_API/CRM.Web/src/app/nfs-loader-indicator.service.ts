import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NfsLoaderIndicatorService {
  visible = new Subject<boolean>();
  myBool$: Observable<boolean>;

  constructor() {
    this.myBool$ = this.visible.asObservable();
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

  isVisible(): Observable<boolean> {
    return this.myBool$;
  }
}
