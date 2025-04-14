import { Component, inject, Input, OnInit } from '@angular/core';
import { StudentPreviousStudies } from '../../../models/studentPreviousStudies.model';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-previous-studies',
  imports: [],
  templateUrl: './student-previous-studies.component.html',
  styleUrl: './student-previous-studies.component.scss'
})
export class StudentPreviousStudiesComponent {
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  formGroup: FormGroup | undefined = undefined;

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



}
