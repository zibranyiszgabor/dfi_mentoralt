import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  dirchange?: boolean;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
  selected?: boolean;
  menutype?:string;

}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerwidth < 991) {
          this.collapseSidebar = false;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = false;
      });
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  ngOnDestroy() {
    this.unsubscriber.next(true);
    this.unsubscriber.complete();
  }

  MENUITEMS: Menu[] = [
    //title
    { headTitle: 'Main' },
    {
      title: 'Dashboard',
      path: '/dashboard',
      type: 'link',
      icon: 'fe fe-home',
      active: false,
      selected:false
    },
    {
      title: 'Error Pages',
      icon: 'fe fe-alert-triangle',
      type: 'sub',
      active: false,
      children: [
        { path: '/custom/error404', title: '404 Error', type: 'link' },
      ],
    },
    { headTitle: 'WEB APPS' },
    {
      title: 'Nested Menu',
      icon: 'fe fe-grid',
      type: 'sub',
      active: false,
      children: [
        { title: 'Nested-1', type: 'empty' },
        {
          title: 'Nested-2',
          type: 'sub',
          children: [
            { title: 'Nested-2.0', type: 'empty' },
            { title: 'Nested-2.1', type: 'empty' },
            { title: 'Nested-2.2', type: 'sub', active: false, children: [
                { title: 'Nested-2.2.1', type: 'empty' },
                { title: 'Nested-2.2.2', type: 'empty' }
              ],
            },
          ],
        },
      ],
    },
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
