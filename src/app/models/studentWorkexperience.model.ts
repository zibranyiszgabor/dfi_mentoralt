import { Dictionary } from "./dictionary.model";
import { Student } from "./student.model";

export interface StudentWorkExperience {
    studentWorkExperienceId: number;
    studentId: number;
    sectorCategoryId: number;
  
    workplaceName?: string;
    workStartDate?: Date; 
    workEndDate?: Date;
    positionTitle?: string;
    positionTasks?: string;
  
    IsVisible?: boolean;
    student?: Student;
    sectorCategory?: Dictionary;
  }
  