import { Component } from '@angular/core';
import * as L from 'leaflet';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { SpkApexChartsComponent } from '../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkWidgetsCard1Component } from '../../@spk/reusable-widgets/spk-widgets-card1/spk-widgets-card1.component';
import { SpkWidgetsCard2Component } from '../../@spk/reusable-widgets/spk-widgets-card2/spk-widgets-card2.component';
import { SpkWidgetsCard3Component } from '../../@spk/reusable-widgets/spk-widgets-card3/spk-widgets-card3.component';
import { SpkWidgetsCard4Component } from '../../@spk/reusable-widgets/spk-widgets-card4/spk-widgets-card4.component';
import { SpkWidgetsCard5Component } from '../../@spk/reusable-widgets/spk-widgets-card5/spk-widgets-card5.component';
import { SpkWidgetsTimelineComponent } from '../../@spk/reusable-widgets/spk-widgets-timeline/spk-widgets-timeline.component';
import { SpkReusableTablesComponent } from '../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
import { SpkWidgetsCard6Component } from '../../@spk/reusable-widgets/spk-widgets-card6/spk-widgets-card6.component';
import { SpkWidgetsCard7Component } from '../../@spk/reusable-widgets/spk-widgets-card7/spk-widgets-card7.component';
import { SpkDropdownsComponent } from '../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { min } from 'moment';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,CommonModule,LeafletModule,SpkDropdownsComponent,NgbModule,SpkWidgetsCard1Component,SpkWidgetsCard2Component,SpkWidgetsCard3Component
    ,SpkWidgetsCard4Component,SpkWidgetsCard5Component,SpkApexChartsComponent,SpkWidgetsTimelineComponent,SpkReusableTablesComponent,SpkWidgetsCard6Component,SpkWidgetsCard7Component],
  templateUrl: './widgets.component.html', 
  styleUrl: './widgets.component.scss'  
})
export class WidgetsComponent {
  map!: L.Map;

  options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629),
  };
  
