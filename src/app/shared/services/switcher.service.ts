import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SwitcherService {
    constructor() { }
      //Switcher Notification
      private emitSwitcherSource = new Subject<any>();
      SwitcherChangeEmitted = this.emitSwitcherSource.asObservable();
      emitSwitcherChange(change: any){
        this.emitSwitcherSource.next(change);
      }
      openOffcanvas$: any;

}