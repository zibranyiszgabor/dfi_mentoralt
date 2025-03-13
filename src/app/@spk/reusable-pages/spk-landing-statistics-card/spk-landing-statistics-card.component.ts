import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-landing-statistics-card',
  imports: [CommonModule],
  templateUrl: './spk-landing-statistics-card.component.html',
  styleUrl: './spk-landing-statistics-card.component.scss'
})
export class SpkLandingStatisticsCardComponent {
  @Input() bgClass: string = 'bg-primary-transparent';
  @Input() iconClass: string = 'icon-1';
  @Input() icon: string = 'fe fe-layers';
  @Input() count: number = 0;
  @Input() label: string = '';
}
