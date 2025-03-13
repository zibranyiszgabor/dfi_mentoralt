import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkNotificationsCardComponent } from '../../../@spk/reusable-pages/spk-notifications-card/spk-notifications-card.component';
import { SpkNotificationsCard4Component } from '../../../@spk/reusable-pages/spk-notifications-card4/spk-notifications-card4.component';

@Component({
  selector: 'app-notifications',
  imports: [SharedModule,SpkNotificationsCardComponent,SpkNotificationsCard4Component],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent { 
  notificationSections = [
    [
      {
        type: 'warning',
        title: 'New Notification',
        message:
          "Warning! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too good",
        badge: 'Update',
        badgeClass: 'bg-success',
        readTextBg: 'text-primary',
        iconBg: 'bg-warning-transparent',
        iconPath1:
          'M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z',
        iconColor: '#ffce6d',
        iconColor1: '#ffae0c',
        iconPath2:
          'M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z'
      },
      {
        type: 'success', 
        title: 'New Notification',
        message:
          "Success! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too good",
        badge: null,
        badgeClass: '',
        readTextBg: 'text-primary',
        iconBg: 'bg-success-transparent',
        iconPath1:
          'M20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z',
        iconColor: '#75cfa5',
        iconColor1: '#198754',
        iconPath2:
          'M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z'
      }
    ],
    [
      {
        type: 'danger',
        title: 'New Notification',
        message:
          "Danger! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too good",
        badge: 'Critical',
        badgeClass: 'bg-danger',
        readTextBg: 'text-primary',
        iconBg: 'bg-danger-transparent',
        iconPath1:
          'M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z',
        iconColor: '#ff9ea7',
        iconColor1: '#dc3545',
        iconPath2:
          'M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z'
      },
      {
        type: 'info',
        title: 'New Notification',
        message:
          "Info! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too goodWarning! Better check yourself, you're not looking too good",
        badge: 'Update',
        badgeClass: 'bg-info',
        readTextBg: 'text-primary',
        iconBg: 'bg-info-transparent',
        iconPath1:
          'M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z',
        iconColor: '#9ddbff',
        iconColor1: '#49b6f5',
        iconPath2:
          'M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z'
      }
    ]
  ];
  notificationSections2 = [
    [
      {
        type: 'warning',
        title: 'New Notification',
        message:
          "Warning! Better check yourself, you're not looking too goodWarning! Better check yourself",
        badge: 'Update',
        cardClass:'notify-border-start-warning',
        badgeClass: 'bg-success',
        readTextBg: 'text-primary',
        iconBg: 'bg-warning-transparent',
        iconPath1:
          'M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z',
        iconColor: '#ffce6d',
        iconColor1: '#ffae0c',
        iconPath2:
          'M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z'
      },
      {
        type: 'success', 
        title: 'New Notification',
        cardClass:'notify-border-start-success',
        message:
          "Success! Better check yourself, you're not looking too goodWarning! Better check yourself",
        badge: null,
        badgeClass: '',
        readTextBg: 'text-primary',
        iconBg: 'bg-success-transparent',
        iconPath1:
          'M20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z',
        iconColor: '#75cfa5',
        iconColor1: '#198754',
        iconPath2:
          'M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z'
      }
    ],
    [
      {
        type: 'danger',
        title: 'New Notification',
        cardClass:'notify-border-start-danger',
        message:
          "Danger! Better check yourself, you're not looking too goodWarning! Better check yourself.",
        badge: 'Critical',
        badgeClass: 'bg-danger',
        readTextBg: 'text-primary',
        iconBg: 'bg-danger-transparent',
        iconPath1:
          'M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z',
        iconColor: '#ff9ea7',
        iconColor1: '#dc3545',
        iconPath2:
          'M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z'
      },
      {
        type: 'info',
        title: 'New Notification',
        cardClass:'notify-border-start-info',
        message:
          "Info! Better check yourself, you're not looking too goodWarning! Better check yourself.",
        badge: 'Update',
        badgeClass: 'bg-info',
        readTextBg: 'text-primary',
        iconBg: 'bg-info-transparent',
        iconPath1:
          'M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z',
        iconColor: '#9ddbff',
        iconColor1: '#49b6f5',
        iconPath2:
          'M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z'
      }
    ]
  ];
  notificationSections3 = [
    [
      {
        type: 'warning',
        title: 'New Notification',
        message:
          "Warning! Better check yourself, you're not looking too goodWarning! Better check yourself",
        badge: 'Update',
        cardClass:'bg-warning-transparent border-warning',
        badgeClass: 'bg-warning',
        readTextBg: 'text-warning',
        iconBg: 'bg-warning',
        iconPath1:
          'M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z',
        iconColor: '#ffce6d',
        iconColor1: '#ffae0c',
        iconPath2:
          'M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z'
      },
      {
        type: 'success', 
        title: 'New Notification',
        cardClass:'bg-success-transparent border-success',
        message:
          "Success! Better check yourself, you're not looking too goodWarning! Better check yourself",
        badge: null,
        badgeClass: '',
        iconBg: 'bg-success',
        readTextBg: 'text-success',
        iconPath1:
          'M20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z',
        iconColor: '#75cfa5',
        iconColor1: '#198754',
        iconPath2:
          'M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z'
      }
    ],
    [
      {
        type: 'danger',
        title: 'New Notification',
        cardClass:'bg-danger-transparent border-danger',
        message:
          "Danger! Better check yourself, you're not looking too goodWarning! Better check yourself.",
          badge: null,
        badgeClass: '',
        readTextBg: 'text-danger',
        iconBg: 'bg-danger',
        iconPath1:
          'M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z',
        iconColor: '#ff9ea7',
        iconColor1: '#dc3545',
        iconPath2:
          'M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z'
      },
      {
        type: 'info',
        title: 'New Notification',
        cardClass:'bg-info-transparent border-info',
        message:
          "Info! Better check yourself, you're not looking too goodWarning! Better check yourself.",
        badge: 'Update',
        badgeClass: 'bg-info',
        readTextBg: 'text-info',
        iconBg: 'bg-info',
        iconPath1:
          'M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z',
        iconColor: '#9ddbff',
        iconColor1: '#49b6f5',
        iconPath2:
          'M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z'
      }
    ]
  ];
  notifications = [
    [
      {
        avatar: './assets/images/faces/4.jpg',
        status: 'online',
        isImage:true,
        name: 'Emperio',
        verifiedText:false,
        description: 'Project assigned by the manager all',
        badgeText: 'files',
        badgeClass: 'bg-primary-transparent',
        time: '12 mins ago'
      },
      {
        avatar: './assets/images/faces/15.jpg',
        status: 'offline',
        isImage:true,
        verifiedText:true,
        name: 'Dwayne Bero',
        description: 'Admin and other team accepted your work request',
        badgeText: '',
        badgeClass: '',
        time: '17 mins ago'
      }
    ],
    [
      {
        avatar: './assets/images/faces/11.jpg',
        status: 'offline',
        isImage:true,
        verifiedText:false,
        name: 'Alister Chuk',
        description: 'Temporary data will be',
        badgeText: 'deleted',
        badgeClass: 'bg-danger-transparent',
        time: '4 hrs ago'
      },
      {
        avatar: './assets/images/faces/5.jpg',
        status: 'online',
        isImage:true,
        verifiedText:true,
        name: 'Melissa Blue',
        description: 'Approved date for sanction of loan is verified',
        badgeText: '',
        badgeClass: '',
        time: '5 hrs ago'
      }
    ]
  ];
  notifications5 = [
    [
      {
        isAvatar:true,
        avatarName:'EP',
        avatarBg:'warning',
        status: 'online',
        name: 'Emperio',
        description: 'Project assigned by the manager all',
        badgeText: 'files',
        badgeClass: 'bg-primary-transparent',
        time: '12 mins ago',
        verifiedText:false,
      },
      {
        
        isAvatar:true,
        avatarName:'AC',
        avatarBg:'pink',
        status: 'offline',
        name: 'Dwayne Bero',
        description: 'Admin and other team accepted your work request',
        badgeText: '',
        badgeClass: '',
        verifiedText:false,
        time: '17 mins ago'
      }
    ],
    [
      {
       
        isAvatar:true,
        avatarName:'DB',
        avatarBg:'info',
        status: 'offline',
        name: 'Alister Chuk',
        description: 'Temporary data will be',
        badgeText: 'deleted',
        badgeClass: 'bg-danger-transparent',
        time: '4 hrs ago',
        verifiedText:false,
      },
      {
        isAvatar:true,
        avatarName:'MB',
        avatarBg:'success',
        status: 'online',
        name: 'Melissa Blue',
        description: 'Approved date for sanction of loan is verified',
        badgeText: '',
        verifiedText:true,
        badgeClass: '',
        time: '5 hrs ago'
      }
    ]
  ];
}
