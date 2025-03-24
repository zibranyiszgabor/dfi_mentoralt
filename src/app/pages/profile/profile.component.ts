import { Component } from '@angular/core';
import { NgbNavModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-26.jpg',
    previewUrl: './assets/images/media/media-26.jpg',
  },
  {
    srcUrl: './assets/images/media/media-32.jpg',
    previewUrl: './assets/images/media/media-32.jpg',
  },
  {
    srcUrl: './assets/images/media/media-30.jpg',
    previewUrl: './assets/images/media/media-30.jpg',
  },
  {
    srcUrl: './assets/images/media/media-31.jpg',
    previewUrl: './assets/images/media/media-31.jpg',
  },
];
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule,NgbNavModule,NgSelectModule,NgbDropdownModule,
    GalleryModule,LightboxModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profile.component.html', 
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {

  imageData = data;
  items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
  tasks = [
    {
      title: 'Testing',
      status: 'Pending',
      addClass: 'secondary',
      statusClass: 'info',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal1'
    },
    {
      title: 'Creating Home Page Website',
      status: 'Completed',
      addClass: 'success',
      statusClass: 'success',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal2'
    },
    {
      title: 'Data table Design',
      status: 'Pending',
      addClass: 'primary',
      statusClass: 'info',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal3'
    },
    {
      title: 'Design Horizontal Layout',
      status: 'Completed',
      addClass: 'success',
      statusClass: 'success',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal4'
    },
    {
      title: 'Fix Header Issue',
      status: 'Inprogress',
      addClass: 'primary',
      statusClass: 'pink',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal5'
    },
    {
      title: 'Creating Home Page Website',
      status: 'Completed',
      addClass: 'primary',
      statusClass: 'success',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal2'
    },
    {
      title: 'Data table Design',
      status: 'Pending',
      addClass: 'success',
      statusClass: 'info',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal3'
    },
    {
      title: 'Creating Home Page Website',
      status: 'Completed',
      addClass: 'info',
      statusClass: 'success',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal2'
    },
    {
      title: 'Creating Home Page Website',
      status: 'Completed',
      addClass: 'info',
      statusClass: 'success',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal2'
    },
    {
      title: 'Fix Header Issue',
      status: 'Inprogress',
      addClass: 'info',
      statusClass: 'pink',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      modalId: 'addpromodal5'
    },
  ];
  teamMembers = [
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Samantha May',
      email: 'samanthamay2912@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    },
    {
      avatar: './assets/images/faces/15.jpg',
      name: 'Andrew Garfield',
      email: 'andrewgarfield98@gmail.com',
      role: 'Team Lead',
      badgeClass: 'bg-success-transparent',
    },
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Jessica Cashew',
      email: 'jessicacashew143@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    },
    {
      avatar: './assets/images/faces/11.jpg',
      name: 'Simon Cowan',
      email: 'simoncowan123@gmail.com',
      role: 'Team Manager',
      badgeClass: 'bg-warning-transparent',
    },
    {
      avatar: './assets/images/faces/7.jpg',
      name: 'Amanda Nunes',
      email: 'amandanunes45@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    },
    {
      avatar: './assets/images/faces/12.jpg',
      name: 'Mahira Hose',
      email: 'mahirahose9456@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    },
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Samantha May',
      email: 'samanthamay2912@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    },
    {
      avatar: './assets/images/faces/15.jpg',
      name: 'Andrew Garfield',
      email: 'andrewgarfield98@gmail.com',
      role: 'Team Lead',
      badgeClass: 'bg-success-transparent',
    },
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Jessica Cashew',
      email: 'jessicacashew143@gmail.com',
      role: 'Team Member',
      badgeClass: 'bg-info-transparent',
    }
    
  ];
  followers = [
    {
      avatar: './assets/images/faces/1.jpg',
      name: 'Alicia Sierra',
      email: 'aliciasierra389@gmail.com',
    },
    {
      avatar: './assets/images/faces/3.jpg',
      name: 'Samantha Mery',
      email: 'samanthamery@gmail.com',
    },
    {
      avatar: './assets/images/faces/6.jpg',
      name: 'Juliana Pena',
      email: 'juliapena555@gmail.com',
    },
    {
      avatar: './assets/images/faces/15.jpg',
      name: 'Adam Smith',
      email: 'adamsmith99@gmail.com',
    },
    {
      avatar: './assets/images/faces/13.jpg',
      name: 'Farhaan Ahmed',
      email: 'farhaanahmed989@gmail.com',
    },
  ];

  people = [
    {
      avatar: './assets/images/faces/12.jpg',
      name: 'John Paige',
      description: 'There are many variations of passages of Lorem Ipsum available ...',
    },
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Peter Hill',
      description: 'There are many variations of passages of Lorem Ipsum available ...',
    },
    {
      avatar: './assets/images/faces/9.jpg',
      name: 'Irene Harris',
      description: 'There are many variations of passages of Lorem Ipsum available ...',
    },
    {
      avatar: './assets/images/faces/4.jpg',
      name: 'Harry Fisher',
      description: 'There are many variations of passages of Lorem Ipsum available ...',
    },
  ];

}