import { Component } from '@angular/core';
import { RibbonCardsComponent } from '../../../@spk/reusable-advancdui/ribbon-cards/ribbon-cards.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-ribbons',
  imports: [SharedModule,RibbonCardsComponent],
  templateUrl: './ribbons.component.html',
  styleUrl: './ribbons.component.scss'
})
export class RibbonsComponent {

}
