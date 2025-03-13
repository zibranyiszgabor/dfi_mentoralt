import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
export const landing: Routes = [
    {path:'',children:[
        {
            path: 'landing',
            loadComponent: () =>
              import('./landing/landing.component').then((m) => m.LandingComponent),
          },

      
    ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(landing)],
    exports: [RouterModule],
  })
  export class landingRoutingModule {
    static routes = landing;
  }