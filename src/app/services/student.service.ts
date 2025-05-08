import { Inject, Injectable, Injector, signal } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';
import { PublicClientApplication } from '@azure/msal-browser';
import { AuthService } from '../auth/auth.service';
import { StudentGDPR } from 'models/studentGDPR.model';
import { Observable } from 'rxjs';


// alkalmazás szintű service példány
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  public isLoggedIn = false;

  private _student = signal<Student | null>(null);
  public student = this._student;
  private apiBaseUrl = environment.apiBaseUrl; // állítsd be
  private msal!: PublicClientApplication;
  private defaultHttp: HttpClient;
  private secureHttp: HttpClient;

  constructor(private http: HttpClient,
    private authService: AuthService,
    httpBackend: HttpBackend,
    private injector: Injector
  ) {
    this.defaultHttp = new HttpClient(httpBackend);
    this.secureHttp = this.injector.get(HttpClient);


    this.msal = authService.msal;
    console.log("account:" + this.msal.getAllAccounts()[0]);

  }


  public neptunDataCheck(): void {
    const accountStr = localStorage.getItem('userAccount');

    if (!accountStr) {
      console.warn('⚠️ Nincs mentett felhasználói fiók.');
      return;
    }

    const account = JSON.parse(accountStr);
    const email = account.username;
    console.log("email:" + email);

    const url = `${this.apiBaseUrl}/api/student/neptuncodebyemail?email=${encodeURIComponent(email)}`;
    console.log('📡 Hívott URL:', url);

    this.defaultHttp.get(url).subscribe({
      next: (response: any) => {
        console.log('✅ Válasz a szervertől:', response);
        if (response.neptunCode) {
          console.log('🎓 Neptun kód:', response.neptunCode);
        } else {
          console.warn('⚠️ Nincs Neptun-kód. Üzenet:', response.message);
        }
      },
      error: (err) => {
        console.error('❌ HTTP hiba:', err);
      }
    });


  }

  public fetchStudentProfile(): void {
    const accountStr = localStorage.getItem('userAccount');

    if (!accountStr) {
      console.warn('⚠️ Nincs mentett felhasználói fiók.');
      return;
    }

    //this.neptunDataCheck();

    const account = JSON.parse(accountStr);
    const email = account.username;
    console.log("email:" + email);

    const url = `${this.apiBaseUrl}/api/student/email?email=${encodeURIComponent(email)}`;
    console.log('📡 Hívott URL:', url);

    this.defaultHttp.get<Student>(url).subscribe({
      next: (profile) => {
        console.log('🎓 Student profil lekérve:', profile); // Látod ezt?
        this._student.set(profile); // Ha itt a hiba, ez nem látszik!
      },
      error: (err) => {
        console.error('❌ HTTP hiba:', err);
      }
    });
  }



  public fetchStudentProfile_msal(): void {

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


  updateStudentGDPR(studentGDPR: StudentGDPR): void {
    this.defaultHttp.patch<{ message: string }>(`${this.apiBaseUrl}/api/student/update/gdpr`, studentGDPR)
      .subscribe({
        next: (response) => {
          alert(response.message);
        },
        error: (error) => {
          alert("Error saving form data! " + (error?.error?.detail ?? 'Unknown error.'));
        }
      });
  }

  public updateStudent(id: number, student: Student): Observable<void> {
    return this.http.put<void>(`${this.apiBaseUrl}/api/student/update/${id}`, student);
  }

  updateStudentWithoutInterceptor(id: number, student: Student): Observable<void> {
    const url = `${this.apiBaseUrl}/api/student/update/${id}`;
    return this.defaultHttp.put<void>(url, student);
  }

}
