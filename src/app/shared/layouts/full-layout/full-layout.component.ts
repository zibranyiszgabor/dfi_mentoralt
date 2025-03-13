import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-full-layout',
  standalone:false,
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  public menuItems!: Menu[];

  currentRoute:  string | undefined;
  urlData:  string[] | undefined;
  constructor(
    private router:Router, 
    public navServices: NavService,
    private elementRef: ElementRef,
    public switcherService: SwitcherService,
    private renderer:Renderer2
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
       this.navServices.items.subscribe((menuItems: any) => {
     this.menuItems = menuItems;
   });
   let html = document.querySelector('html');

    if (window.innerWidth <= 992) {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close'
      );
    }
  }

  layoutClass: string = 'container-fluid'; // Default class

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updateLayoutClass();
    });

    this.updateLayoutClass();
  }
  private containerRoutes: string[] = ['/pages/about-us', '/pages/email/mailsettings'];

  private updateLayoutClass() {
    // Replace 'your-component-route' with the actual route of the component
    const currentRoute = this.router.url;
    this.layoutClass = this.containerRoutes.includes(currentRoute) ? 'container' : 'container-fluid';
  }
 
  clearNavDropdown() {
    this.menuItems?.forEach((a: any) => {
      a.active = false;
      a?.children?.forEach((b: any) => {
        b.active = false;
        b?.children?.forEach((c: any) => {
          c.active = false;
        });
      });
    });
  }
  clickonBody() {
    document.querySelector('#responsive-overlay')?.classList.remove('active');
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
    }
    html?.removeAttribute('data-icon-text');

    this.menuItem.active = !this.menuItem.active;

    if(html.getAttribute('data-nav-layout') =='horizontal' && window.innerWidth >= 992){this.clearNavDropdown();}
    const navStyle = document.documentElement.getAttribute('data-nav-style');
    if (navStyle === 'menu-click' || navStyle === 'menu-hover' || navStyle === 'icon-click' || navStyle === 'icon-hover') {
      document.querySelector('.double-menu-active')?.setAttribute('style', 'display: none;');
    }   
    document.querySelector('.header-search')?.classList.remove('searchdrop');
  }
  menuItem = {
    active: false,
  };
  closeMenu() {
    this.menuItems?.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      a?.children?.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
    });
  }
      
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }

  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    html?.setAttribute('data-toggled', 'close');
    document.querySelector('#responsive-overlay')?.classList.remove('active');
  }

}
