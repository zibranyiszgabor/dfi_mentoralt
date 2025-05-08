import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { StudentProfileEditComponent } from './pages/student-profile-edit/student-profile-edit.component';
import { StudentProfileViewComponent } from './pages/student-profile-view/student-profile-view.component';
import { JobPostRequestComponent } from './pages/job-post-request/job-post-request.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForcompanyComponent } from './pages/forcompany/forcompany.component';
import { GdprModalComponent } from 'pages/student-profile/student-gdpr-dialog/student-gdpr-dialog.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent // 👈 Landing külön layout nélkül
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },      
  {
    path: 'contact',
    component: ContactComponent,
  },      
  {
    path: 'forcompany',
    component: ForcompanyComponent,
  },        
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'profile-student-edit',
        component: StudentProfileEditComponent,
      },
      {
        path: 'profile-student-view',
        component: StudentProfileViewComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'student-gdpr',
        component: GdprModalComponent,
      },      
    ],
  },
  {
    path: 'job-post-request',
    component: JobPostRequestComponent
  },
];
