import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forcompany',
  imports: [CommonModule, RouterModule],
  templateUrl: './forcompany.component.html',
  styleUrl: './forcompany.component.scss'
})
export class ForcompanyComponent implements OnInit {
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
