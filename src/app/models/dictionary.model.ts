export interface Dictionary {
    dictionaryId: number;
    parentDictId?: number;
    dictionaryCode?: string;
    name_HU: string;
    name_EN: string;
    isDeleted?: boolean;
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  }
  