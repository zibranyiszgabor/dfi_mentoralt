import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Student } from '../models/student.model';
import { PublicClientApplication, AuthenticationResult } from '@azure/msal-browser';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = environment.backendUrl; // 🔹 Backend API URL
  private apiBaseUrl = environment.apiBaseUrl; // 🔹 Backend API URL

  private userSubject = new BehaviorSubject<any>(null);

  constructor(private msalService: MsalService, private http: HttpClient) {}

  public get isLoggedIn(): boolean {
    const account = this.msalService.instance.getActiveAccount();
    console.log('Aktív fiók:', account);

    if (account) {
      const mode = localStorage.getItem('loginMode');
      sessionStorage.setItem('isLoggedIn', 'true'); // 🔹 Ha van aktív fiók, elmentjük
      this.storeToken(); // 🔹 Token mentése a localStorage-be

      if (mode === 'student') {

      }
      else {

      }

      return true;
    }

    // 🔹 Ha az MSAL nem ad vissza aktív fiókot, ellenőrizzük a sessionStorage-t
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  public async initAndCheckLogin(): Promise<boolean> {
    const mode = localStorage.getItem('loginMode') ?? 'employee';
  
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
      localStorage.setItem('userAccount', JSON.stringify(result.account));
    }
  
    const savedAccount = localStorage.getItem('userAccount');
    if (savedAccount) {
      msal.setActiveAccount(JSON.parse(savedAccount));
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    }
  
    return false;
  }

  public getUserData(): Observable<any> {
    return this.http.get<any>(this.backendUrl).pipe(
      tap((userData) => {
        sessionStorage.setItem('user_data', JSON.stringify(userData)); // 🔹 Mentés sessionStorage-ba
        this.userSubject.next(userData);                               // 🔹 Frissítés a komponensek számára
      })
    );
  }

  /** 🔹 Diák profil lekérése tokennel */
  public fetchStudentProfile(): void {
    this.msalService.acquireTokenSilent({
      scopes: ['api://API_CLIENT_ID/.default']
    }).subscribe({
      next: (result) => {
        const token = result.accessToken;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        this.http.get<Student>(`${this.apiBaseUrl}/api/student/me`, { headers })
          .subscribe({
            next: (profile) => {
              console.log('🎓 Student profil lekérve:', profile);
              sessionStorage.setItem('student_profile', JSON.stringify(profile));
              //this.studentSubject.next(profile);
            },
            error: (err) => {
              console.error('❌ Student profil lekérési hiba:', err);
            }
          });
      },
      error: (err) => console.error('❌ Token lekérési hiba:', err)
    });
  }

  public getUserFromStorage(): any {
    const userData = sessionStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }

  public async loginAsEmployee(): Promise<void> {
    console.log('🔹 Dolgozói bejelentkezés...');
    localStorage.setItem('loginMode', 'employee');
  
   
    try {
      const msal = new PublicClientApplication({
        auth: {
          clientId: environment.azureAd.clientId_employee,
          authority: environment.azureAd.authority_employee,
          redirectUri: environment.azureAd.redirectUri,
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: true,
        },
      });
  
      await msal.initialize();
  
      // 🔐 Dolgozói clientId-re nézünk!
      const existingInteraction = localStorage.getItem(`msal.${environment.azureAd.clientId_employee}.interaction.status`);
      
      if (existingInteraction === 'inProgress') {
        console.warn('⚠️ Bejelentkezés már folyamatban, nem indítjuk újra.');
        return;
      }

       await msal.loginRedirect({
        authority: environment.azureAd.authority_employee,        
        scopes: ['user.read'],
        prompt: 'select_account',
      });
  
      
    } catch (err: any) {
      if (err.errorCode === 'interaction_in_progress') {
        console.warn('⚠️ Már zajlik bejelentkezés, várakozás...');
      } else {
        console.error('❌ Login hiba:', err);
      }
    }
  }


  

  public async loginAsStudent(): Promise<void> {
    console.log('🔹 Diák bejelentkezés...');
    localStorage.setItem('loginMode', 'student');
  
    const msal = new PublicClientApplication({
      auth: {
        clientId: environment.azureAd.clientId_student,
        authority: environment.azureAd.authority_student,
        redirectUri: environment.azureAd.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
      },
    });
  
    try {
      await msal.initialize();
  
      // Ellenőrzés: ne próbálkozz újra, ha interakció folyamatban
      const existingInteraction = localStorage.getItem(`msal.${environment.azureAd.clientId_student}.interaction.status`);
      if (existingInteraction === 'inProgress') {
        console.warn('⚠️ Bejelentkezés már folyamatban, nem indítjuk újra.');
        return;
      }
  
      await msal.loginRedirect({
        scopes: ['user.read'],
        prompt: 'select_account',
      });
    } catch (err: any) {
      if (err.errorCode === 'interaction_in_progress') {
        console.warn('⚠️ Már zajlik bejelentkezés, várakozás...');
      } else {
        console.error('❌ Login hiba:', err);
      }
    }
  }
  
  public async logout(): Promise<void> {
    localStorage.removeItem('userAccount');
    localStorage.removeItem('loginMode');
    //this.isLoggedInSubject.next(false);
  
    const mode = localStorage.getItem('loginMode') ?? 'employee';
  
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
  
    await msal.logoutRedirect(); 
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
