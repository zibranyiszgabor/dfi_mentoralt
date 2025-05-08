import { Component, inject, Signal, effect } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-student-profile-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-profile-view.component.html',
  styleUrls: ['./student-profile-view.component.scss']
})
export class StudentProfileViewComponent {
  private router = inject(Router);
  private studentService = inject(StudentService);
  student: Signal<Student | null> = this.studentService.student;

  constructor() {
    // Profil betöltése

    this.studentService.fetchStudentProfile();

    effect(() => {
      const student = this.student();

      if (student) {
        if (!student?.isDataProtDeclAccepted || !student?.isServiceInterested) {
          this.router.navigate(['/main/student-gdpr']);
        }
      }

    });
  }


  generatePDF(): void {
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });

    const element = document.getElementById('pdf-container');
    const studentName = this.student()?.lastName || 'névtelen';

    if (!element) {
      console.warn('📄 PDF generálás sikertelen: hiányzik az elem!');
      return;
    }

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 0.5);
      const imgProps = pdf.getImageProperties(imgData);

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CV - ${studentName}.pdf`);
    });
  }

}
