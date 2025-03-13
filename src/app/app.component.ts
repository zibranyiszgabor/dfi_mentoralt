import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,  // 🔹 Az AuthService helyesen injektálva
    private msalService: MsalService,  // 🔹 Az MsalService külön kezelve
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('🔹 handleRedirectPromise() meghívása...');

    this.msalService.instance.initialize().then(() => {
      return this.msalService.instance.handleRedirectPromise();
    }).then((result: AuthenticationResult | null) => {
      if (result !== null && result.account) {
        console.log('✅ Bejelentkezés sikeres:', result);

        // 🔹 Aktív fiók beállítása
        this.msalService.instance.setActiveAccount(result.account);

        // 🔹 Felhasználó állapot frissítése az AuthService-ben
       // this.authService.updateLoginStatus(true);

        // 🔹 Navigálás a megfelelő oldalra
        this.router.navigate(['/dashboard']);
      } else {
        console.log('⚠️ Nincs aktív bejelentkezés.');
      }
    }).catch(error => {
      console.error('🚨 Hiba a bejelentkezés visszaállításakor:', error);
    });

    // 🔹 Ha az oldal újratöltése után elveszik a bejelentkezés
 }


}
