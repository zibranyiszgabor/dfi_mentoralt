import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card4',
  imports: [CommonModule],
  templateUrl: './spk-widgets-card4.component.html',
  styleUrl: './spk-widgets-card4.component.scss'
})
export class SpkWidgetsCard4Component {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() badgeClass: string = '';
  @Input() percentageChange: string = '';
  @Input() valueClass: string = '';
  @Input() textClass: string = '';
}
