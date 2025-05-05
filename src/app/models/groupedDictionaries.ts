import { Dictionary } from "./dictionary.model";

export interface GroupedDictionaries {
  [key: string]: Dictionary[];
}