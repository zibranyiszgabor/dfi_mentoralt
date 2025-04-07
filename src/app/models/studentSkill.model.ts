export interface StudentSkill {
    studentSkillId: number;
    studentId: number;
    dictionaryId: number;
    valueBoolean?: boolean;
    valueDecimal?: number;
    valueDateTime?: Date;
    valueString?: string;
    isHardOrSoft?: string; // char(1)
    recStat?: boolean;
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  }
  