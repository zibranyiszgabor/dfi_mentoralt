import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Dictionary } from 'models/dictionary.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { GroupedDictionaries } from 'models/groupedDictionaries';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  private httpBackend: HttpClient;
  private _groupedDictionaries = new BehaviorSubject<GroupedDictionaries>({});
  private groupedDictionaries$ = this._groupedDictionaries.asObservable() ;
  private groupedDictionaries: GroupedDictionaries = {}; // Most már biztosítva van a típus 

  public get groupedDictionary(): GroupedDictionaries {
    return this.groupedDictionaries;
  }


  constructor(private handler: HttpBackend) {
    this.httpBackend = new HttpClient(handler);
    this.fetchGroupedDictionaries();
    this.groupedDictionaries$.subscribe((data: GroupedDictionaries) => {
      this.groupedDictionaries = data;
       //console.log('Grouped Dictionariesasd:', this.groupedDictionaries);
    });
  }

  /** 
   * Közvetlenül csoportosítva fetcheli a Dictionary elemeket 
   */
  private fetchGroupedDictionaries(): void {
    this.httpBackend.get<Dictionary[]>(`https://127.0.0.1:3000/api/get-dictionaries`).subscribe({
      next: (data: Dictionary[]) => {
        const grouped = this.groupDataByParentId(data);
        this._groupedDictionaries.next(grouped);
      },
      error: (error) => {
        console.error('Hiba az API hívás során:', error);
      }
    });
  }


  /** 
    * Szülő ID szerint csoportosít Dictionary elemeket 
    */
  private groupDataByParentId(data: Dictionary[]): GroupedDictionaries {
    return data.reduce((groups, item) => {
      const parentId = item.parentDictId ?? 'root';
      if (!groups[parentId]) {
        groups[parentId] = [];
      }
      groups[parentId].push(item);
      return groups;
    }, {} as GroupedDictionaries);
  }

  // Getter metódus a szükséges elem eléréséhez
  public getParentName(dictionaryId: number, lang: string): string | null {
    const rootArray = this.groupedDictionaries['root'];
    if (rootArray) {
      const item = rootArray.find(entry => entry.dictionaryId === dictionaryId);
      if (item) {
        switch (lang.toLowerCase()) {
          case 'hu':
            return item.name_HU;
          case 'en':
            return item.name_EN;
          default:
            break;
        }
      }
    }
    return null;
  }

  public getParentNameByDictCode(dictionaryCode: string, lang: string): string | undefined {
    const rootArray = this.groupedDictionaries['root'];
    if (rootArray) {
      const item = rootArray.find(entry => entry.dictionaryCode == dictionaryCode);
      if (item) {
        switch (lang.toLowerCase()) {
          case 'hu':
            return item.name_HU;
          case 'en':
            return item.name_EN;
          default:
            break;
        }
      }
    }
    return undefined;
  }




  public getChildsName(dictionaryCode: string): Dictionary[] {
    const result: Dictionary[] = [];
    Object.keys(this.groupedDictionaries).forEach(key => {
      const items = this.groupedDictionaries[key];
      if (items) {
        const matchingItems = items.filter(item => item.dictionaryCode === dictionaryCode && item.parentDictId && !item.isDeleted);
        result.push(...matchingItems);
      }
    });
    return result;
  }

  public getChildDictionaryIdByChildDictionaryCode(childDictionaryCode: string): number | undefined {
    let result: number = -1;
    Object.keys(this.groupedDictionaries).forEach(key => {
      const items = this.groupedDictionaries[key];
      if (items) {
        const matchingItem = items.find(item => item.childDictionaryCode === childDictionaryCode);
        if(matchingItem){
          result = matchingItem.dictionaryId;
          return result;
        }
      }
      return result;
    });
    return result;
  }

}
