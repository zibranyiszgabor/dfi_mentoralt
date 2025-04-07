import { Component } from '@angular/core';
import { StudentProfileFormComponent } from '../student-profile/student-profile-form/student-profile-form.component';

@Component({
  selector: 'app-student-profile-edit',
  imports: [StudentProfileFormComponent],
  templateUrl: './student-profile-edit.component.html',
  styleUrl: './student-profile-edit.component.scss'
})
export class StudentProfileEditComponent {
//id kiolvasáas, activatedRoute.params -> url parameterei
// activatedRoute.snapshot.params
}
