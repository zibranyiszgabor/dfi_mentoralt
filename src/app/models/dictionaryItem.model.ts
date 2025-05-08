export interface DictionaryItem {
    DictionaryId: number;
    ParentDictId: number | null;
    DictionaryCode: string;
    Name_EN: string;
    Name_HU: string;
    ChildDictionaryCode: string | null;
  }