import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card1',
  templateUrl: './spk-widgets-card1.component.html',
  styleUrl: './spk-widgets-card1.component.scss'
})
export class SpkWidgetsCard1Component {
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() price: string = '';
  @Input() percentageChange: string = '';
 
  @Input() iconClass: string = '';
  @Input() svgPath: string = '';
}
