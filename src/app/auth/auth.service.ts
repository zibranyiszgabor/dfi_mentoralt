import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = environment.backendUrl; // 🔹 Backend API URL
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private msalService: MsalService, private http: HttpClient) {}

  public get isLoggedIn(): boolean {
    const account = this.msalService.instance.getActiveAccount();
    console.log('Aktív fiók:', account);

    if (account) {
      sessionStorage.setItem('isLoggedIn', 'true'); // 🔹 Ha van aktív fiók, elmentjük
      this.storeToken(); // 🔹 Token mentése a localStorage-be
      return true;
    }

    // 🔹 Ha az MSAL nem ad vissza aktív fiókot, ellenőrizzük a sessionStorage-t
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  public getUserData(): Observable<any> {
    return this.http.get<any>(this.backendUrl).pipe(
      tap((userData) => {
        sessionStorage.setItem('user_data', JSON.stringify(userData)); // 🔹 Mentés sessionStorage-ba
        this.userSubject.next(userData); // 🔹 Frissítés a komponensek számára
      })
    );
  }

  public getUserFromStorage(): any {
    const userData = sessionStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }

  public loginAsEmployee(): void {
    console.log('🔹 Dolgozói bejelentkezés...');
    this.msalService.loginRedirect({
      authority: environment.azureAd.authority_employee,
      scopes: ['user.read'],
      prompt: 'select_account',
    });
  }

  public loginAsStudent(): void {
    console.log('🔹 Diák bejelentkezés...');
    this.msalService.loginRedirect({
      authority: environment.azureAd.authority_student,
      scopes: ['user.read'],
      prompt: 'select_account',
    });
  }

  public logout(): void {
    console.log('🔹 MSAL logout...');
    this.msalService.logoutRedirect();
  }

  public storeToken(): void {
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      const token = account.idToken;
      if (token) {
        sessionStorage.setItem('auth_token', token); // 🔹 Token mentése
      }
    }
  }
}
