import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';
import { PublicClientApplication } from '@azure/msal-browser';

// alkalmazás szintű service példány
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private _student = signal<Student | null>(null);
  public student = this._student;

  private apiBaseUrl = 'https://your-api-url'; // állítsd be

  private msal = new PublicClientApplication({
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

  constructor(private http: HttpClient) {}


// http client mock -> kérés

  public fetchStudentProfile(): void {
    this.msal.acquireTokenSilent({
      account: this.msal.getAllAccounts()[0], // vagy amit használtok
      scopes: ['api://API_CLIENT_ID/.default']
    }).then(result => {
      const token = result.accessToken;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      this.http.get<Student>(`${this.apiBaseUrl}/api/student/me`, { headers })
        .subscribe({
          next: (profile) => {
            console.log('🎓 Student profil lekérve:', profile);
            //sessionStorage.setItem('student_profile', JSON.stringify(profile));
            this._student.set(profile); // 🔁 signal frissítés
          },
          error: (err) => {
            console.error('❌ HTTP hiba:', err);
          }
        });
    }).catch(err => {
      console.error('❌ Token hiba:', err);
    });
  }
}
