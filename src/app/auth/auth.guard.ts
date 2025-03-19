import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    console.log('🔹 AuthGuard meghívva');

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/home']); // 🔹 Ha nincs bejelentkezve, átirányítás a login oldalra
      console.log('teszt1');

      return false;
    }
    console.log('teszt2');

    return true;
  }
}
