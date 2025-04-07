import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private msalService = inject(MsalService);
  private router = inject(Router);
  public isLoggedIn = false;


  title = 'dfi';

  async ngOnInit(): Promise<void> {
    const mode = localStorage.getItem('loginMode');
  
    const msal = new PublicClientApplication({
      auth: {
        clientId: mode === 'student'
          ? environment.azureAd.clientId_student
          : environment.azureAd.clientId_employee,
        authority: mode === 'student'
          ? environment.azureAd.authority_student
          : environment.azureAd.authority_employee,
        redirectUri: environment.azureAd.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
      },
    });
  
    await msal.initialize();
  
    const result = await msal.handleRedirectPromise();
    if (result?.account) {
      msal.setActiveAccount(result.account);
      localStorage.setItem('userAccount', JSON.stringify(result.account)); // ✅ Mentés
      
      console.log('✅ Bejelentkezett:', result.account);

      this.isLoggedIn = true;
  
      this.router.navigate(['/main/dashboard']);
    } else {
      // 🔁 Visszatöltés, ha újratöltött az oldal
      const savedAccount = localStorage.getItem('userAccount');
      if (savedAccount) {

        console.log('✅ Bejelentkezett:', savedAccount);


        msal.setActiveAccount(JSON.parse(savedAccount));
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
  }
  
}
