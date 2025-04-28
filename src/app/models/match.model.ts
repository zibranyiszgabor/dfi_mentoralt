import { Student } from "./student.model";

export interface Match {
    matchId: number;
    studentId: number;
    searchId?: number;
  
    value3?: string;
    isDeleted?: boolean;
  
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  
    student?: Student;
  }
  