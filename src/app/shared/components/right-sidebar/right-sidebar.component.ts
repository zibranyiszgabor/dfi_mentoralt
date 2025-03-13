import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NgbActiveOffcanvas, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports:[NgbNavModule,CommonModule,OverlayscrollbarsModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  @ViewChild('sidebar', {static: false}) sidebar!: ElementRef;
  private offcanvasService = inject(NgbOffcanvas);

  feeds = [
    {
      iconClass: 'fe fe-user',
      bgClass: 'bg-primary-transparent',
      iconColorClass: 'text-primary',
      title: 'New user registered',
    },
    {
      iconClass: 'fe fe-shopping-cart',
      bgClass: 'bg-secondary-transparent',
      iconColorClass: 'text-secondary',
      title: 'New order delivered',
    },
    {
      iconClass: 'fe fe-bell',
      bgClass: 'bg-danger-transparent',
      iconColorClass: 'text-danger',
      title: 'You have pending tasks',
    },
    {
      iconClass: 'fe fe-gitlab',
      bgClass: 'bg-warning-transparent',
      iconColorClass: 'text-warning',
      title: 'New version arrived',
    },
    {
      iconClass: 'fe fe-database',
      bgClass: 'bg-pink-transparent',
      iconColorClass: 'text-pink',
      title: 'Server #1 overloaded',
    },
    {
      iconClass: 'fe fe-check-circle',
      bgClass: 'bg-info-transparent',
      iconColorClass: 'text-info',
      title: 'New project launched',
    },
  ];

  settings = [
    {
      iconClass: 'fe fe-settings',
      bgClass: 'bg-primary-transparent',
      iconColorClass: 'text-primary',
      title: 'General Settings',
    },
    {
      iconClass: 'fe fe-map-pin',
      bgClass: 'bg-secondary-transparent',
      iconColorClass: 'text-secondary',
      title: 'Map Settings',
    },
    {
      iconClass: 'fe fe-headphones',
      bgClass: 'bg-danger-transparent',
      iconColorClass: 'text-danger',
      title: 'Support Settings',
    },
    {
      iconClass: 'fe fe-credit-card',
      bgClass: 'bg-warning-transparent',
      iconColorClass: 'text-warning',
      title: 'Payment Settings',
    },
    {
      iconClass: 'fe fe-bell',
      bgClass: 'bg-pink-transparent',
      iconColorClass: 'text-pink',
      title: 'Notification Settings',
    },
  ];
  chatUsers = [
    {
      name: 'Addie Minstra',
      status: 'offline',
      avatar: './assets/images/faces/2.jpg',
      message: "Hey! there I' am available....",
      link: 'chat.html',
    },
    {
      name: 'Rose Bush',
      status: 'online',
      avatar: './assets/images/faces/11.jpg',
      message: 'Okay...I will be waiting for you',
      link: 'chat.html',
    },
    {
      name: 'Claude Strophobia',
      status: 'offline',
      avatar: './assets/images/faces/10.jpg',
      message: 'Hi we can explain our new project......',
      link: 'chat.html',
    },
    {
      name: 'Eileen Dover',
      status: 'offline',
      avatar: './assets/images/faces/13.jpg',
      message: 'New product Launching...',
      link: 'chat.html',
    },
    {
      name: 'Willie Findit',
      status: 'online',
      avatar: './assets/images/faces/12.jpg',
      message: 'Okay...I will be waiting for you',
      link: 'chat.html',
    },
    {
      name: 'Manny Jah',
      status: 'offline',
      avatar: './assets/images/faces/15.jpg',
      message: 'Hi we can explain our new project......',
      link: 'chat.html',
    },
    {
      name: 'Cherry Blossom',
      status: 'offline',
      avatar: './assets/images/faces/4.jpg',
      message: "Hey! there I' am available....",
      link: 'chat.html',
    },
  ];
  chatUsers1 = [
    {
      name: 'Simon Sais',
      status: 'online',
      avatar: './assets/images/faces/7.jpg',
      message: 'Schedule Realease......',
      email: null,
    },
    {
      name: 'Laura Biding',
      status: 'offline',
      avatar: './assets/images/faces/9.jpg',
      message: 'Hi we can explain our new project......',
      email: null,
    },
    {
      name: 'Addie Minstra',
      status: 'online',
      avatar: './assets/images/faces/2.jpg',
      message: 'Contact me for details....',
      email: null,
    },
    {
      name: 'Ivan Notheridiya',
      status: 'offline',
      avatar: './assets/images/faces/9.jpg',
      message: 'Hi we can explain our new project......',
      email: null,
    },
    {
      name: 'Dulcie Veeta',
      status: 'offline',
      avatar: './assets/images/faces/14.jpg',
      message: 'Okay...I will be waiting for you',
      email: null,
    },
    {
      name: 'Florinda Carasco',
      status: 'offline',
      avatar: './assets/images/faces/11.jpg',
      message: 'New product Launching...',
      email: null,
    },
    {
      name: 'Cherry Blossom',
      status: 'online',
      avatar: './assets/images/faces/4.jpg',
      message: 'cherryblossom@gmail.com',
      email: 'cherryblossom@gmail.com',
    },
  ];
  tasks = [
    {
      title: 'Task Finished',
      date: '09 July 2021',
      description: 'Adam Berry finished task on',
      project: 'Project Management',
    },
    {
      title: 'New Comment',
      date: '05 July 2021',
      description: 'Victoria commented on Project',
      project: 'AngularJS Template',
    },
    {
      title: 'New Comment',
      date: '25 June 2021',
      description: 'Victoria commented on Project',
      project: 'AngularJS Template',
    },
    {
      title: 'Task Overdue',
      date: '14 June 2021',
      description: 'Petey Cruiser finished task',
      project: 'Integrated management',
    },
    {
      title: 'Task Overdue',
      date: '29 June 2021',
      description: 'Petey Cruiser finished task',
      project: 'Integrated management',
    },
    {
      title: 'Task Finished',
      date: '09 July 2021',
      description: 'Adam Berry finished task on',
      project: 'Project Management',
    }
  ];
}
