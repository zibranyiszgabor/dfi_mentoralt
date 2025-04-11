import { Component, inject } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-profile-view',
  imports: [CommonModule],
  templateUrl: './student-profile-view.component.html',
  styleUrl: './student-profile-view.component.scss'
})
export class StudentProfileViewComponent {
  student = inject(StudentService).student;
}
