import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  showLogin = false;
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.authService.initAndCheckLogin();
  }

  logout(): void {
    console.log('🔹 Dolgozóként történő bejelentkezés...');
    this.authService.logout(); // 🔹 Dolgozói bejelentkezés
  }

  loginAsEmployee(): void {
    console.log('🔹 Dolgozóként történő bejelentkezés...');
    this.authService.loginAsEmployee(); // 🔹 Dolgozói bejelentkezés
  }

  loginAsStudent(): void {
    console.log('🔹 Diákként történő bejelentkezés...');
    this.authService.loginAsStudent(); // 🔹 Diák bejelentkezés
  }

}
