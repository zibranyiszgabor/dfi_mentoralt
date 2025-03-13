import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card2',
  imports: [],
  templateUrl: './spk-widgets-card2.component.html',
  styleUrl: './spk-widgets-card2.component.scss'
})
export class SpkWidgetsCard2Component {
  @Input() title: string = '';
  @Input() count: string = '';
  @Input() percentageChange: string = '';
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() textClass: string = '';
  @Input() textColor: string = '';
}
