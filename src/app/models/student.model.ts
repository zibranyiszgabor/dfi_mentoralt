import { StudentSkill } from "./studentSkill.model";
import { StudentPreviousStudies } from "./studentPreviousStudies.model";


export interface Student {
    neptunHash: string;
    firstName: string;
    lastName: string;
    title: string;
    emailAddress: string;
    phoneNumber: string;
    recStat: boolean;
    createdAt?: string;
    createdBy: number;
    changedAt?: string;
    changedBy: number;
    startDateOfLegalRelationship?: string;
    endDateOfLegalRelationship?: string;
    expectedCompletion?: string;
    modulName: string;
    trainingLevel: string;
    languageExamLanguage: string;
    languageExamLevel: string;
    languageExamType: string;
    studentTrainingId?: number;
    trainingId?: number;
    emailId?: number;
    languageExamId?: number;
    matches?: any[]; 
    studentStudyPrograms?: any[];
    studentPreviousStudies?: StudentPreviousStudies[];
    studentSkills?: StudentSkill[];
    studentPreferences?: any[];
  }
  
