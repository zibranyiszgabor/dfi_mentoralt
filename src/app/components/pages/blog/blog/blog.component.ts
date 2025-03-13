import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  imageUrl: string = './assets/images/media/photos/6.jpg';
  blogs = [
    {
      image: './assets/images/media/photos/2.jpg',
      title: 'Voluptatem quia voluptas.',
      description:'To take a trivial example, which of us ever undertakes laborious physical exerciser, except to obtain some advantage from it...',
      authorName: 'Megan Peters',
      authorImage: './assets/images/faces/18.jpg',
      daysAgo: '1 day ago',
      blogLink: '/pages/blog/blogdetails',
      profileLink: '/pages/profile'
    },
    {
      image: './assets/images/media/photos/4.jpg',
      title: 'Voluptatem quia voluptas',
      description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...',
      authorName: 'Carol Paige',
      authorImage: './assets/images/faces/6.jpg',
      daysAgo: '2 days ago',
      blogLink: '/pages/blog/blogdetails',
      profileLink: '/pages/profile'
    },
  ];

}