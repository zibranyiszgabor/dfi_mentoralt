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
    { headTitle: 'UI KIT' },
    {
      title: 'Apps',
      icon: 'fe fe-slack',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/apps/full-calender',
          title: 'Full calender',
          type: 'link',
          active: false,
        },
        {
          path: '/apps/gallery',
          title: 'Gallery',
          type: 'link',
          active: false,
        },
        {
          path: '/apps/sweet-alerts',
          title: 'Sweet Alerts',
          type: 'link',
        },


      ],
    },
    {
      title: 'UI Elements',
      icon: 'fe fe-package',
      type: 'sub',
      menutype:'mega-menu',
      active: false,
      children: [
        { path: '/elements/alerts', title: 'Alerts', type: 'link' },
        { path: '/elements/badge', title: 'Badge', type: 'link' },
        { path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
        { path: '/elements/buttons', title: 'Buttons', type: 'link' },
        { path: '/elements/button-group', title: 'Button Group', type: 'link' },
        { path: '/elements/cards', title: 'cards', type: 'link' },
        { path: '/elements/dropdowns', title: 'Dropdown', type: 'link' },
        { path: '/elements/images-figures', title: 'Images & Figures', type: 'link' },
        { path: '/elements/list-group', title: 'List Group', type: 'link' },
        { path: '/elements/navs-tabs', title: 'Navs & Tabs', type: 'link' },
        {
          path: '/elements/object-fit',
          title: 'Object Fit',
          type: 'link',
        },
        { path: '/elements/pagination', title: 'Pagination', type: 'link' },
        { path: '/elements/popover', title: 'Popovers', type: 'link' },
        { path: '/elements/progress', title: 'Progress', type: 'link' },
        { path: '/elements/spinners', title: 'Spinners', type: 'link' },
        { path: '/elements/toast', title: 'Toast', type: 'link' },
        { path: '/elements/tooltips', title: 'Tooltips', type: 'link' },
        { path: '/elements/typography', title: 'Typography', type: 'link' },
      ],
    },
    {
      title: 'Utilities',
      icon: 'fe fe-zap',
      type: 'sub',
      active: false,
      children: [
        { path: '/utilities/avatars', title: 'Avatars', type: 'link' },
        { path: '/utilities/borders', title: 'Borders', type: 'link' },
        { path: '/utilities/breakpoints', title: 'BreakPoints', type: 'link' },
        { path: '/utilities/colors', title: 'Colors', type: 'link' },
        { path: '/utilities/columns', title: 'Columns', type: 'link' },
        { path: '/utilities/flex', title: 'Flex', type: 'link' },
        { path: '/utilities/gutters', title: 'Gutters', type: 'link' },
        { path: '/utilities/helpers', title: 'Helpers', type: 'link' },
        { path: '/utilities/position', title: 'Position', type: 'link' },
        { path: '/utilities/more', title: 'Additional Content', type: 'link' },
      ],
    },
    { headTitle: 'Pre Build Pages' },
    {
      title: 'Pages',
      icon: 'fe fe-layers',
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'About Us',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/about-us',
        },
        {
          title: 'Blog',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Blog',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/blog/blog',
            },
            {
              title: 'Blog Details',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/blog/blogdetails',
            },
            {
              title: 'Create Blog',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/blog/createblog',
            },
          ],
        },
        {
          title: 'Chat',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/chat',
        },
        { path: '/pages/contacts', title: 'Contacts', type: 'link' },
        {
          title: 'Ecommerce',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Add Products',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/addproducts',
            },
            {
              title: 'Cart',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/cart',
            },
            {
              title: 'Checkout',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/checkout',
            },
            {
              title: 'Edit Products',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/editproducts',
            },
            {
              title: 'Order Details',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/order-details',
            },
            {
              title: 'Orders',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/orders',
            },

            {
              title: 'Products',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/products',
            },
            {
              title: 'Product Details',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/productdetails',
            },
            {
              title: 'Products List',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/productslist',
            },
            {
              title: 'Wishlist',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/ecommerce/wishlist',
            },
          ],
        },
        {
          title: 'Email',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Mail Inbox',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/email/mail-inbox',
            },
            {
              title: 'Mail Read',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/email/mail-read',
            },
            {
              title: 'Mail Settings',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/email/mailsettings',
            },
          ],
        },
        {
          title: 'Empty',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/empty',
        },
        {
          title: "FAQ'S",
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/faqs',
        },
        {
          title: 'File manager',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/pages/filemanager/filemanager',
              title: 'File Manager',
              type: 'link',
            },
            {
              path: '/pages/filemanager/filemanager-list',
              title: 'File Manager List',
              type: 'link',
            },
            {
              path: '/pages/filemanager/file-details',
              title: 'File Details',
              type: 'link',
            },

          ],
        },
        {
          title: 'Invoice',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Create Invoice',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/invoice/createinvoice',
            },
            {
              title: 'Invoice-Details',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/invoice/invoicedetails',
            },
            {
              title: 'Invoice List',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/invoice/invoicelist',
            },
          ],
        },
        {
          path: '/landing',
          title: 'Landing',
          type: 'link',
          icon: 'ti-layout',
          active: false,
        },
        {
          title: 'Notifications',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/notifications',
        },
        {
          title: 'Pricing',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/pricing',
        },
        {
          title: 'Profile',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/profile',
        },
        {
          title: 'Reviews',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/reviews',
        },
        {
          title: 'Team',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/team',
        },
        {
          title: 'Terms Conditions',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/terms-conditions',
        },
        {
          title: 'Timeline',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Timeline-1',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/timeline/timeline-1',
            },
            {
              title: 'Timeline-2',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/pages/timeline/timeline-2',
            },
          ]
        },
        {
          title: 'To Do List',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/pages/to-do-list',
        },
      ],
    },
    {
      title: 'Authentication',
      icon: 'fe fe-users',
      type: 'sub',
      active: false,
      children: [
        { path: '/custom/coming-soon', title: 'Coming Soon', type: 'link' },
        { path: '/custom/create-password', title: 'Create Password', type: 'link' },
        { path: '/custom/lockscreen', title: 'Lock Screen', type: 'link' },
        {
          path: '/custom/reset-password',
          title: 'Reset Password',
          type: 'link',
        },
        { path: '/custom/sign-up', title: 'Sign Up', type: 'link' },
        { path: '/custom/sign-in', title: 'Sign In', type: 'link' },
        { path: '/custom/two-step-verification', title: 'Two Step Verification', type: 'link' },
        {
          path: '/custom/under-maintenance',
          title: 'Under Maintenance',
          type: 'link',
        },
      ],
    },
    {
      title: 'Error Pages',
      icon: 'fe fe-alert-triangle',
      type: 'sub',
      active: false,
      children: [
        { path: '/custom/error400', title: '400 Error', type: 'link' },
        { path: '/custom/error401', title: '401 Error', type: 'link' },
        { path: '/custom/error403', title: '403 Error', type: 'link' },
        { path: '/custom/error404', title: '404 Error', type: 'link' },
        { path: '/custom/error500', title: '500 Error', type: 'link' },
        { path: '/custom/error503', title: '503 Error', type: 'link' },
      ],
    },

    { headTitle: 'General' },
    {
      title: 'Forms',
      type: 'sub',
      icon: 'fe fe-file-text',
      active: false,
      children: [
        {
          title: 'Form Elements',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/forms-elements/inputs',
              title: 'Inputs',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/checks-radios',
              title: 'Check & Radios',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/input-group',
              title: 'Input Group',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/input-masks',
              title: 'Input Masks',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/form-select',
              title: 'Form Select',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/range-slider',
              title: 'Range Slider',
              type: 'link',
            },

            {
              path: '/forms/forms-elements/file-uploads',
              title: 'File Uploads',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/date-time-picker',
              title: 'Date Time Picker',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/color-picker',
              title: 'Color pickers',
              type: 'link',
            },
          ],
        },
        {
          path: '/forms/floating-labels',
          title: 'Floating Labels',
          type: 'link',
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
        },
        {
          title: 'Form Editors',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/form-editor/quill-editor',
              title: 'Quill Editor',
              type: 'link',
            },
          ],
        },
        {
          path: '/forms/validation',
          title: 'Validation',
          type: 'link',
        },
        {
          path: '/forms/select2',
          title: 'select2',
          type: 'link',
        },
      ],
    },
    {
      title: 'Advanced UI',
      icon: 'fe fe-cpu',
      type: 'sub',
      active: false,
      children: [
        { path: '/advancedui/accordion', title: 'Accordion & Collapse', type: 'link' },
        { path: '/advancedui/carousel', title: 'Carousel', type: 'link' },
        {
          path: '/advancedui/draggable-cards',
          title: 'Draggable-Cards',
          type: 'link',
        },
        { path: '/advancedui/modals-closes', title: 'Modals & Closes', type: 'link' },
        { path: '/advancedui/navbar', title: 'Navbar', type: 'link' },
        { path: '/advancedui/offcanvas', title: 'Offcanvas', type: 'link' },
        { path: '/advancedui/placeholders', title: 'Placeholders', type: 'link' },
        { path: '/advancedui/ratings', title: 'Ratings', type: 'link' },
        { path: '/advancedui/scrollspy', title: 'Scrollspy', type: 'link' },
        { path: '/advancedui/swiperjs', title: 'Swiper Js', type: 'link' },
        { path: '/advancedui/tree-view', title: 'Treeview', type: 'link' },
        { path: '/advancedui/ribbons', title: 'Ribbons', type: 'link' },
      ],
    },
    {
      title: 'Widgets',
      icon: 'fe fe-aperture',
      active: false,
      selected: false,
      path: '/widgets',
      dirchange: false,
      badgeValue:'Hot',
      badgeClass:'danger-transparent',
      type: 'link',
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

    { headTitle: 'Tables' },
    {
      title: 'Tables',
      icon: 'fe fe-layout',
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Tables',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/tables',
        },
        {
          title: 'ngx-easy-table',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/ngx-easy-table',
        },
        {
          title: 'Angular Material Tables',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/angular-material-table',
        },
      ],
    },
     //TABLES
     { headTitle: 'MAPS & ICONS' },
     {
       title: 'Maps',
       icon: 'fe fe-map-pin',
       dirchange: false,
       type: 'sub',
       active: false,
       children: [
         {
           title: 'Google Maps',
           dirchange: false,
           type: 'link',
           active: false,
           selected: false,
           path: '/maps/google-map',
         },
         {
           title: 'Leaflet Maps',
           dirchange: false,
           type: 'link',
           active: false,
           selected: false,
           path: '/maps/leaflet-map',
         },

       ],
     },
     {
       title: 'Icons',
       icon: 'fe fe-wind',
       active: false,
       selected: false,
       path: '/icons',
       dirchange: false,
       type: 'link',
     },
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
