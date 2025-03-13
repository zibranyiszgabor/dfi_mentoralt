import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lockscreen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lockscreen.component.html',
  styleUrl: './lockscreen.component.scss'
})
export class LockscreenComponent {
  showPassword = false;
  toggleClass = "off-line";

  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }
  
}
