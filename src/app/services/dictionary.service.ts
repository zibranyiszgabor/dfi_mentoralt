import { Inject, Injectable, Injector, signal } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PublicClientApplication } from '@azure/msal-browser';
import { AuthService } from '../auth/auth.service';
import { tap, finalize } from 'rxjs/operators';
import { Dictionary } from 'models/dictionary.model';
import { DictionaryItem } from 'models/dictionaryItem.model';

// alkalmazás szintű service példány
@Injectable({
    providedIn: 'root'
  })
  

export class DictionaryService {

    private _dictionary = signal<Dictionary[] | null>(null);
    public dictionary = this._dictionary;
    private apiBaseUrl = environment.apiBaseUrl; 
    private defaultHttp: HttpClient;


    constructor(private http: HttpClient,
        private authService: AuthService,
        httpBackend: HttpBackend,
        private injector: Injector
    ) {
        this.defaultHttp = new HttpClient(httpBackend);
    }

  public fetchDictionary(): void {
    const url = `${this.apiBaseUrl}/api/get-dictionaries`;
    console.log('📡 Hívott URL:', url);
  
    this.defaultHttp.get<Dictionary[]>(url).subscribe({
      next: (dict) => {
        console.log('🎓 Dictionary lekérve:', dict); 
        this._dictionary.set(dict); 
      },
      error: (err) => {
        console.error('❌ HTTP hiba:', err);
      }
    });
  }

  public getDictionaryItemsByCode(code: string): any[] {
    const dictionary = this.dictionary();
    if (!Array.isArray(dictionary)) return [];
  
    return dictionary.filter(item => item.dictionaryCode === code);
  }
  
  

}