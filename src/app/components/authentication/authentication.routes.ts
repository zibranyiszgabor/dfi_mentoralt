import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'custom',children:[ 
  {
    path: 'coming-soon',
    loadComponent: () =>
      import('./coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
  },
  {
  path: 'sign-in',
  loadComponent: () =>
    import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
},
{
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: 'create-password',
    loadComponent: () =>
      import('./create-password/create-password.component').then((m) => m.CreatePasswordComponent),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
  },
  {
    path: 'lockscreen',
    loadComponent: () =>
      import('./lockscreen/lockscreen.component').then((m) => m.LockscreenComponent),
  },
  {
    path: 'two-step-verification',
    loadComponent: () =>
      import('./two-step-verification/two-step-verification.component').then((m) => m.TwoStepVerificationComponent),
  },
  {
    path: 'under-maintenance',
    loadComponent: () =>
      import('./under-maintenance/under-maintenance.component').then((m) => m.UnderMaintenanceComponent),
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}