import { Component, inject, OnInit, Signal } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-profile-view',
  imports: [CommonModule],
  templateUrl: './student-profile-view.component.html',
  styleUrl: './student-profile-view.component.scss'
})
export class StudentProfileViewComponent implements OnInit {

  studentService = inject(StudentService);
  student! : Signal<Student | null>;

ngOnInit() {
  this.studentService.fetchStudentProfile();
  this.student = this.studentService.student;
}

}
