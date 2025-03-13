import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-notifications-card',
  imports: [CommonModule],
  templateUrl: './spk-notifications-card.component.html',
  styleUrl: './spk-notifications-card.component.scss'
})
export class SpkNotificationsCardComponent {
  @Input() type!: string;
  @Input() title!: string;
  @Input() message!: string;
  @Input() cardClass!: string;
  @Input() badge!: string | null;
  @Input() badgeClass!: string;
  @Input() iconBg!: string;
  @Input() readTextBg!: string;
  @Input() iconPath1!: string;
  @Input() iconColor!: string;
  @Input() iconColor1!: string;
  @Input() iconPath2?: string;
  @Input() borderColor?: string;
  @Input() textColor?: string;
}
