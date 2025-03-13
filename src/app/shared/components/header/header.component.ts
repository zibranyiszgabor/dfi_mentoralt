import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from '../../services/app-state.service';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { SwitcherComponent } from '../switcher/switcher.component';
interface Item {
  id: number;
  name: string;
  type: string;
  title: string;
  // Add other properties as needed
}
@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 4;
  notificationCount: number = 4;
  messagesCount: number = 5;
  constructor(
    private cdr: ChangeDetectorRef,  private modalService: NgbModal, 
    public elementRef: ElementRef,private appStateService: AppStateService, public navServices: NavService
  ) {
    
  }

  private offcanvasService = inject(NgbOffcanvas);
  toggleSwitcher() {
    this.offcanvasService.open(SwitcherComponent, {
      position: 'end',
      scroll: true,
    });
  }

  openRightSidebar() {
    this.offcanvasService.open(RightSidebarComponent, {
      position: 'end',
      scroll: true,
      panelClass:'sidebar-right'
    });

    document.querySelector('.sidebar-right')?.setAttribute("id","sidebar-right")
  }
      // Theme color Mode
      isCartEmpty: boolean = false;
      isNotifyEmpty: boolean = false;
      ismessageEmpty: boolean = false;
      removeRow(rowId: string) {
        const rowElement = document.getElementById(rowId);
        if (rowElement) {
          rowElement.remove();
        }
        this.cartItemCount--;
        this.isCartEmpty = this.cartItemCount === 0;
        
      }
      removeNotify(rowId: string) {
        const rowElement = document.getElementById(rowId);
        if (rowElement) {
          rowElement.remove();
        }
        this.notificationCount--;
        this.isNotifyEmpty = this.notificationCount === 0;
      }
      removeMessage(rowId: string) {
        const rowElement = document.getElementById(rowId);
        if (rowElement) {
          rowElement.remove();
        }
        this.messagesCount--;
        this.ismessageEmpty = this.messagesCount === 0;
      }
      handleCardClick(event:Event): void {
        // Prevent the click event from propagating to the container
        // event.preventDefault();
        event.stopPropagation();
      }
      themeType = 'dark';
      updateTheme(theme: string) {
        this.appStateService.updateState({ theme , menuColor:theme });
        if(theme=='light'){
          this.appStateService.updateState({ theme,themeBackground : '',headerColor:'light',menuColor:'light' });
          let html = document.querySelector('html');
            html?.style.removeProperty( '--body-bg-rgb');
            html?.style.removeProperty( '--body-bg-rgb2');
            html?.style.removeProperty( '--light-rgb');
            html?.style.removeProperty( '--form-control-bg');
            html?.style.removeProperty( '--input-border' );
            html?.setAttribute('data-toggled', 'close');
            html?.setAttribute('data-toggled', window.innerWidth <= 992 ? 'close' : '');
          }
        if(theme=='dark'){
          this.appStateService.updateState({ theme,themeBackground : '',headerColor:'dark',menuColor:'dark' });
          let html = document.querySelector('html');
            html?.style.removeProperty( '--body-bg-rgb');
            html?.style.removeProperty( '--body-bg-rgb2');
            html?.style.removeProperty( '--light-rgb');
            html?.style.removeProperty( '--form-control-bg');
            html?.style.removeProperty( '--input-border' );
            // html?.style.removeProperty('--primary');
            // html?.style.removeProperty('--primary-rgb');
          
            html?.setAttribute('data-toggled', 'close');
              html?.setAttribute('data-toggled', window.innerWidth <= 992 ? 'close' : '');
        }
        document.querySelector('.header-search')?.classList.remove('searchdrop');
      }
     
      isFullscreen: boolean = false;
      toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
      }

      toggleSidebar() {
        let html = this.elementRef.nativeElement.ownerDocument.documentElement;
        if (html?.getAttribute('data-toggled') == 'true') {
          document.querySelector('html')?.getAttribute('data-toggled') ==
            'icon-overlay-close';
        }
        else if (html?.getAttribute('data-nav-style') == 'menu-click') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'menu-click-closed'
              ? ''
              : 'menu-click-closed'
          );
        } else if (html?.getAttribute('data-nav-style') == 'menu-hover') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'menu-hover-closed'
              ? ''
              : 'menu-hover-closed'
          );
        } else if (html?.getAttribute('data-nav-style') == 'icon-click') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'icon-click-closed'
              ? ''
              : 'icon-click-closed'
          );
        } else if (html?.getAttribute('data-nav-style') == 'icon-hover') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'icon-hover-closed'
              ? ''
              : 'icon-hover-closed'
          );
        }
        else if (html?.getAttribute('data-vertical-style') == 'overlay') {
          html?.setAttribute(
            'data-vertical-style','overlay' 
          );
          html?.setAttribute(
            'data-toggled', html?.getAttribute('data-toggled') == 'icon-overlay-close'
            ? ''
            : 'icon-overlay-close'
          );
        } else if (html?.getAttribute('data-vertical-style')  == 'overlay') {
          document.querySelector('html')?.getAttribute('data-toggled') != null
            ? document.querySelector('html')?.removeAttribute('data-toggled')
            : document
                .querySelector('html')
                ?.setAttribute('data-toggled', 'icon-overlay-close');
        } else if (html?.getAttribute('data-vertical-style') == 'closed') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'close-menu-close'
              ? ''
              : 'close-menu-close'
          );
        } else if (html?.getAttribute('data-vertical-style') == 'icontext') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'icon-text-close'
              ? ''
              : 'icon-text-close'
          );
        } else if (html?.getAttribute('data-vertical-style') == 'detached') {
          html?.setAttribute(
            'data-toggled',
            html?.getAttribute('data-toggled') == 'detached-close'
              ? ''
              : 'detached-close'
          );
        }else if (html?.getAttribute('data-vertical-style') == 'doublemenu') {
          html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'double-menu-close' && document.querySelector(".slide.open")?.classList.contains("has-sub") && document.querySelector('.double-menu-active') ? 'double-menu-open': 'double-menu-close' );
        }

        // if (window.innerWidth <= 992) {
        //   html?.setAttribute(
        //     'data-toggled',
        //     html?.getAttribute('data-toggled') == 'open' ? 'close' : 'open'
        //   );
        // }
      }
    
        // Search
  public menuItems!: Menu[];
  public items!: Menu[];
  public text!: string;
  public SearchResultEmpty:boolean = false;
  ngOnInit(): void {
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
  }
    Search(searchText: string) {
      if (!searchText) return this.menuItems = [];
      // items array which stores the elements
      const items:Item[] = [];
      // Converting the text to lower case by using toLowerCase() and trim() used to remove the spaces from starting and ending
      searchText = searchText.toLowerCase().trim();
      this.items.filter((menuItems:Menu) => {
        // checking whether menuItems having title property, if there was no title property it will return
        if (!menuItems?.title) return false;
        //  checking wheteher menuitems type is text or string and checking the titles of menuitems
        if (menuItems.type === 'link' && menuItems.title.toLowerCase().includes(searchText)) {
          // Converting the menuitems title to lowercase and checking whether title is starting with same text of searchText
          if( menuItems.title.toLowerCase().startsWith(searchText)){ // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(menuItems))
            // If both are matching then the code is pushed to items array
            items.push(menuItems as Item);
          }
        }
        //  checking whether the menuItems having children property or not if there was no children the return
        if (!menuItems.children) return false;
        menuItems.children.filter((subItems:Menu) => {
          if (!subItems?.title) return false; 
          if (subItems.type === 'link' && subItems.title.toLowerCase().includes(searchText)) {
            if( subItems.title.toLowerCase().startsWith(searchText)){         // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subItems))
              items.push(subItems as Item);
            }
  
          }
          if (!subItems.children) return false;
          subItems.children.filter((subSubItems:Menu) => {
            if (subSubItems.title?.toLowerCase().includes(searchText)) {
              if( subSubItems.title.toLowerCase().startsWith(searchText)){ // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subSubItems))
                items.push(subSubItems as Item);
                
              }
            }
          });
          return true;
        });
        return this.menuItems = items;
      });
      // Used to show the No search result found box if the length of the items is 0
      if(!items.length){
        this.SearchResultEmpty = true;
      }
      else{
        this.SearchResultEmpty = false;
      }
      return true;
    }
    SearchModal(SearchModal: any) {
      this.modalService.open(SearchModal);
    }
    //  Used to clear previous search result
    clearSearch() {    
      const headerSearch = document.querySelector('.header-search');
      if (headerSearch) {
          headerSearch.classList.remove('searchdrop');
      }
      this.text = '';
      this.menuItems = [];
      this.SearchResultEmpty = false;
      return this.text, this.menuItems;
      
    }
    SearchHeader() {
      document
      .querySelector('.header-search')
      ?.classList.toggle('searchdrop');
    }

    ngOnDestroy(): void {
      const windowObject: any = window;
      let html = this.elementRef.nativeElement.ownerDocument.documentElement;
   
      window.addEventListener('resize', () => {
        if (localStorage.getItem('sashverticalstyles') != 'icon-text-close') {
          if (windowObject.innerWidth <= '991') {
            html?.setAttribute('data-toggled', 'open');
          } else {
            if (!(localStorage.getItem('sashverticalstyles') == 'doublemenu')) {
              html?.removeAttribute('data-toggled');
            }
          }
        } else {
          document
            .querySelector('html')
            ?.setAttribute('data-toggled', 'icon-text-close');
        }
      });
    }
}

