import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advancedui',children:[ 
  {
    path: 'accordion',
    loadComponent: () =>
      import('./accordion/accordion.component').then((m) => m.AccordionComponent),
  },
  {
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then((m) => m.CarouselComponent),
},
  {
    path: 'tree-view',
    loadComponent: () =>
      import('./tree-view/tree-view.component').then((m) => m.TreeViewComponent),
  },
  {
    path: 'modals-closes',
    loadComponent: () =>
      import('./modals-closes/modals-closes.component').then((m) => m.ModalsClosesComponent),
  },
  {
    path: 'navbar',
    loadComponent: () =>
      import('./navbar/navbar.component').then((m) => m.NavbarComponent),
  },
  {
    path: 'offcanvas',
    loadComponent: () =>
      import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
  },
  {
    path: 'placeholders',
    loadComponent: () =>
      import('./placeholders/placeholders.component').then((m) => m.PlaceholdersComponent),
  },
  {
    path: 'ratings',
    loadComponent: () =>
      import('./ratings/ratings.component').then((m) => m.RatingsComponent),
  },
  {
    path: 'scrollspy',
    loadComponent: () =>
      import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
  },
  {
    path: 'swiperjs',
    loadComponent: () =>
      import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
  },
  {
    path: 'draggable-cards',
    loadComponent: () =>
      import('./draggable-cards/draggable-cards.component').then((m) => m.DraggableCardsComponent),
  },
  {
    path: 'ribbons',
    loadComponent: () =>
      import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}