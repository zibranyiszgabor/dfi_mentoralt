
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkDropdownsComponent,CommonModule],
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.scss'
})
export class BlogdetailsComponent {
  dropdownItems = [
    { item: 'Edit',icon:'edit'},
    { item: 'Reply',icon:'corner-up-left'},
    { item: 'Report Abuse',icon:'flag '},
    { item: 'Delete',icon:'trash-2'},
  ]

  users = [
    {
      name: 'Simon Sais',
      image: './assets/images/faces/1.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Cherry Blossom',
      image: './assets/images/faces/3.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Ivan Notheridiya',
      image: './assets/images/faces/5.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Manny Jah',
      image: './assets/images/faces/15.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    }
  ];

  blogs = [
    {
      title: 'Generator on the Internet..',
      image: './assets/images/media/photos/5.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      title: 'Voluptatem quia voluptas...',
      image: './assets/images/media/photos/6.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      title: 'Generator on the Internet..',
      image: './assets/images/media/photos/1.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      title: 'Voluptatem quia voluptas...',
      image: './assets/images/media/photos/7.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
  ];


  showReply = false; // To track the visibility of the reply block

  toggleReply(): void {
    this.showReply = !this.showReply; // Toggle the visibility of the reply block
  }

  cancelReply(): void {
    this.showReply = false; // Hide the reply block
  }
  
  showReply1 = false; // To track the visibility of the reply block

  toggleReply1(): void {
    this.showReply1 = !this.showReply1; // Toggle the visibility of the reply block
  }

  cancelReply1(): void {
    this.showReply1 = false; // Hide the reply block
  }
  
  showReply2 = false; // To track the visibility of the reply block

  toggleReply2(): void {
    this.showReply2 = !this.showReply2; // Toggle the visibility of the reply block
  }

  cancelReply2(): void {
    this.showReply2 = false; // Hide the reply block
  }

  showReply3 = false; // To track the visibility of the reply block

  toggleReply3(): void {
    this.showReply3 = !this.showReply3; // Toggle the visibility of the reply block
  }

  cancelReply3(): void {
    this.showReply3 = false; // Hide the reply block
  }
  showReply4 = false; // To track the visibility of the reply block

  toggleReply4(): void {
    this.showReply4 = !this.showReply4; // Toggle the visibility of the reply block
  }

  cancelReply4(): void {
    this.showReply4 = false; // Hide the reply block
  }

  showReply5 = false; // To track the visibility of the reply block

  toggleReply5(): void {
    this.showReply5 = !this.showReply5; // Toggle the visibility of the reply block
  }

  cancelReply5(): void {
    this.showReply5 = false; // Hide the reply block
  }
}