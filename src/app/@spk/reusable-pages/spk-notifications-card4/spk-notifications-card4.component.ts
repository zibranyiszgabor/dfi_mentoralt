import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-notifications-card4',
  imports: [CommonModule],
  templateUrl: './spk-notifications-card4.component.html',
  styleUrl: './spk-notifications-card4.component.scss'
})
export class SpkNotificationsCard4Component {
  @Input() avatar!: string;
    @Input() status!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() badgeText!: string;
  @Input() badgeClass!: string;
  @Input() time!: string;
  @Input() avatarBg!: string;
  @Input() avatarName!: string;
  @Input() isImage!: boolean;
  @Input() isAvatar!: boolean;
  @Input() verifiedText!: boolean;

}
