import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const landing: Routes = [
     {path:'', loadChildren : () => import('../../../app/components/pages/landing.route').then(r => r.landingRoutingModule)},
    
]

