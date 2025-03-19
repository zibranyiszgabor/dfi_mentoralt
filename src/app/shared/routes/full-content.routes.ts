import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardRoutingModule } from '../../../app/components/dashboard/dashboard.routes';

export const content: Routes = [

  { path: '', children: [
    ...dashboardRoutingModule.routes,
  ]}

];
@NgModule({
  imports: [RouterModule],
    // imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
