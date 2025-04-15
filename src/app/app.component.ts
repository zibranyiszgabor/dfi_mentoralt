import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { GdprModalComponent } from './pages/student-profile/student-gdpr-dialog/student-gdpr-dialog.component';
import { NgIf } from '@angular/common';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GdprModalComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private msalService = inject(MsalService);
  private router = inject(Router);
  public isLoggedIn = false;
  public showGdprModal = false;

  title = 'dfi';

  constructor(private authService: AuthService) {
  }


  async ngOnInit(): Promise<void> {
    const mode = localStorage.getItem('loginMode');

console.log('hívás: app.component');

    if (mode == 'student') {
      console.log('hívás: student login');

      this.authService.createStudentMsal();
    } else {
      this.authService.createEmployeeMsal();

    }




    
    
  }

  public onGdprAccepted() {

    this.showGdprModal = false;
    localStorage.setItem('showGdprModal','false');
    this.router.navigate(['/main/dashboard']);
  }

}
