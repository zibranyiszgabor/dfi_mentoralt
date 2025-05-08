import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MsalModule } from '@azure/msal-angular';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [NgbModule, MsalModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private modalService = inject(NgbModal);

  public loginAsEmployee(): void {
    console.log('🔹 Dolgozóként történő bejelentkezés...');
    this.authService.loginAsEmployee(); // 🔹 Dolgozói bejelentkezés
  }

  public loginAsStudent(): void {
    console.log('🔹 Diákként történő bejelentkezés...');
    this.authService.loginAsStudent(); // 🔹 Diák bejelentkezés
  }

  public open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  public logout(): void {
    this.authService.logout(); 
  }
}
