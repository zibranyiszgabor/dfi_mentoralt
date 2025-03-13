import { Component, Input } from '@angular/core';
import { SpkApexChartsComponent } from '../../reusable-charts/spk-apex-charts/spk-apex-charts.component';

@Component({
  selector: 'spk-widgets-card1',
  imports: [SpkApexChartsComponent],
  templateUrl: './spk-widgets-card1.component.html',
  styleUrl: './spk-widgets-card1.component.scss'
})
export class SpkWidgetsCard1Component {
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() price: string = '';
  @Input() percentageChange: string = '';
  @Input() chartOptions: any;  // Apex chart options
  @Input() iconClass: string = '';
  @Input() chartId: string = '';
  @Input() svgPath: string = '';
}
