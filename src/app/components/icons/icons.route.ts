import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'icons',
    loadComponent: () =>
      import('./icons.component').then((m) => m.IconsComponent),
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class iconsRoutingModule {
  static routes = admin;
}