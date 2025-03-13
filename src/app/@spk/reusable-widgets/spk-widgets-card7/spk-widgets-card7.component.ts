import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card7',
  imports: [],
  templateUrl: './spk-widgets-card7.component.html',
  styleUrl: './spk-widgets-card7.component.scss'
})
export class SpkWidgetsCard7Component {
  @Input() iconClass: string = '';
  @Input() title: string = '';
  @Input() percentage: string = '';
  @Input() percentageClass: string = '';
  @Input() price: string = '';
  @Input() change: string = '';
  @Input() changeClass: string = '';
}
