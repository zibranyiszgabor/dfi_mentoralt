import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-contacts-card',
  imports: [CommonModule,SpkDropdownsComponent],
  templateUrl: './spk-contacts-card.component.html',
  styleUrl: './spk-contacts-card.component.scss'
})
export class SpkContactsCardComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() wishlist!: string; 
  @Input() isFavorite!: boolean;
}
