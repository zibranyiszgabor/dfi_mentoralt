import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgbNavModule,
    CommonModule,
    SharedModule,NgbOffcanvasModule,
    NgbDropdownModule,SpkDropdownsComponent,
    RouterModule,OverlayscrollbarsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: [],
})
export class ChatComponent {
  active = 1;
  RecentData = [
    {
      status: 'online',
      src: './assets/images/faces/5.jpg',
      name: 'Sujika',
      time: '1:32PM',
      message: "Need to go for lunch?",
      sent:'double-fill'
    },
    {
      status: 'online',
      src: './assets/images/faces/2.jpg',
      name: 'AlexJohnson',
      time: '12:24PM',
      message: 'Typing...',
      badge: '2',
      type:'chat-msg-typing'
    },
    {
      status: 'online',
      src: './assets/images/faces/10.jpg',
      name: 'SarahDavis',
      time: '1:21PM',
      message: "Just had the best coffee ever! ☕",
      sent:'double-fill',
    },
    {
      status: 'online',
      src: './assets/images/faces/8.jpg',
      name: 'DavidMiller',
      time: '12:32PM',
      message: 'Guess what? I aced that test!',
      sent:'double-fill'
    },
    
  ];
  RecentData1 = [
    {
      status: 'offline',
      src: './assets/images/faces/11.jpg',
      name: ' Andreas  ',
      time: '12:32PM',
      message: 'Movie night tonight? 🎬',
      sent:''
    },
    {
      status: 'offline',
      src: './assets/images/faces/3.jpg',
      name: 'Melissa Sean',
      time: '12:10PM',
      message: 'Work is dragging...',
    },
    {
      status: 'offline',
      src: './assets/images/faces/6.jpg',
      name: 'Samantha Paul',
      time: '10:12PM',
      message: 'Meet for lunch tomorrow?',
      unread:'chat-msg-unread '
    },
    {
      status: 'offline',
      src: './assets/images/faces/4.jpg',
      name: 'Megan Fox',
      time: '7:32PM',
      message: 'Weekend plans?',
    },
    {
      status: 'offline',
      src: './assets/images/faces/13.jpg',
      name: 'Nicholas Sams',
      time: '1:22PM',
      message: 'Craving pizza right now! 🍕',
    },
    {
      status: 'offline',
      src: './assets/images/faces/15.jpg',
      name: 'Pope Johnson',
      time: '10.21AM',
      message: 'Got any Netflix recommendations? ',
    },
  ]

  GroupData = [
    {
      name: '1) Family Together',
      status: '4 Online',
      bg: 'success-transparent',
      Qty: ' +19',
      src: './assets/images/faces/2.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/2.jpg',
      src3: './assets/images/faces/10.jpg',
    },
    {
      name: '2)   Work Buddies',
      status: '32 Online',
      bg: 'secondary-transparent',
      Qty: ' +12',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/3.jpg',
      src3: './assets/images/faces/9.jpg',
      src4: './assets/images/faces/12.jpg',
    },
    {
      name: '3) Friends Forever',
      status: '3 Online',
      bg: 'warning-transparent',
      Qty: ' +15',
      src: './assets/images/faces/4.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/13.jpg',
      src3: './assets/images/faces/12.jpg',
    },
    {
      name: '4) The Hangout Haven',
      status: '10 Online',
      bg: 'danger-transparent',
      Qty: ' +23',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/14.jpg',
      src3: './assets/images/faces/12.jpg',
      src4: './assets/images/faces/13.jpg',
    },
    {
      name: '5) The Family Room',
      status: '0 Online',
      bg: 'light text-dark',
      Qty: ' +15',
      src: './assets/images/faces/5.jpg',
      src1: './assets/images/faces/6.jpg',
      src2: './assets/images/faces/12.jpg',
      src3: './assets/images/faces/3.jpg',
    },
  ];
  GroupChatData = [
    {
      status: 'online',
      src: './assets/images/faces/17.jpg',
      name: '  BookLoversUnited 😍',
      time: '1:32PM',
      message: 'Hira Typing...',
      badge: '2',
      bg:'success-transparent',
      msgBg:'chat-msg-typing'
    },
    {
      status: 'online',
      src: './assets/images/faces/18.jpg',
      name: ' TogetherForever',
      time: '11:32PM',
      message1:'Ram :',
      message: 'Happy to be part of this group',
      bg:'',
      sent:'double-fill'
    },
    {
      status: 'offline',
      src: './assets/images/faces/19.jpg',
      name: 'The Idea Exchange Hub 😎',
      time: '3 days ago',
      message: 'Simon,Melissa,Amanda,Patrick,Siddique',
    },
    {
      status: 'offline',
      src: './assets/images/faces/20.jpg',
      name: ' TechieTribe',
      time: '5 days ago',
      message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
    },
    {
      status: 'offline',
      src: './assets/images/faces/21.jpg',
      name: 'The Chill Squad',
      time: '12 days ago',
      message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
    },
  ];
  imageData = [
    {
      srcUrl: './assets/images/media/media-56.jpg',
    },
    {
      srcUrl: './assets/images/media/media-52.jpg',
    
    },
    {
      srcUrl: './assets/images/media/media-53.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-62.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-63.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-64.jpg',
      
    },
    {
      srcUrl: './assets/images/media/media-13.jpg',
      
    },
    {
      srcUrl: './assets/images/media/media-19.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-56.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-53.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-62.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-52.jpg',
     
    },
    {
      srcUrl: './assets/images/media/media-63.jpg',
    },
    {
      srcUrl: './assets/images/media/media-56.jpg',
    },
    {
      srcUrl: './assets/images/media/media-13.jpg',
    },
    {
      srcUrl: './assets/images/media/media-20.jpg',
     
    },
  ]

  activeUser = this.RecentData[0];
  activeItemId: string | null = null; // Track the ID of the active item
  handleClick(activeUser: any): void {
    this.activeItemId = activeUser.name; // Set the clicked item as active
    localStorage.setItem('activeItemId', activeUser.name); 
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  private offcanvasService = inject(NgbOffcanvas);
 

  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }
  detailsclick1(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
  removedetails1() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }

 
}
