import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentStudy } from '../../../models/studentStudy.model';

@Component({
  selector: 'app-student-study',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-study.component.html',
  styleUrl: './student-study.component.scss'
})
export class StudentStudyComponent {
  router = inject(Router);

  @Input() formGroup!: FormGroup;
}
