import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card5',
  imports: [],
  templateUrl: './spk-widgets-card5.component.html',
  styleUrl: './spk-widgets-card5.component.scss'
})
export class SpkWidgetsCard5Component {
  @Input() borderTopClass: string = '';
  @Input() avatarClass: string = '';
  @Input() iconClass: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentage: string = '';
  @Input() badgeClass: string = '';
}
