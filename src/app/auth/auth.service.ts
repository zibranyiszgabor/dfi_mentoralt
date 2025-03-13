import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private msalService: MsalService, private http: HttpClient) { }

  private backendUrl = 'https://localhost:5227/api/auth/user'; // 🔹 Backend API URL
  private userSubject = new BehaviorSubject<any>(null);


  loginAsEmployee(): void {
    console.log('🔹 Dolgozói bejelentkezés...');
    this.msalService.loginRedirect({
      authority: environment.azureAd.authority_employee,
      scopes: ['user.read'],
      prompt: "select_account"
    });
  }

  loginAsStudent(): void {
    console.log('🔹 Diák bejelentkezés...');
    this.msalService.loginRedirect({
      authority: environment.azureAd.authority_student,
      scopes: ['user.read'],
      prompt: "select_account"
    });
  }

  logout(): void {
    console.log('🔹 MSAL logout...');
    this.msalService.logoutRedirect();
  }

  get isLoggedIn(): boolean {
    const account = this.msalService.instance.getActiveAccount();
    console.log("Aktív fiók:", account);

    if (account) {
      sessionStorage.setItem('isLoggedIn', 'true'); // 🔹 Ha van aktív fiók, elmentjük
      this.storeToken(); // 🔹 Token mentése a localStorage-be
      return true;
    }

    // 🔹 Ha az MSAL nem ad vissza aktív fiókot, ellenőrizzük a sessionStorage-t
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  storeToken(): void {
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      const token = account.idToken;
      if (token) {
        sessionStorage.setItem('auth_token', token); // 🔹 Token mentése
      }
    }
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.backendUrl).pipe(
      tap(userData => {
        sessionStorage.setItem('user_data', JSON.stringify(userData)); // 🔹 Mentés sessionStorage-ba
        this.userSubject.next(userData); // 🔹 Frissítés a komponensek számára
      })
    );
  }

  getUserFromStorage(): any {
    const userData = sessionStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }

}
