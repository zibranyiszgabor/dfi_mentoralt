import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkAboutusComponent } from '../../../@spk/reusable-pages/spk-aboutus/spk-aboutus.component';

@Component({
  selector: 'app-about-us',
  imports: [SharedModule,SpkAboutusComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  users = [
    {
      image: './assets/images/faces/2.jpg',
      name: 'Mike Rowe-Soft',
      role: 'Web designer',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      socialLinks: [
        { platform: 'Google', url: 'https://www.google.com/', iconClass: 'ri-google-fill text-secondary', bgClass: 'bg-secondary-transparent' },
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'ri-facebook-fill text-danger', bgClass: 'bg-danger-transparent' },
        { platform: 'Twitter', url: 'https://www.twitter.com/', iconClass: 'ri-twitter-x-line text-success', bgClass: 'bg-success-transparent' }
      ]
    },
    {
      image: './assets/images/faces/1.jpg',
      name: 'Florinda Carasco',
      role: 'Frontend Developer',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      socialLinks: [
        { platform: 'Google', url: 'https://www.google.com/', iconClass: 'ri-google-fill text-secondary', bgClass: 'bg-secondary-transparent' },
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'ri-facebook-fill text-danger', bgClass: 'bg-danger-transparent' },
        { platform: 'Twitter', url: 'https://www.twitter.com/', iconClass: 'ri-twitter-x-line text-success', bgClass: 'bg-success-transparent' }
      ]
    },
    {
      image: './assets/images/faces/9.jpg',
      name: 'Dulcie Veeta',
      role: 'Java Developer',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      socialLinks: [
        { platform: 'Google', url: 'https://www.google.com/', iconClass: 'ri-google-fill text-secondary', bgClass: 'bg-secondary-transparent' },
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'ri-facebook-fill text-danger', bgClass: 'bg-danger-transparent' },
        { platform: 'Twitter', url: 'https://www.twitter.com/', iconClass: 'ri-twitter-x-line text-success', bgClass: 'bg-success-transparent' }
      ]
    },
    {
      image: './assets/images/faces/4.jpg',
      name: 'Simon Sais',
      role: 'Python Developer',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      socialLinks: [
        { platform: 'Google', url: 'https://www.google.com/', iconClass: 'ri-google-fill text-secondary', bgClass: 'bg-secondary-transparent' },
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'ri-facebook-fill text-danger', bgClass: 'bg-danger-transparent' },
        { platform: 'Twitter', url: 'https://www.twitter.com/', iconClass: 'ri-twitter-x-line text-success', bgClass: 'bg-success-transparent' }
      ]
    }
  ];

  cards = [
    {
      icon: 'ti ti-users',
      bgClass: 'bg-primary-gradient',
      title: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
    },
    {
      icon: 'ti ti-rocket',
      bgClass: 'bg-secondary-gradient',
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
    },
    {
      icon: 'ti ti-brand-instagram',
      bgClass: 'bg-success-gradient',
      title: 'Social Media',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
    },
    {
      icon: 'ti ti-shopping-cart',
      bgClass: 'bg-danger-gradient',
      title: 'E-Commerce',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
    }
  ];
  
}
