import { Component } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/avatars';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-avatars',
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {
  prismcode = prismcodeData;
  title = 'Avatar Sizes';
  subtitle = 'Avatars of different sizes';
  title1 = 'Avatar With Icons';
  subtitle1 = 'Avatar contains icons to perform respective action.';
  title2 = 'Avatar With Online Status Indicators';
  subtitle2 = 'avatars having online status indicator';
  title3 = 'Avatar With Offline Status Indicators';
  subtitle3 = 'avatars having a offline status indicator';
  title4 = 'Avatars With Number Badges';
  subtitle4 = 'Avatar numbers indicates the no. of unread notififactions/messages';
  title5 = 'Avatar With Initials';
  subtitle5 = 'Avatar contains intials when user profile doesnt exist.';
  title6 = 'Stacked Avatars';
  subtitle6 = 'Group of avatars stacked together';
  title7 = 'Rounded Stacked Avatars';
  subtitle7 = 'Group of avatars stacked together.';
}
