import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[ 
  {
    path: 'full-calender',
    loadComponent: () =>
      import('./fullcalendar/fullcalendar.component').then((m) => m.FullcalendarComponent),
  },
  {
  path: 'gallery',
  loadComponent: () =>
    import('./gallery/gallery.component').then((m) => m.GalleryComponent),
},
{
  path: 'sweet-alerts',
  loadComponent: () =>
    import('./sweet-alerts/sweet-alerts.component').then((m) => m.SweetAlertsComponent),
},  
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}