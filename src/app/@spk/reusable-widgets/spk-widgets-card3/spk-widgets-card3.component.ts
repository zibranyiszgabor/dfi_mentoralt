import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-widgets-card3', 
  imports: [CommonModule,SpkDropdownsComponent],
  templateUrl: './spk-widgets-card3.component.html',
  styleUrl: './spk-widgets-card3.component.scss'
})
export class SpkWidgetsCard3Component {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() count: string = '';
  @Input() percentageChange: string = '';
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() progressClass: string = '';
  @Input() targetPercentage: string = '';
  @Input() dropdownMenu: any[] = [];
  @Input() growth: string = 'up';
  @Input() textColor: string = '';
}
