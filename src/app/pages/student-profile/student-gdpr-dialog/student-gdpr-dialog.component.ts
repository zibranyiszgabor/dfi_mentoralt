import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from "../../../services/student.service";
import { StudentGDPR } from '../../../models/studentGDPR.model';
import { MsalService } from '@azure/msal-angular';

declare const bootstrap: any; // Bootstrap JS szükséges

@Component({
  selector: 'app-gdpr-modal',
  templateUrl: './student-gdpr-dialog.component.html',
  styleUrls: ['./student-gdpr-dialog.component.scss'],
  imports: [NgIf, ReactiveFormsModule, CommonModule], 
  standalone: true
})
export class GdprModalComponent {
  @Output() accepted = new EventEmitter<void>();

  form: FormGroup;
  private modalInstance: any;

  constructor(private fb: FormBuilder, private studentService: StudentService, private msalService: MsalService){
    this.form = this.fb.group({
      isDataProtDeclAccepted: new FormControl(false),
      isServiceInterested: new FormControl(false)
    });
  }

  ngOnInit(): void {
    const modalElement = document.getElementById('gdprModal');
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
  }



  save() {
    debugger;
    const accountStr = localStorage.getItem('userAccount');
    if (!accountStr) {
      console.warn('⚠️ Nincs mentett felhasználói fiók.');
      return;
    }
    const account = JSON.parse(accountStr);
    const email = account.username;
    
    const studentGDPR: StudentGDPR = {
      email: email,
      isDataProtDeclAccepted: this.form.get('isDataProtDeclAccepted')?.value,
      isServiceInterested: this.form.get('isServiceInterested')?.value
    };
  
    this.studentService.updateStudentGDPR(studentGDPR);

  }
}
