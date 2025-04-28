import { Dictionary } from "./dictionary.model";
import { Student } from "./student.model";

export interface StudentPreference {
    studentPreferenceId: number;
    studentId: number;
    dictionaryId?: number;
  
    valueBoolean?: boolean;
    valueDecimal?: number;
    valueDateTime?: Date;
    valueString?: string;
  
    isDeleted?: boolean;
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  
    student?: Student;
    dictionary?: Dictionary;
  }
  