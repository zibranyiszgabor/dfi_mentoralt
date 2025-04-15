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

    const mode = localStorage.getItem('loginMode') as 'student' | 'employee';
    await this.authService.initMsalForMode(mode);
    
    const msal = this.authService.msalInstance;
    
    // 🛡️ Redirect válasz feldolgozása (csak egyszer!)
    const redirectResult = await msal.handleRedirectPromise();
    
    if (redirectResult?.account) {
      msal.setActiveAccount(redirectResult.account);
      localStorage.setItem('userAccount', JSON.stringify(redirectResult.account));
      console.log('✅ Redirectből jött account:', redirectResult.account);
    } else {
      // ♻️ Próbáljuk visszatölteni az accountot cache-ből
      const accounts = msal.getAllAccounts();
    
      if (accounts.length > 0) {
        msal.setActiveAccount(accounts[0]);
        console.log('♻️ Account visszatöltve MSAL cache-ből:', accounts[0]);
      } 
    }
    



    console.log('✅ visszaállitott account :', msal.getActiveAccount());



  }

  public onGdprAccepted() {

    this.showGdprModal = false;
    localStorage.setItem('showGdprModal', 'false');
    this.router.navigate(['/main/dashboard']);
  }

}
