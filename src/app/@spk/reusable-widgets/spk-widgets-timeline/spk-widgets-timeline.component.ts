import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-widgets-timeline',
  imports: [CommonModule,SpkDropdownsComponent],
  templateUrl: './spk-widgets-timeline.component.html',
  styleUrl: './spk-widgets-timeline.component.scss'
})
export class SpkWidgetsTimelineComponent {
  @Input() events: {
    date: string;
    day: string;
    content: string;
    time?: string;
    badgeType: string;
    badgeText: string;
  }[] = [];
}
