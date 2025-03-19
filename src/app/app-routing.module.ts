import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { content } from './shared/routes/full-content.routes';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 🔹 Login legyen a kezdőoldal
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }, // 🔹 Login legyen a kezdőoldal
  { path: 'home', component: HomeComponent }, // 🔹 Védett oldal
 // { path: 'login', component: LoginComponent },
  { path: 'content', component: FullLayoutComponent, children: content },
  //{ path: '**', redirectTo: 'login' } // 🔹 Ha az oldal nem létezik, loginra irányítjuk
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
