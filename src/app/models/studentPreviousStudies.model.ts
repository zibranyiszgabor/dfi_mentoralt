export interface StudentPreviousStudies {
    studentPreviousStudyId: number;
    studentId: number;
    previousStudyLevel?: string | null;
    previousStudyName?: string | null;
    previousStudyFinishedAt?: string | null; // ISO date string formátumban
    isSelfFilled: boolean;
    recStat: boolean;
    createdAt: string; // ISO string
    createdBy: number;
    changedAt?: string | null;
    changedBy?: number | null;
  }
  