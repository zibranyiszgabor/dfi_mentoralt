import { Component, inject, Input, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentPreviousStudies } from '../../../models/studentPreviousStudies.model';
import { Router } from '@angular/router';
import { StudentLanguageSkillsComponent } from "../student-language-skills/student-language-skills.component";
import { StudentLicencesComponent } from "../student-licences/student-licences.component";
import { StudentPreferencesComponent } from "../student-preferences/student-preferences.component";
import { StudentPreviousStudiesComponent } from "../student-previous-studies/student-previous-studies.component";


@Component({
  selector: 'app-student-profile-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, StudentLanguageSkillsComponent, StudentLicencesComponent, StudentPreferencesComponent, StudentPreviousStudiesComponent],
  templateUrl: './student-profile-form.component.html',
  styleUrl: './student-profile-form.component.scss'
})

//smart komponens(hasznalhat serviceket)/prezentation komponens nincsenek service hivások, signalok
export class StudentProfileFormComponent implements OnInit {

  router = inject(Router);
  formBuilder = inject(FormBuilder);
  formGroup: FormGroup | undefined = undefined;

  ngOnInit(): void {

    this.formGroup = this.createFormGroup(this.student);

  }

  @Input() student: Student | undefined = undefined; // ! -> majd inicializálni kell valahol

  createPreviewStudy(studentPreviousStudies?: StudentPreviousStudies): FormGroup {
    return this.formBuilder.group(
      {
        //previousStudyLevel: [studentPreviousStudies?.previousStudyLevel, Validators.required],
        previousStudyName: [studentPreviousStudies?.previousStudyName, Validators.required],
        previousStudyFinishedAt: [studentPreviousStudies?.previousStudyFinishedAt]
      })
  }

  createStudentPreviousStudies(studentPreviousStudies?: StudentPreviousStudies[]): FormArray {
    return this.formBuilder.array(studentPreviousStudies ? studentPreviousStudies.map(study => this.createPreviewStudy(study)) : [this.createPreviewStudy()]);
  }

  getStudentPreviousStudiesFormArray(): FormArray {
    return this.formGroup?.get('studentPreviousStudies') as FormArray;
  }

  getStudyFormGroup(i: number): FormGroup {
    return this.getStudentPreviousStudiesFormArray().controls[i] as FormGroup;
  }

  addStudentPreviousStudy() {
    this.getStudentPreviousStudiesFormArray().controls.push(this.createPreviewStudy());
  }

  removeStudentPreviousStudy(i: number) {
    this.getStudentPreviousStudiesFormArray().removeAt(i);
  }

  createFormGroup(student: Student | undefined): FormGroup {

    const formGroup = this.formBuilder.group(
      {
        firstName: [student?.firstName, Validators.required],
        studentPreviousStudies: this.createStudentPreviousStudies(student?.studentPreviousStudies)
      }
    );

    console.log(formGroup);

    return formGroup; //formcontroll

  }

  public cancel(): void {
    this.router.navigate(['/main/profile-student-view']);
  }

  public save(): void {
    //this.updateEntity(this.formGroup().value);
    console.log(this.formGroup?.value);

    // dataservice.update

    //   this.router.navigate(['../../list'], {
    //     relativeTo: this.activatedRoute,
    //   });

  }

}
