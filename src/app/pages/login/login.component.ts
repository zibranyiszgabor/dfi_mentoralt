import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SpkLandingMissionCardComponent } from '../../@spk/reusable-pages/spk-landing-mission-card/spk-landing-mission-card.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
  imports: [SpkLandingMissionCardComponent], // 🔹 Itt kell importálni

})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  loginAsEmployee(): void {
    console.log('🔹 Dolgozóként történő bejelentkezés...');
    this.authService.loginAsEmployee(); // 🔹 Dolgozói bejelentkezés
  }

  loginAsStudent(): void {
    console.log('🔹 Diákként történő bejelentkezés...');
    this.authService.loginAsStudent(); // 🔹 Diák bejelentkezés
  }
}
