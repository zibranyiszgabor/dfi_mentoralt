import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }
}
