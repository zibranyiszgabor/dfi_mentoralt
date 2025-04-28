export interface StudyResult {
    studyResultId: number;
    studentStudyId: number;
  
    valueDecimal?: number;
    valueDateTime?: Date;
    valueString?: string;
  
    isDeleted?: boolean;
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  }