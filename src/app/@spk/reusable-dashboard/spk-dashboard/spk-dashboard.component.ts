import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkApexChartsComponent } from '../../reusable-charts/spk-apex-charts/spk-apex-charts.component';

@Component({
  selector: 'spk-dashboard',
  imports: [CommonModule,SpkApexChartsComponent],
  templateUrl: './spk-dashboard.component.html',
  styleUrl: './spk-dashboard.component.scss'
})
export class SpkDashboardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() trendIcon!: string; // Icon class for trend arrow
  @Input() trendColor!: string; // Text color for trend (e.g., text-secondary)
  @Input() trendValue!: string; // Trend percentage
  @Input() trendPeriod!: string; // Period for trend (e.g., Last week)
  @Input() chartId!: string; // ID for the chart canvas
  @Input('chartOptions') chartOptions:any;
}
