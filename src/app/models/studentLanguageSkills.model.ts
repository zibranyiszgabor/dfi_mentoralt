import { Dictionary } from "./dictionary.model";

export interface StudentLanguageSkills {
    studentLanguageSkillId?: number;
    languageExamLevelDict?: Dictionary;
    languageExamLangDict?: Dictionary;
    languageExamTypeDict?: Dictionary;
  }