import { Student } from "./student.model";
import { StudyResult } from "./studentResult.model";

export interface StudentStudy {
    studentStudyId: number;
    studentId: number;
  
    startDateOfLegalRelationship?: string; // vagy Date, ha konvertálod
    endDateOfLegalRelationship?: string;
    expectedCompletion?: string;
  
    modulName?: string;
    nameOfInstitution?: string;
    nameOfTraining?: string;
    nameOfDegree?: string;
    trainingLevel: string;
  
    studentTrainingId: number;
    trainingStatusId: number;
  
    isSelfFilled: boolean;
    isDeleted?: boolean;
  
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  
    student?: Student;
    studyProgramResults?: StudyResult[];
  }
  