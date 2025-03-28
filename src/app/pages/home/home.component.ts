import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, HostListener, Renderer2, ViewChild, inject,} from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxColorsModule } from 'ngx-colors';
import { NgbOffcanvas,NgbAccordionModule, NgbModule   } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { ColorPickerModule } from 'ngx-color-picker';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [CommonModule,RouterModule,MatIconModule,FormsModule ,NgbModule,
    NgxColorsModule,NgbAccordionModule ,CarouselModule,ColorPickerModule,CommonModule],
  providers:[NgbOffcanvas ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  isYearly: boolean = false;

  thumbsSwiper: any;
    constructor(
    public renderer: Renderer2,
    private el: ElementRef,
    private modalService: NgbModal,
    private authService: AuthService,

    private elementRef: ElementRef,private sanitizer: DomSanitizer,   private viewScroller: ViewportScroller
  ){
    document.body.classList.add('landing-body');
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
  this.renderer.removeAttribute(htmlElement, 'data-header-styles');
  this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
  this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
  this.renderer.removeAttribute(htmlElement, 'loader');
  this.renderer.removeAttribute(htmlElement, 'data-width');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb2');
  this.renderer.removeAttribute(htmlElement, 'light-rgb');
  htmlElement.removeAttribute('style');
  if (window.innerWidth <= 992) {
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }else {
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
  }
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		 pagination:{
      clickable:true
     },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			500: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1400: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			
		  },
	  });
    
    const swiperEl1 = this.swiperContainer1.nativeElement;
	
		Object.assign(swiperEl1, {
		  slidesPerView: 5,
		  spaceBetween: 5,
		  breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			  },
			500: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1110: {
			  slidesPerView: 4,
			  spaceBetween: 10,
			},
			1400: {
			  slidesPerView: 5,
			  spaceBetween: 10,
			},
		  },
	  });
	}
  private offcanvasService = inject(NgbOffcanvas);
  openSwitcher(content:any) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  
  input1: string = "#00897B";
   scrolled: boolean = false;
  SwitcherService: any;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  body!: HTMLBodyElement | null;

  color1 = '#845adf';
  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;
  
    const dynamicPrimaryLight = document.querySelectorAll(
      'button.pcr-button'
    );
  
    this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
    localStorage.setItem('xintra-primary-mode', this.hexToRgba(this.color1) || '');
    localStorage.setItem('xintralight-mode', 'true');
    this.body?.classList.remove('transparent-mode');
    // Adding
    this.body?.classList.add('light-mode');
    // Removing
    this.body?.classList.remove('dark');
    this.body?.classList.remove('bg-img1');
  }
  handleThemeUpdate(cssVars: any) {
    const root: any = document.querySelector(':root');
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
   isValidHex = (hexValue: any) =>
    /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  
   getChunksFromString = (st: any, chunkSize: any) =>
    st.match(new RegExp(`.{${chunkSize}}`, 'g'));
  // convert hex value to 256
   convertHexUnitTo256 = (hexStr: any) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  hexToRgba(hexValue: any) {
    if (!this.isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
    return `${r}, ${g} ,${b}`;
  }
  //primary theme color
 dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--primary-rgb`;

    this.handleThemeUpdate({
      [cssPropName1]: this.hexToRgba(color),
    });
  });
}

localStorageBackUp() {
  let html = document.querySelector('html');
  if (localStorage.getItem('dir') == 'rtl') {
    html?.setAttribute("dir", 'rtl');
  }
  if (localStorage.getItem('xintradarktheme')) {
    const type: any = localStorage.getItem('xintradarktheme');
    html?.setAttribute('data-theme-mode', type);
   
  }
  if (localStorage.getItem("xintra-primary-mode")) { 
    const type: any = localStorage.getItem("xintra-primary-mode");
    html?.style.setProperty('--primary-rgb', type);
  }
}
public show: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);
  
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  isActive: boolean = false;
scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
  this.isActive = true; 
}
isDataToggled = false;
 
  expande = false;
  expande1 = false;
  expande2 = false;
 

    toggleExpand(): void {
      if (window.innerWidth <= 992) {
      document.querySelector('.child3')?.classList.add('force-left');
      } else  if (window.innerWidth > 992) { {
        document.querySelector('.child3')?.classList.remove('force-left');
      }
    }

    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }

  }
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }
  ngOnInit(): void {
 
    this.localStorageBackUp();
    this.checkWindowSize();
   
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }
  private checkWindowSize() {
    const htmlElement = this.el.nativeElement; // Get the component's root element
    const screenWidth = window.innerWidth;

    if (screenWidth < 992) {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    }
  }
  ngOnDestroy(): void {
    document.body.classList.remove('landing-body');    
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  } 
  themeChange(type: string, type1: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('xintraHeader', type1);
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
    localStorage.setItem('xintraMenu', type1);
    this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
    localStorage.setItem('xintradarktheme', type1);
  }
  localdata:any=localStorage;
  //  Directions
  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('dir', type);
  }

  //Theme Primary
  primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type
    );
    localStorage.setItem('xintra-primary-mode', type);
    localStorage.removeItem('xintralight-primary-color');
  }

  //reset switcher

  reset() {
    localStorage.clear();
    const html: any =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const body: any = document.querySelector('body');
    html.style = '';
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-header-styles', 'light');
    html.setAttribute('data-nav-layout', 'horizontal');
    html.setAttribute('data-menu-position', 'fixed');
    html.setAttribute('data-theme-mode', 'light');
    html.removeAttribute('data-menu-styles');

    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
    const ltrclickchecked = document.getElementById(
      'switcher-ltr'
    ) as HTMLInputElement;
    if (ltrclickchecked) {
      ltrclickchecked.checked = true;
    }
  }
  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }
 
  taptotop(){
    let body:any = document.querySelector('body')
    body.style. scrollBehavior = 'smooth';
    this.viewScroller.scrollToPosition([0,0]);
  }
 
  sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }


  
  

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  loginAsEmployee(): void {
    console.log('🔹 Dolgozóként történő bejelentkezés...');
    this.authService.loginAsEmployee(); // 🔹 Dolgozói bejelentkezés
  }

  loginAsStudent(): void {
    console.log('🔹 Diákként történő bejelentkezés...');
    this.authService.loginAsStudent(); // 🔹 Diák bejelentkezés
  }

}
