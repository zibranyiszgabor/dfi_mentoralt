import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  showPassword = false;
  showPassword1 = false;
  showPassword2 = false;
  toggleClass = "off-line";
  toggleClass1 = "off-line";
   toggleClass2 = "off-line";

  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }
  createpassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === "off-line") {
      this.toggleClass1 = "line";
    } else {
      this.toggleClass1 = "off-line";
    }
  }
  createpassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.toggleClass2 === "off-line") {
      this.toggleClass2 = "line";
    } else {
      this.toggleClass2 = "off-line";
    }
  }
}
