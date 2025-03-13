import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-landingpage-layout',
  standalone:false,
  templateUrl: './landingpage-layout.component.html',
  styleUrls: ['./landingpage-layout.component.scss']
})
export class LandingpageLayoutComponent implements OnInit {
  currentRoute:  string | undefined;
  urlData:  string[] | undefined;
  constructor(  private router:Router, 
    ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
   }

  ngOnInit(): void {
  }

}
