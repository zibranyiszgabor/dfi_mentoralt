import { Component, computed, effect, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentPreferencesComponent } from "../student-preferences/student-preferences.component";
import { StudentService } from '../../../services/student.service';
import { DictionaryService } from 'services/dictionary.service';

import { Student } from '../../../models/student.model';
import { StudentStudy } from 'models/studentStudy.model';
import { Dictionary } from 'models/dictionary.model';
import { DictionaryItem } from 'models/dictionaryItem.model';
import { StudentSkill } from 'models/studentSkill.model';
import { StudentLanguageSkills } from 'models/studentLanguageSkills.model';
import { StudentWorkExperience } from 'models/studentWorkexperience.model';
import { StudentPreference } from 'models/studentPreference.model';

@Component({
  selector: 'app-student-profile-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, StudentPreferencesComponent],
  templateUrl: './student-profile-form.component.html',
  styleUrl: './student-profile-form.component.scss'
})
export class StudentProfileFormComponent {
  studentService = inject(StudentService);
  dictionaryService = inject(DictionaryService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  student = this.studentService.student;
  dictionary = this.dictionaryService.dictionary;

  formGroup: FormGroup | undefined = undefined;

  selectedImageFile: File | null = null;
  imagePreviewUrl: string | null = null;

  // EFFECT – formGroup csak akkor jön létre, ha van student adat
  initFormEffect = effect(() => {
    const studentData = this.student();
    if (studentData && !this.formGroup) {
      this.formGroup = this.createFormGroup(studentData);
    }
  });

  constructor() {
    this.studentService.fetchStudentProfile();
    this.dictionaryService.fetchDictionary();
  }

  // Dictionary computed mezők
  languageExamTypes = this.getFilteredDictionarySignal('LanguageExamType');
  languageExamLevels = this.getFilteredDictionarySignal('LanguageExamLevel');
  languageExamLanguages = this.getFilteredDictionarySignal('LanguageExamLang');
  drivingLicences = this.getFilteredDictionarySignal('DrivingLicenseCategory');
  sectors = this.getFilteredDictionarySignal('Sector');
  natureOfWorks = this.getFilteredDictionarySignal('NatureOfWorks');
  employmentTypes = this.getFilteredDictionarySignal('EmploymentTypes');
  timeOfWorks = this.getFilteredDictionarySignal('TimeOfWorks');
  placeOfWorks = this.getFilteredDictionarySignal('PlaceOfWorks');
  languageOfWorks = this.getFilteredDictionarySignal('LanguageOfWorks');

  // Tanulmányok
  createStudentStudy(studentStudy?: StudentStudy): FormGroup {
    return this.formBuilder.group({
      nameOfDegree: [studentStudy?.nameOfDegree, Validators.required],
      nameOfInstitution: [studentStudy?.nameOfInstitution, Validators.required],
      nameOfTraining: [studentStudy?.nameOfTraining, Validators.required],
      StartDateOfLegalRelationship: [studentStudy?.startDateOfLegalRelationship, Validators.required],
      EndDateOfLegalRelationship: [studentStudy?.endDateOfLegalRelationship, Validators.required],
      IsVisible: [studentStudy ? studentStudy.IsVisible : true]
    });
  }

  createStudentStudies(studentStudy?: StudentStudy[]): FormArray {
    return this.formBuilder.array(studentStudy ? studentStudy.map(study => this.createStudentStudy(study)) : [this.createStudentStudy()]);
  }

  getStudentStudyFormArray(): FormArray {
    return this.formGroup?.get('studentStudies') as FormArray;
  }

  getStudyFormGroup(i: number): FormGroup {
    return this.getStudentStudyFormArray().controls[i] as FormGroup;
  }

  addStudentStudy(): void {
    this.getStudentStudyFormArray().push(this.createStudentStudy());
  }

  removeStudentStudy(i: number) {
    this.getStudentStudyFormArray().removeAt(i);
  }

  // Nyelvtudás
  createStudentLanguageSkill(languageSkills?: StudentLanguageSkills): FormGroup {
    return this.formBuilder.group({
      languageExamLevelDictId: [languageSkills?.languageExamLevelDictId, Validators.required],
      languageExamLangDictId: [languageSkills?.languageExamLangDictId, Validators.required],
      languageExamTypeDictId: [languageSkills?.languageExamTypeDictId, Validators.required],
      IsVisible: [!!languageSkills?.IsVisible]
    });
  }

  createStudentLanguageSkills(languageSkills?: StudentLanguageSkills[]): FormArray {
    return this.formBuilder.array(languageSkills ? languageSkills.map(lang => this.createStudentLanguageSkill(lang)) : [this.createStudentLanguageSkill()]);
  }

  getStudentLanguageSkillFormArray(): FormArray {
    return this.formGroup?.get('languageSkills') as FormArray;
  }

  getStudentLanguageSkillFormGroup(i: number): FormGroup {
    return this.getStudentLanguageSkillFormArray().controls[i] as FormGroup;
  }

  addStudentLanguageSkill(): void {
    this.getStudentLanguageSkillFormArray().push(this.createStudentLanguageSkill());
  }

  removeStudentLanguageSkill(i: number) {
    this.getStudentLanguageSkillFormArray().removeAt(i);
  }

  // Workexperience
  createStudentWorkExperience(workExperience?: StudentWorkExperience): FormGroup {
    return this.formBuilder.group({
      sectorCategoryId: [workExperience?.sectorCategoryId, Validators.required],
      workplaceName: [workExperience?.workplaceName, Validators.required],
      workStartDate: [workExperience?.workStartDate],
      workEndDate: [workExperience?.workEndDate],
      positionTitle: [workExperience?.positionTitle, Validators.required],
      positionTasks: [workExperience?.positionTasks],
      IsVisible: [workExperience?.IsVisible],
    });
  }

  createStudentWorkExperiences(workExperiences?: StudentWorkExperience[]): FormArray {
    return this.formBuilder.array(workExperiences ? workExperiences.map(w => this.createStudentWorkExperience(w)) : [this.createStudentWorkExperience()]);
  }

  getStudentWorkExperienceFormArray(): FormArray {
    return this.formGroup?.get('workExperiences') as FormArray;
  }

  addStudentWorkExperience(): void {
    this.getStudentWorkExperienceFormArray().push(this.createStudentWorkExperience());
  }

  removeStudentWorkExperience(i: number) {
    this.getStudentWorkExperienceFormArray().removeAt(i);
  }

  // Skills
  createStudentSkill(studentSkill?: StudentSkill): FormGroup {
    return this.formBuilder.group({
      dictionaryId: [studentSkill?.dictionaryId, Validators.required],
      IsVisible: [studentSkill?.IsVisible]
    });
  }

  createStudentSkills(studentSkills?: StudentSkill[]): FormArray {
    return this.formBuilder.array(studentSkills ? studentSkills.map(skill => this.createStudentSkill(skill)) : [this.createStudentSkill()]);
  }

  getStudentSkillFormArray(): FormArray {
    return this.formGroup?.get('studentSkills') as FormArray;
  }

  addStudentSkill(): StudentSkill {
    const defaultId = this.getFirstDrivingLicenceId();

    const newSkill: StudentSkill = {
      dictionaryId: defaultId,
      studentId: 0,
      studentSkillId: 0,
      IsVisible: true,
    };

    this.getStudentSkillFormArray().push(this.createStudentSkill(newSkill));
    return newSkill;
  }

  removeStudentSkill(i: number) {
    this.getStudentSkillFormArray().removeAt(i);
  }

  getFilteredDictionaryForSkill(index: number): Dictionary[] {
    const skill = this.getStudentSkillFormArray().at(index);
    const selectedId = skill.get('dictionaryId')?.value;
    const selectedDict = this.dictionary()?.find(d => d.dictionaryId === selectedId);
    const code = selectedDict?.dictionaryCode ?? 'DrivingLicenseCategory';
    return this.dictionary()?.filter(d => d.dictionaryCode === code) ?? [];
  }

  isDrivingLicence(index: number): boolean {
    const skill = this.getStudentSkillFormArray().at(index);
    const selectedId = skill.get('dictionaryId')?.value;
    const dict = this.dictionary();
    if (!dict || !selectedId) return true;
    return dict.find(d => d.dictionaryId === selectedId)?.dictionaryCode === 'DrivingLicenseCategory';
  }

  getFirstDrivingLicenceId(): number {
    const dict = this.dictionary() ?? [];
    const driving = dict.find(d => d.dictionaryCode === 'DrivingLicenseCategory');
    return driving?.dictionaryId ?? 0;
  }

  // Preferences
  createStudentPreferenceFromList(preferences: StudentPreference[]): FormGroup {
    const findIds = (code: string): number[] =>
      preferences.filter(p => p.dictionary?.dictionaryCode === code).map(p => p.dictionaryId).filter((id): id is number => !!id);

    return this.formBuilder.group({
      natureOfWorks: [findIds('NatureOfWorks'), Validators.required],
      employmentTypes: [findIds('EmploymentTypes'), Validators.required],
      TimeOfWorks: [findIds('TimeOfWorks'), Validators.required],
      PlaceOfWorks: [findIds('PlaceOfWorks'), Validators.required],
      LanguageOfWorks: [findIds('LanguageOfWorks'), Validators.required]
    });
  }

  convertPreferencesToList(form: FormGroup, studentId: number): StudentPreference[] {
    const fields = ['natureOfWorks', 'employmentTypes', 'TimeOfWorks', 'PlaceOfWorks', 'LanguageOfWorks'];
    return fields.flatMap(field => {
      const selectedIds = form.get(field)?.value as number[] || [];
      return selectedIds.map(id => ({
        studentPreferenceId: 0,
        studentId,
        dictionaryId: id
      }));
    });
  }

  // Form
  createFormGroup(student: Student): FormGroup {
    return this.formBuilder.group({
      firstName: [student?.firstName, Validators.required],
      linkedIn: [student?.linkedIn],
      personalInterest: [student?.personalInterest],
      aboutMe: [student?.aboutMe],
      linkedInIsVisible: [student?.linkedInIsVisible],
      personalInterestIsVisible: [student?.personalInterestIsVisible],
      aboutMeIsVisible: [student?.aboutMeIsVisible],
      studentStudies: this.createStudentStudies(student?.studentStudies),
      languageSkills: this.createStudentLanguageSkills(student?.languageSkills),
      studentSkills: this.createStudentSkills(student?.studentSkills),
      workExperiences: this.createStudentWorkExperiences(student?.workExperiences),
      studentPreferences: this.createStudentPreferenceFromList(student?.studentPreferences ?? [])
    });
  }

  getFormArray(controlName: string): FormArray {
    return this.formGroup?.get(controlName) as FormArray;
  }

  getFilteredDictionarySignal(code: string) {
    return computed(() => this.dictionary()?.filter(item => item.dictionaryCode === code) ?? []);
  }

  cancel(): void {
    this.router.navigate(['/main/profile-student-view']);
  }

  save(): void {
    const rawForm = this.formGroup?.value;
    const studentId = this.student()?.studentId ?? 0;

    const student: Student = {
      ...rawForm,
      studentId,
      studentPreferences: this.convertPreferencesToList(
        this.formGroup?.get('studentPreferences') as FormGroup,
        studentId
      ),
      profileImage: this.student()?.profileImage
    };

    console.log('mentett adatok: ' + JSON.stringify(rawForm, null, 2));

    if (this.selectedImageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(result);
        const binary = Array.from(uint8Array).map(b => String.fromCharCode(b)).join('');
        const base64String = btoa(binary);
        student.profileImage = base64String;
        this.saveStudentWithImage(student);
      };
      reader.readAsArrayBuffer(this.selectedImageFile);
    } else {
      this.saveStudentWithImage(student);
    }
  }

  private saveStudentWithImage(student: Student): void {
    this.studentService.updateStudentWithoutInterceptor(student.studentId, student).subscribe({
      next: () => this.router.navigate(['/main/profile-student-view']),
      error: err => {
        console.error('❌ Mentési hiba:', err);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedImageFile = file;
      if (file.size > 1_000_000) {
        alert('A fájl túl nagy! Maximum 1MB engedélyezett.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          this.imagePreviewUrl = result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  getImageSrc(profileImage: string | undefined | null): string | null {
    return profileImage ? `data:image/jpeg;base64,${profileImage}` : null;
  }

  resetImage() {
    this.imagePreviewUrl = null;
    this.selectedImageFile = null;
    const student = this.student();
    if (student) {
      (student as any).profileImage = null;
    }
  }
}
