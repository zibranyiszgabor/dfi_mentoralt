import { DictionaryItem } from "./dictionaryItem.model";

export interface Dictionary {
    dictionaryId: number;
    parentDictId?: number;
    dictionaryCode: string;
    childDictionaryCode: string;
    isDeleted: boolean;
    name_HU: string;
    name_EN: string;

  }
  