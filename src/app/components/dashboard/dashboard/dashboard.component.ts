import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkDashboardComponent } from '../../../@spk/reusable-dashboard/spk-dashboard/spk-dashboard.component';
import { SpkReusableTablesComponent } from '../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
import { ChartOptions, ChartOptions1, ChartOptions2, ChartOptions3, RecentOrdersData, RevenueChartData } from '../../../shared/data/dashboard';
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkLeafletMapComponent } from '../../../@spk/spk-leaflet-map/spk-leaflet-map.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule,NgApexchartsModule,SpkDashboardComponent,SpkReusableTablesComponent,CommonModule,SpkApexChartsComponent,SpkLeafletMapComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public chartOptions = ChartOptions; 
  public chartOptions1 = ChartOptions1;
  public chartOptions2 = ChartOptions2;
  public chartOptions3 = ChartOptions3;
  public chartOptions4 = RevenueChartData; 
  public chartOptions5 = RecentOrdersData; 
  cardData = [
    {
      title: 'Total Users',
      value: '44,278',
      trendIcon: 'fe fe-arrow-up-circle text-secondary',
      trendColor: 'text-secondary',
      trendValue: '5%',
      trendPeriod: 'Last week',
      chartId: 'saleschart',
      chartOptions:this.chartOptions
    },
    {
      title: 'Total Profit',
      value: '67,987',
      trendIcon: 'fe fe-arrow-down-circle text-pink',
      trendColor: 'text-pink',
      trendValue: '0.75%',
      trendPeriod: 'Last 6 days',
      chartId: 'leadschart',
      chartOptions:this.chartOptions1
    },
    {
      title: 'Total Expenses',
      value: '$76,965',
      trendIcon: 'fe fe-arrow-up-circle text-green',
      trendColor: 'text-green',
      trendValue: '0.9%',
      trendPeriod: 'Last 9 days',
      chartId: 'profitchart',
      chartOptions:this.chartOptions2
    },
    {
      title: 'Total Cost',
      value: '$59,765',
      trendIcon: 'fe fe-arrow-up-circle text-warning',
      trendColor: 'text-warning',
      trendValue: '0.6%',
      trendPeriod: 'Last year',
      chartId: 'costchart',
      chartOptions:this.chartOptions3
    }
  ];

  taskList = [
    {
      iconClass: 'bg-primary',
      title: 'Task Finished',
      date: '09 July 2023',
      description: 'Adam Berry finished task on',
      project: 'Project Management',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    },
    {
      iconClass: 'bg-secondary',
      title: 'New Comment',
      date: '05 July 2023',
      description: 'Victoria commented on Project',
      project: 'AngularJS Template',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    },
    {
      iconClass: 'bg-success',
      title: 'New Comment',
      date: '25 June 2023',
      description: 'Victoria commented on Project',
      project: 'AngularJS Template',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    },
    {
      iconClass: 'bg-warning',
      title: 'Task Overdue',
      date: '14 June 2023',
      description: 'Petey Cruiser finished task',
      project: 'Integrated management',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    },
    {
      iconClass: 'bg-danger',
      title: 'Task Overdue',
      date: '29 June 2023',
      description: 'Petey Cruiser finished task',
      project: 'Integrated management',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    },
    {
      iconClass: 'bg-info',
      title: 'Task Finished',
      date: '09 July 2023',
      description: 'Adam Berry finished task on',
      project: 'Project Management',
      projectLink: 'javascript:void(0)',
      editTooltip: 'Edit',
      deleteTooltip: 'Delete'
    }
  ];

  BrowserTrafficColumn = [
    {header:'Device',tableHeadColumn:'text-start'},
    {header:'USA'}, 
    {header:'India'},
    {header:'Bahrain'}, 

  ]
  salesData = [
    {
      iconClass: 'bi bi-phone',
      textColor: 'text-primary',
      bgColor: 'bg-primary-transparent',
      name: 'Mobiles',
      percentages: ['17%', '22%', '11%']
    },
    {
      iconClass: 'bi bi-display',
      textColor: 'text-secondary',
      bgColor: 'bg-secondary-transparent',
      name: 'Desktops',
      percentages: ['34%', '76%', '58%']
    },
    {
      iconClass: 'bi bi-tablet',
      textColor: 'text-danger',
      bgColor: 'bg-danger-transparent',
      name: 'Tablets',
      percentages: ['56%', '83%', '66%']
    }
  ];

  browsers = [
    {
      image: './assets/images/browsers/chrome.svg',
      name: 'Chrome',
      users: '35,502',
      change: '12.75%',
      changeClass: 'text-success',
      changeIcon: 'fe fe-arrow-up',
      progressBarClass: 'bg-primary',
      progressWidth: '70%'
    },
    {
      image: './assets/images/browsers/opera.svg',
      name: 'Opera',
      users: '12,563',
      change: '15.12%',
      changeClass: 'text-danger',
      changeIcon: 'fe fe-arrow-down',
      progressBarClass: 'bg-secondary',
      progressWidth: '40%'
    },
    {
      image: './assets/images/browsers/ie.svg',
      name: 'IE',
      users: '25,364',
      change: '24.37%',
      changeClass: 'text-success',
      changeIcon: 'fe fe-arrow-down',
      progressBarClass: 'bg-success',
      progressWidth: '50%'
    },
    {
      image: './assets/images/browsers/firefox.svg',
      name: 'Firefox',
      users: '14,635',
      change: '15.63%',
      changeClass: 'text-success',
      changeIcon: 'fe fe-arrow-down',
      progressBarClass: 'bg-danger',
      progressWidth: '50%'
    },
    {
      image: './assets/images/browsers/edge.svg',
      name: 'Edge',
      users: '15,453',
      change: '23.70%',
      changeClass: 'text-danger',
      changeIcon: 'fe fe-arrow-down',
      progressBarClass: 'bg-warning',
      progressWidth: '10%'
    },
    {
      image: './assets/images/browsers/safari.svg',
      name: 'Safari',
      users: '10,054',
      change: '11.04%',
      changeClass: 'text-success',
      changeIcon: 'fe fe-arrow-up',
      progressBarClass: 'bg-info',
      progressWidth: '40%'
    },
    {
      image: './assets/images/browsers/netscape.svg',
      name: 'Netscape',
      users: '35,502',
      change: '12.75%',
      changeClass: 'text-success',
      changeIcon: 'fe fe-arrow-up',
      progressBarClass: 'bg-green',
      progressWidth: '30%'
    }
  ];

  ProductColumn = [
    {header:'Tracking Id'},
    {header:'Product'}, 
    {header:'Customer'},
    {header:'Date'}, 
    {header:'Amount'}, 
    {header:'Payment Mode'}, 
    {header:'Status'}, 
    {header:'Action'}, 
  ]
  products = [
    {
      trackingId: '#98765490',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2023',
      amount: '$6,721.5',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/9.jpg'
    },
    {
      trackingId: '#76348798',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2023',
      amount: '$35,786.3',
      paymentMode: 'Online Payment',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/11.jpg'
    },
    {
      trackingId: '#23986456',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2023',
      amount: '$5,896.437',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/4.jpg'
    },
    {
      trackingId: '#87456325',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2023',
      amount: '$17.98',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/8.jpg'
    },
    {
      trackingId: '#65783926',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/6.jpg'
    },
    {
      trackingId: '#34654895',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/1.jpg'
    },
    {
      trackingId: '#98765345',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2023',
      amount: '$7,349.768',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/10.jpg'
    },
    {
      trackingId: '#67546577',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2023',
      amount: '$7,766.54',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/2.jpg'
    }
  ];
  products1 = [
    {
      trackingId: '#98765490',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2023',
      amount: '$6,721.5',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/9.jpg'
    },
    {
      trackingId: '#76348798',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2023',
      amount: '$35,786.3',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/11.jpg'
    },
    {
      trackingId: '#23986456',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2023',
      amount: '$5,896.437',
      paymentMode: 'Cash on Delivery',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/4.jpg'
    },
    {
      trackingId: '#87456325',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2023',
      amount: '$17.98',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/8.jpg'
    },
    {
      trackingId: '#65783926',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/6.jpg'
    },
    {
      trackingId: '#34654895',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/1.jpg'
    },
    {
      trackingId: '#98765345',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2023',
      amount: '$7,349.768',
      paymentMode: 'Online Payment',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/10.jpg'
    },
    {
      trackingId: '#67546577',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2023',
      amount: '$7,766.54',
      paymentMode: 'Cash on Delivery',
      status: 'Shipped',
      image: './assets/images/ecommerce/orders/2.jpg'
    }
  ];
  products2 = [
    {
      trackingId: '#98765490',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2023',
      amount: '$6,721.5',
      paymentMode: 'Online Payment',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/9.jpg'
    },
    {
      trackingId: '#76348798',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2023',
      amount: '$35,786.3',
      paymentMode: 'Online Payment',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/11.jpg'
    },
    {
      trackingId: '#23986456',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2023',
      amount: '$5,896.437',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/4.jpg'
    },
    {
      trackingId: '#87456325',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2023',
      amount: '$17.98',
      paymentMode: 'Online Payment',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/8.jpg'
    },
    {
      trackingId: '#65783926',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/6.jpg'
    },
    {
      trackingId: '#34654895',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/1.jpg'
    },
    {
      trackingId: '#98765345',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2023',
      amount: '$7,349.768',
      paymentMode: 'Online Payment',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/10.jpg'
    },
    {
      trackingId: '#67546577',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2023',
      amount: '$7,766.54',
      paymentMode: 'Cash on Delivery',
      status: 'Pending',
      image: './assets/images/ecommerce/orders/2.jpg'
    }
  ];
  products3 = [
    {
      trackingId: '#98765490',
      product: 'Headsets',
      customer: 'Cherry Blossom',
      date: '30 Aug 2023',
      amount: '$6,721.5',
      paymentMode: 'Online Payment',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/9.jpg'
    },
    {
      trackingId: '#76348798',
      product: 'Flower Pot',
      customer: 'Simon Sais',
      date: '15 Nov 2023',
      amount: '$35,786.3',
      paymentMode: 'Online Payment',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/11.jpg'
    },
    {
      trackingId: '#23986456',
      product: 'Pen Drive',
      customer: 'Manny Jah',
      date: '27 Jan 2023',
      amount: '$5,896.437',
      paymentMode: 'Cash on Delivery',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/4.jpg'
    },
    {
      trackingId: '#87456325',
      product: 'New Bowl',
      customer: 'Florinda Carasco',
      date: '19 Sep 2023',
      amount: '$17.98',
      paymentMode: 'Online Payment',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/8.jpg'
    },
    {
      trackingId: '#65783926',
      product: 'Leather Watch',
      customer: 'Ivan Notheridiya',
      date: '06 Oct 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/6.jpg'
    },
    {
      trackingId: '#34654895',
      product: 'Digital Camera',
      customer: 'Willie Findit',
      date: '10 Jul 2023',
      amount: '$8,654.4',
      paymentMode: 'Cash on Delivery',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/1.jpg'
    },
    {
      trackingId: '#98765345',
      product: 'Earphones',
      customer: 'Addie Minstra',
      date: '25 Jun 2023',
      amount: '$7,349.768',
      paymentMode: 'Online Payment',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/10.jpg'
    },
    {
      trackingId: '#67546577',
      product: 'Shoes',
      customer: 'Laura Biding',
      date: '22 Feb 2023',
      amount: '$7,766.54',
      paymentMode: 'Cash on Delivery',
      status: 'Cancelled',
      image: './assets/images/ecommerce/orders/2.jpg'
    }
  ];
  

  

}