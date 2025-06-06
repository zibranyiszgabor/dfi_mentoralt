import { Component, inject, Input, OnInit } from '@angular/core';
import { StudentPreviousStudies } from '../../../models/studentPreviousStudies.model';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-previous-studies',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-previous-studies.component.html',
  styleUrl: './student-previous-studies.component.scss'
})
export class StudentPreviousStudiesComponent {
  router = inject(Router);

  @Input() formGroup!: FormGroup;




}
