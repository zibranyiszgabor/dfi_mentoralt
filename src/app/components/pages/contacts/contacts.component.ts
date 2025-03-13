import { Component } from '@angular/core';
import { SpkContactsCardComponent } from '../../../@spk/reusable-pages/spk-contacts-card/spk-contacts-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SpkContactsCardComponent,SpkDropdownsComponent,NgbTooltipModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  contacts = [
    {
      avatar: './assets/images/faces/4.jpg',
      wishlist:'fill',
      name: 'Melissa Jane',
      email: 'melissajane2134@gmail.com',
      phone: '+1(555) 354 2345',
      isFavorite: true
    },
    {
      avatar: './assets/images/faces/15.jpg',
       wishlist:'line',
      name: 'Simon Cowall',
      email: 'simoncowal111@gmail.com',
      phone: '+1(555) 873 8923',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/2.jpg',
       wishlist:'fill',
      name: 'Susana Sane',
      email: 'susanasane@gmail.com',
      phone: '+1(555) 347 0923',
      isFavorite: true
    },
    {
      avatar: './assets/images/faces/13.jpg',
       wishlist:'line',
      name: 'Shane Watson',
      email: 'shanewatson@gmail.com',
      phone: '+1(555) 674 7824',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-39.jpg',
       wishlist:'line',
      name: 'Dwayne Happy',
      email: 'dwaynehappy235@gmail.com',
      phone: '+1(555) 985 2893',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/5.jpg',
       wishlist:'line',
      name: 'Meisha Tite',
      email: 'meishatite456@gmail.com',
      phone: '+1(555) 675 4680',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/10.jpg',
       wishlist:'line',
      name: 'Andrew Gerfield',
      email: 'andrewgerfield00@gmail.com',
      phone: '+1(555) 765 8937',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/21.jpg',
       wishlist:'line',
      name: 'Samantha Melon',
      email: 'samanthamelon@gmail.com',
      phone: '+1(555) 890 5687',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/11.jpg',
       wishlist:'line',
      name: 'Elisha Smith',
      email: 'elishasmith@gmail.com',
      phone: '+1(555) 972 9883',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-63.jpg',
       wishlist:'fill',
      name: 'Devon Convoy',
      email: 'devonconvoy65@gmail.com',
      phone: '+1(555) 693 7836',
      isFavorite: true
    },
    {
      avatar: './assets/images/media/media-21.jpg',
       wishlist:'line',
      name: 'Shensovic Jeremy',
      email: 'shensovicjeremy@gmail.com',
      phone: '+1(555) 238 2342',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/12.jpg',
       wishlist:'line',
      name: 'Jason Mama',
      email: 'jasonmama96@gmail.com',
      phone: '+1(555) 875 6789',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/1.jpg',
       wishlist:'line',
      name: 'Monika Karen',
      email: 'monikakaren@gmail.com',
      phone: '+1(555) 568 9234',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-13.jpg',
       wishlist:'line',
      name: 'Tom Holland',
      email: 'tomholland98@gmail.com',
      phone: '+1(555) 892 4334',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-36.jpg',
       wishlist:'line',
      name: 'Angelica Julie',
      email: 'angelicajulie@gmail.com',
      phone: '+1(555) 882 3445',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/8.jpg',
       wishlist:'line',
      name: 'Aneera Khan',
      email: 'aneerakhan@gmail.com',
      phone: '+1(555) 973 8734',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/21.jpg',
       wishlist:'fill',
      name: 'Linda Simson',
      email: 'lindasimson@gmail.com',
      phone: '+1(555) 234 9345',
      isFavorite: true
    },
    {
      avatar: './assets/images/faces/14.jpg',
       wishlist:'line',
      name: 'Umaga Nigel',
      email: 'umaganigel89@gmail.com',
      phone: '+1(555) 783 0213',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-8.jpg',
       wishlist:'fill',
      name: 'Json Taylor',
      email: 'jsontaylor@gmail.com',
      phone: '+1(555) 234 2452',
      isFavorite: true
    },
    {
      avatar: './assets/images/faces/7.jpg',
       wishlist:'line',
      name: 'Karizma Tope',
      email: 'karizmatope@gmail.com',
      phone: '+1(555) 890 2455',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-34.jpg',
       wishlist:'line',
      name: 'Gahaskar Shaik',
      email: 'gahaskarshaik@gmail.com',
      phone: '+1(555) 982 7648',
      isFavorite: false
    },
    {
      avatar: './assets/images/media/media-21.jpg',
       wishlist:'line',
      name: 'Balvinder Singh',
      email: 'balvindersingh@gmail.com',
      phone: '+1(555) 002 1239',
      isFavorite: false
    },
    {
      avatar: './assets/images/faces/6.jpg',
       wishlist:'line',
      name: 'Ramika Missi',
      email: 'ramikamissi@gmail.com',
      phone: '+1(555) 982 4834',
      isFavorite: false
    }
  ];
  
}
