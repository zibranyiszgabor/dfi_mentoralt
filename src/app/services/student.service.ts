import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';
import { PublicClientApplication } from '@azure/msal-browser';
import { AuthService } from '../auth/auth.service';

// alkalmazás szintű service példány
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  public isLoggedIn = false;

  private _student = signal<Student | null>(null);
  public student = this._student;
  private apiBaseUrl = 'https://localhost:3000'; // állítsd be
  private msal!: PublicClientApplication;

  constructor(private http: HttpClient, private authService: AuthService) {

    this.msal = authService.msal;
    console.log("account:" + this.msal.getAllAccounts()[0]);

  }


  // http client mock -> kérés
  // promise -> await (megvárjuk a választ, szinkronizált lesz), csak async 

  public fetchStudentProfile(): void {

    this.msal.acquireTokenSilent({
      account: this.msal.getAllAccounts()[0], // vagy amit használtok
      scopes: ['api://5a68a69c-7d32-4322-b4f2-f8e2cf36738f/.default']
    }).then(result => {
      const token = result.accessToken;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      this.http.get<Student>(`${this.apiBaseUrl}/api/student/email`, { headers })
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
