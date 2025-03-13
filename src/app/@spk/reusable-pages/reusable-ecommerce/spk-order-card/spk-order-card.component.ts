import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-order-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './spk-order-card.component.html',
  styleUrl: './spk-order-card.component.scss'
})
export class SpkOrderCardComponent {
  @Input() order: any;
}
