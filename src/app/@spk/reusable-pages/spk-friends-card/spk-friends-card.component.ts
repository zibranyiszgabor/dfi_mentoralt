import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-friends-card',
  imports: [CommonModule],
  templateUrl: './spk-friends-card.component.html',
  styleUrl: './spk-friends-card.component.scss'
})
export class SpkFriendsCardComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() email!: string;
  @Input() role!: string;
  @Input() badgeClass!: string;

  onBlock() {
    // console.log(`${this.name} blocked.`);
  }

  onUnfollow() {
    // console.log(`${this.name} unfollowed.`);
  }
}
