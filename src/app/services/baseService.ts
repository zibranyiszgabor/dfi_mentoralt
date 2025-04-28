import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Dictionary } from 'models/dictionary.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({//ezzel határozom meg hogy singleton legyen és csak egyszer fusson le a konstruktor 
  providedIn: 'root'
})

export class BaseService {
  private httpBackend: HttpClient;
  private _langDictionaries = new BehaviorSubject<Dictionary[]>([]);

  // Külső olvasáshoz Observable-ként tesszük elérhetővé
  public langDictionaries$ = this._langDictionaries.asObservable();//ezzel oldható meg hogy automatikusan frissülő dict-legyen és ne kelljen mindig a gettert hívogatni

  constructor(private handler: HttpBackend) {
    this.httpBackend = new HttpClient(handler);
    this.fetchLangDictionaries(); // Hívás a program futása kezdetén
  }

  private fetchLangDictionaries(): void {
    this.httpBackend.get<Dictionary[]>(`https://127.0.0.1:3000/api/get-dictionaries`).subscribe({
      next: (data: Dictionary[]) => {
        this._langDictionaries.next(data); // Új értékkel frissítjük a BehaviorSubjectet
      },
      error: (error) => {
        console.error('Hiba az API hívás során:', error);
      }
    });
  }
}
