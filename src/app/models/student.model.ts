import { StudentSkill } from "./studentSkill.model";
import { StudentPreviousStudies } from "./studentPreviousStudies.model";
import { StudentStudy } from "./studentStudy.model";
import { StudentPreference } from "./studentPreference.model";
import { StudentLanguageSkills } from "./studentLanguageSkills.model";
import { StudentWorkExperience } from "./studentWorkexperience.model";


  export interface Student {
    studentId: number;
    neptunCode?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    title?: string;
    emailAddress?: string;
    phoneNumber?: string;
    isDeleted?: boolean;
    profileImage?: string;
    isServiceInterested?: boolean;
    isDataProtDeclAccepted?: boolean;
    aboutMe?: string;
    otherSkills?: string;
    personalInterest?: string;
    linkedIn?: string;
    aboutMeIsVisible?: string;
    personalInterestIsVisible?: string;
    linkedInIsVisible?: string;   
    createdAt?: Date;
    createdBy?: number;
    changedAt?: Date;
    changedBy?: number;
  
    studentStudies?: StudentStudy[];
    studentPreviousStudies?: StudentPreviousStudies[];
    studentSkills?: StudentSkill[];
    studentPreferences?: StudentPreference[];
    languageSkills? : StudentLanguageSkills[];
    workExperiences : StudentWorkExperience[];
  }
  