chartOptions1: any = {
  series: [{
    name: 'Job Applied',
    type: 'line',
    data: [25, 50, 30, 55, 20, 45, 30]
}, {
    name: 'Job Viewed',
    type: 'area',
    data: [35, 25, 40, 30, 45, 35, 60]
}],
chart: {
    height: 348,
    type: 'line',
    stacked: false,
    toolbar: {
        show: false
    },
    zoom: {
      enabled:false
    },
    dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 1,
        blur: 3,
        color: '#000',
        opacity: 0.2
    },
},
colors: ["rgba(108, 95, 252, 1)", "rgba(108, 95, 252, 0.1)"],
grid: {
    borderColor: '#e9edf4',
    padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
    },
},
stroke: {
    width: [2, 2],
    curve: 'smooth',
    dashArray: [0, 4]
},
labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
markers: {
    size: 4,
    hover: {
        size: 5
    }
},
fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
        inverseColors: false,
        shadeIntensity: 1,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
    }
},
legend: {
    show: true,
    position: 'top',
    fontFamily: 'Inter, sans-serif',
    markers: {
        width: 10,
        height: 10,
    }
},
xaxis: {
    type: 'week',
    axisBorder: {
        show: true,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
    },
    axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
    },
    labels: {
        rotate: -90
    }
},
yaxis: {
    title: {
        style: {
            color: '#adb5be',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600
        },
    },
    labels: {
        formatter: function (y:any) {
            return y.toFixed(0) + "";
        }
    }
},
tooltip: {
    shared: true,
    intersect: false,
    y: {
        formatter: function (y:any) {
            if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
            }
            return y;

        }
    }
}
}
chartOptions2: any = {
  series: [
    {
        name: "Tablet",
        data: [[10, 35, 80]]
    },
    {
        name: "Mobile",
        data: [[22, 10, 80]]
    },
    {
        name: "Desktop",
        data: [[25, 25, 150]]
    },
],
chart: {
    height: 350,
    type: "bubble",
    toolbar: {
        show: false
    },
    zoom : {
      enabled: false,
    },
},
grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 3
},
colors: ["#ff8c33", "#28d193", "#4b9bfa"],
dataLabels: {
    enabled: false
},
legend: {
    show: true,
    fontSize: '13px',
    labels: {
        colors: '#959595',
    },
    markers: {
        width: 10,
        height: 10,
    },
},
xaxis: {
    min: 0,
    max: 50,
    labels: {
        show: false,
    },
    axisBorder: {
        show: false,
    },
},
yaxis: {
    max: 50,
    labels: {
        show: false,
    },
}
}
chartOptions3:any = {
  series: [
    {
      data: [17, 22, 37, 47, 39, 28, 14],
      name: 'Revenue',
    },
  ],
  chart: {
    type: 'bar',
    height: 235,
    toolbar: {
      show: false,
    },
    zoom : {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 6,
      blur: 3,
      color: '#000',
      opacity: 0.05,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      borderRadius: 4,
      horizontal: false,
      colors: {
        ranges: [
          {
            from: 41,
            to: Infinity,
            color: "rgba(108, 95, 252, 1)",
          },
          {
            from: 0,
            to: 40,
            color: "rgba(108, 95, 252, 0.1)",
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    borderColor: 'transparent',
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    colors: '#fff',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      rotate: -90,
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  yaxis: {
    colors: '#fff',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
};
chartOptions4:any = {
  series: [
    {
      name: 'Revenue',
      data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55],
    },
  ],
  chart: {
    height: 180,
    type: 'area',
    sparkline: {
      enabled: true,
    },
    zoom : {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1.4],
    show: true,
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    min: 50,
    max: 60
  },
  legend: {
    show: false,
  },
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  markers: {
    size: 0,
  },
  colors: ['#FFBE14'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
}
chartOptions5:any = {
  series: [
    {
      data: [34, 55, 41, 67, 22, 43, 21],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    zoom : {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#a3b3fd'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#a3b3fd'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions6:any = {
  series: [
    {
      data: [34, 55, 41, 47, 32, 53, 31],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    zoom : {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#60a5fa'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#60a5fa'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions7:any = {
  series: [
    {
      data: [31, 53, 32, 47, 41, 55, 44],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    zoom : {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#FF534D'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#FF534D'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions8:any = {
  series: [
    {
      data: [21, 43, 22, 45, 35, 55, 34],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    zoom : {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#FFBE14'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#FFBE14'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};

cryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$12,800',
    percentageChange: '+25.8%',
    chartOptions: this.chartOptions5, // set chart options
    iconClass: 'svg-info',
    chartId: 'btcCoin',
    svgPath:'M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$18,600',
    percentageChange: '+12.9%',
    chartOptions: this.chartOptions6, // set chart options
    iconClass: 'svg-success',
    chartId: 'ethCoin',
     svgPath:'M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z'
  },
  {
    name: 'Dash',
    symbol: 'DSH',
    price: '$16,580',
    percentageChange: '+15.7%',
    chartOptions: this.chartOptions7, // set chart options
    iconClass: 'svg-danger',
    chartId: 'dshCoin',
     svgPath:'M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z'
  },
  {
    name: 'Golem',
    symbol: 'GLM',
    price: '$12,545',
    percentageChange: '+12.1%',
    chartOptions: this.chartOptions8, // set chart options
    iconClass: 'svg-warning',
    chartId: 'glmCoin',
     svgPath:'M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z'
  }
];

stats = [
  {
    title: 'Total Candidates',
    count: '9,231',
    percentageChange: '0.5%',
    iconClass: 'bi bi-people-fill',
    bgClass: 'bg-primary-transparent',
    textClass: 'text-success',
    textColor: 'text-primary'
  },
  {
    title: 'Total Subscriptions',
    count: '3,571',
    percentageChange: '0.42%',
    iconClass: 'bi bi-person-lines-fill',
    bgClass: 'bg-secondary-transparent',
    textClass: 'text-success',
     textColor: 'text-secondary'
  },
  {
    title: 'Page Views',
    count: '1,986',
    percentageChange: '5.1%',
    iconClass: 'bi bi-eye-fill',
    bgClass: 'bg-success-transparent',
    textClass: 'text-success',
     textColor: 'text-success'
  },
  {
    title: 'New Registrations',
    count: '773',
    percentageChange: '3.5%',
    iconClass: 'bi bi-file-earmark-text-fill',
    bgClass: 'bg-info-transparent',
    textClass: 'text-success',
     textColor: 'text-info'
  }
];

stats1 = [
  {
    title: 'Total Candidates',
    description: 'Magna sit elitr kasd consetetur.',
    count: '2,460',
    percentageChange: '2.5%',
    iconClass: 'ti ti-users',
    bgClass: 'text-primary',
    textColor: 'success',
    growth:'up',
    progressClass: 'bg-primary',
    targetPercentage: '14%',
    dropdownMenu: ['Action', 'Another Action', 'Something Else Here']
  },
  {
    title: 'Recruiters',
    description: 'Elitr at gubergren sit sed.',
    count: '7,539',
    percentageChange: '3.1%',
    iconClass: 'ti ti-user-circle',
    textColor: 'success',
    bgClass: 'text-secondary',
    growth:'up',
    progressClass: 'bg-secondary',
    targetPercentage: '55%',
    dropdownMenu: ['Action', 'Another Action', 'Something Else Here']
  },
  {
    title: 'Page Views',
    description: 'Sed duo ut sanctus gubergren.',
    count: '13,693',
    percentageChange: '5.4%',
    iconClass: 'ti ti-view-360',
    bgClass: 'text-success',
    progressClass: 'bg-success',
    textColor: 'success',
    growth:'up',
    targetPercentage: '24%',
    dropdownMenu: ['Action', 'Another Action', 'Something Else Here']
  },
  {
    title: 'Total Subscriptions',
    description: 'Invidunt magna voluptua.',
    count: '1,116',
    percentageChange: '3.2%',
    iconClass: 'ti ti-view-360',
    bgClass: 'text-indigo',
    growth:'down',
    textColor: 'danger',
    progressClass: 'bg-indigo',
    targetPercentage: '67%',
    dropdownMenu: ['Action', 'Another Action', 'Something Else Here']
  }
];
stats2 = [
  {
    value: '45,280',
    label: 'Total Products',
    iconClass: 'ti ti-package',
    bgClass: 'bg-primary',
    textClass:'text-muted',
    badgeClass: 'bg-success-transparent',
    percentageChange: '1.31%'
  },
  {
    value: '10,500',
    label: 'Total Sales',
    iconClass: 'ti ti-rocket',
    bgClass: 'bg-secondary',
    textClass:'text-muted',
    badgeClass: 'bg-danger-transparent',
    percentageChange: '1.14%'
  },
  {
    value: '$69,270',
    label: 'Income',
    iconClass: 'ti ti-wallet',
    bgClass: 'bg-success',
    textClass:'text-muted',
    badgeClass: 'bg-success-transparent',
    percentageChange: '2.58%'
  },
  {
    value: '12,088',
    label: 'Total Orders',
    iconClass: 'ti ti-packge-import',
    bgClass: 'bg-warning',
    textClass:'text-muted',
    badgeClass: 'bg-success-transparent',
    percentageChange: '12.05%'
  }
];
stats3 = [
  {
    value: '21,520',
    label: 'Expenses',
    iconClass: 'ti ti-coin ',
    valueClass:'text-fixed-white',
    textClass:'op-7 text-fixed-white',
    bgClass: 'bg-white text-primary',
    badgeClass: 'bg-success',
    percentageChange: '14.69%'
  },
]

cardData = [
  {
    borderTopClass: 'border-top-primary',
    avatarClass: 'bg-primary',
    iconClass: 'ri-briefcase-2-line',
    title: 'Total Sales',
    value: '15,800',
    percentage: '+25.8%',
    badgeClass: 'bg-success-transparent'
  },
  {
    borderTopClass: 'border-top-secondary',
    avatarClass: 'bg-secondary',
    iconClass: 'ri-bill-line',
    title: 'Total Tax',
    value: '$12,650',
    percentage: '+12.2%',
    badgeClass: 'bg-success-transparent'
  },
  {
    borderTopClass: 'border-top-success',
    avatarClass: 'bg-success',
    iconClass: 'ri-wallet-2-line',
    title: 'Total Income',
    value: '$14,800',
    percentage: '+7.45%',
    badgeClass: 'bg-success-transparent'
  },
  {
    borderTopClass: 'border-top-info',
    avatarClass: 'bg-info',
    iconClass: 'ri-line-chart-line',
    title: 'Total Expenses',
    value: '$7,566',
    percentage: '-3.21%',
    badgeClass: 'bg-danger-transparent'
  },
  {
    borderTopClass: 'border-top-warning',
    avatarClass: 'bg-warning',
    iconClass: 'ri-money-dollar-box-line',
    title: 'Sales Profit',
    value: '$7,474',
    percentage: '+36.03%',
    badgeClass: 'bg-success-transparent'
  },
  {
    borderTopClass: 'border-top-danger',
    avatarClass: 'bg-danger',
    iconClass: 'ri-profile-line',
    title: 'Opex Ratio',
    value: '32%',
    percentage: '+0.89%',
    badgeClass: 'bg-success-transparent'
  }
];

timelineEvents = [
  {
    date: '02',
    day: 'Mon',
    content: 'You have an announcement - Ipsum Est Diam Eirmod',
    time: '10:00AM',
    badgeType: 'primary',
    badgeText: 'Announcement'
  },
  {
    date: '15',
    day: 'Sun',
    time:'4:00',
    content: 'National holiday - Vero Jayanti',
    badgeType: 'warning',
    badgeText: 'Holiday'
  },
  {
    date: '23',
    day: 'Mon',
    content: 'John pup birthday - Team Member',
    time: '09:00AM',
    badgeType: 'success',
    badgeText: 'Birthday'
  },
  {
    date: '02',
    day: 'Mon',
    content: 'Amet sed no dolor kasd - Et Dolores Tempor Erat',
    time: '10:00AM',
    badgeType: 'primary',
    badgeText: 'Announcement'
  },
  {
    date: '31',
    day: 'Tue',
    time:'4:00',
    content: 'National holiday - Vero Jayanti',
    badgeType: 'warning',
    badgeText: 'Holiday'
  },
];
tableheader= [
  {header:'Browser'},
  {header:'Sessions'},
  {header:'Views'},
  {header:'Traffic'},
] 

tableData = [
  {
    name: "Google",
    icon: "ri-google-fill",
    value: 23379,
    comparison: 16890,
    progress: 34,
  },
  {
    name: "Safari",
    icon: "ri-safari-line",
    value: 78973,
    comparison: 29906,
    progress: 58,
  },
  {
    name: "Opera",
    icon: "ri-opera-fill",
    value: 12457,
    comparison: 8674,
    progress: 62,
  },
  {
    name: "Edge",
    icon: "ri-edge-fill",
    value: 8570,
    comparison: 4980,
    progress: 71,
  },
  {
    name: "Firefox",
    icon: "ri-firefox-fill",
    value: 6135,
    comparison: 4436,
    progress: 48,
  },
  {
    name: "Ubuntu",
    icon: "ri-ubuntu-fill",
    value: 4789,
    comparison: 2447,
    progress: 28,
  },
];

taskTableHeader = [
  {header:'S.No'},
  {header:'Title'},
  {header:'Assigned To'},
  {header:'Progress'},
  {header:'Status'},
  {header:'Due Date'},
]

tasksData = [
  {
    id: "01",
    name: "Server Side Validation",
    avatars: [
      "./assets/images/faces/2.jpg",
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/2.jpg",
      "./assets/images/faces/10.jpg",
    ],
    additionalAvatars: "+2",
    progress: 60,
    status: "In Progress",
    statusClass: "bg-primary-transparent",
    dueDate: "17-04-2023",
  },
  {
    id: "02",
    name: "Multipurpose Dashboard Template",
    avatars: [
      "./assets/images/faces/6.jpg",
      "./assets/images/faces/8.jpg",
    ],
    additionalAvatars: null,
    progress: 0,
    status: "Pending",
    statusClass: "bg-warning-transparent",
    dueDate: "14-05-2023",
  },
  {
    id: "03",
    name: "Documentation Project",
    avatars: [
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/15.jpg",
      "./assets/images/faces/11.jpg",
    ],
    additionalAvatars: "+1",
    progress: 100,
    status: "Completed",
    statusClass: "bg-success-transparent",
    dueDate: "20-04-2023",
  },
  {
    id: "04",
    name: "HR Management Template Design",
    avatars: [
      "./assets/images/faces/5.jpg",
      "./assets/images/faces/12.jpg",
      "./assets/images/faces/13.jpg",
    ],
    additionalAvatars: null,
    progress: 50,
    status: "In Progress",
    statusClass: "bg-primary-transparent",
    dueDate: "29-05-2023",
  },
  {
    id: "05",
    name: "Developing Backend",
    avatars: [
      "./assets/images/faces/1.jpg",
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/9.jpg",
    ],
    additionalAvatars: "+3",
    progress: 50,
    status: "In Progress",
    statusClass: "bg-primary-transparent",
    dueDate: "25-05-2023",
  },
  {
    id: "06",
    name: "Design New Dashboard Template",
    avatars: [
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/12.jpg",
      "./assets/images/faces/16.jpg",
    ],
    additionalAvatars: "+3",
    progress: 100,
    status: "Completed",
    statusClass: "bg-success-transparent",
    dueDate: "04-05-2023",
  },
];
cards = [
  {
    count: '1,773',
    label: 'Active Members',
    linkText: 'View All',
    iconClass: 'bi bi-people-fill',
    avatarClass: 'text-bg-info',
  },
  {
    count: '116',
    label: 'Registrations',
    linkText: 'View All',
    iconClass: 'bi bi-file-earmark-text',
    avatarClass: 'text-bg-success',
  },
];

card1 = [
  {
    iconClass: 'ri-apple-fill',
    title: 'Apple',
    percentage: '0.14%',
    percentageClass: 'text-success text-end',
    price: '$12,289.44',
    change: '+$1,780.80',
    changeClass: 'text-success text-end',
  },
  {
    iconClass: 'ri-bit-coin-fill',
    title: 'Bitcoin',
    percentage: '2.14%',
    percentageClass: 'text-success text-end',
    price: '$58,151.02',
    change: '+$5,745.62',
    changeClass: 'text-success text-end',
  },
];


}

