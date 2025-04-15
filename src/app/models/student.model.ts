import { StudentSkill } from "./studentSkill.model";
import { StudentPreviousStudies } from "./studentPreviousStudies.model";


  export interface Student {
    studentId: number;
    neptunHash?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    title?: string | null;
    emailAddress?: string | null;
    phoneNumber?: string | null;
    recStat?: boolean | null;
    startDateOfLegalRelationship?: string | null;
    endDateOfLegalRelationship?: string | null;
    expectedCompletion?: string | null;
    modulName?: string | null;
    trainingLevel?: string | null;
    languageExamLanguage?: string | null;
    languageExamLevel?: string | null;
    languageExamType?: string | null;
    studentTrainingId?: number | null;
    trainingId?: number | null;
    emailId?: number | null;
    languageExamId?: number | null;
    isServiceInterested?: boolean | null;
    isDataProtDeclAccepted?: boolean | null;
    createdAt?: string | null;
    createdBy?: number | null;
    changedAt?: string | null;
    changedBy?: number | null;
    matches?: any[] | null;
    studentStudyPrograms?: any[] | null;
    studentPreviousStudies?: StudentPreviousStudies[];
    studentSkills?: any[] | null;
    studentPreferences?: any[];
  }