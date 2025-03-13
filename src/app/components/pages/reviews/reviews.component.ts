import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { SpkReviewStyle1Component } from '../../../@spk/reusable-pages/spk-review-style1/spk-review-style1.component';
import { SpkReviewStyle2Component } from '../../../@spk/reusable-pages/spk-review-style2/spk-review-style2.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SharedModule,SpkReviewStyle1Component,SpkReviewStyle2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  cards = [
    {
      avatar: './assets/images/faces/15.jpg',
      name: 'Alex Carey',
      rating: 4,
      timeAgo: '18 hrs ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 150,
      dislikes: 10
    },
    {
      avatar: './assets/images/faces/1.jpg',
      name: 'Adom Sharayi',
      rating: 4,
      timeAgo: '5 days ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 120,
      dislikes: 30
    },
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Davide Jonese',
      rating: 4,
      timeAgo: '25 days ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 140,
      dislikes: 60
    },
    {
      avatar: './assets/images/faces/6.jpg',
      name: 'Alisaben Avirayi',
      rating: 4,
      timeAgo: '28 days ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 100,
      dislikes: 20
    },
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Karen Vally',
      rating: 4,
      timeAgo: '1 month ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 200,
      dislikes: 50
    },
    {
      avatar: './assets/images/faces/8.jpg',
      name: 'Bollyes vrasu',
      rating: 4,
      timeAgo: '3 months ago',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      likes: 170,
      dislikes: 40
    }
  ];

  cards1 = [
    {
      avatar: './assets/images/faces/10.jpg',
      name: 'Jhonson Smith',
      role: 'CHIEF SECRETARY MBIO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 4.5,
      timeAgo: '16 hrs ago',
      reviewerName: 'Jhonson Smith'
    },
    {
      avatar: './assets/images/faces/12.jpg',
      name: 'Dwayne Stort',
      role: 'CEO ARMEDILLO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 4,
      timeAgo: '22 days ago',
      reviewerName: 'Dwayne Stort'
    },
    {
      avatar: './assets/images/faces/3.jpg',
      name: 'Jasmine Kova',
      role: 'AGGENT AMIO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 4.5,
      timeAgo: '26 days ago',
      reviewerName: 'Jasmine Kova'
    },
    {
      avatar: './assets/images/faces/16.jpg',
      name: 'Dolph MR',
      role: 'CEO MR BRAND',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 5,
      timeAgo: '1 month ago',
      reviewerName: 'Dolph MR'
    },
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Brenda Simpson',
      role: 'CEO AIBMO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 4.5,
      timeAgo: '1 month ago',
      reviewerName: 'Brenda Simpson'
    },
    {
      avatar: './assets/images/faces/7.jpg',
      name: 'Julia Sams',
      role: 'CHIEF SECRETARY BHOL',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio.',
      rating: 5,
      timeAgo: '2 months ago',
      reviewerName: 'Julia Sams'
    }
  ];
  
  
}