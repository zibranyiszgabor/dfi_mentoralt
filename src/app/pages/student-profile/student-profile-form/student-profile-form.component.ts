import { Component, inject, Input, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-profile-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-profile-form.component.html',
  styleUrl: './student-profile-form.component.scss'
})

//smart komponens(hasznalhat serviceket)/prezentation komponens nincsenek service hivások, signalok
export class StudentProfileFormComponent implements OnInit  {
  
  formBuilder = inject(FormBuilder);
  formGroup : FormGroup | undefined = undefined;

  ngOnInit(): void {
    //this.student = JSON.parse(sessionStorage.getItem('student_profile'));

    this.formGroup = this.createFormGroup(this.student);

  }

  
  // ngOnInit -> komponens konstruktora után fut le, pl: observable feliratkozás

  // @Input() student! : Student; // ! -> majd inicializálni kell valahol
  @Input() student : Student | undefined = undefined ; // ! -> majd inicializálni kell valahol

  createFormGroup(student : Student | undefined) : FormGroup {

    return this.formBuilder.group(
      {firstName : [student?.firstName, Validators.required]}) ; //formcontroll

  //angular reactive form formarray

  }
}
