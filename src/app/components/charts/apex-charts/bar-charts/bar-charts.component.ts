import { Component, Renderer2 ,ElementRef,ChangeDetectorRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;
@Component({
  selector: 'app-bar-charts',
  standalone: true,
  imports: [SharedModule,SpkApexChartsComponent],
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.scss'
})
export class BarChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;
  chartOptions3:any;
  chartOptions4:any;
  chartOptions5:any;
  chartOptions6:any;
  chartOptions7:any;
  chartOptions8:any;
  chartOptions9:any
  constructor( public renderer: Renderer2,private el:ElementRef,private cdr:ChangeDetectorRef ) {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      colors:['#6c5ffc'],
      chart: {
        type: 'bar',
        height: 320,
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'serie1',
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          name: 'serie2',

          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
      colors:['#6c5ffc', '#05c3fb'],
      chart: {
        type: 'bar',
        height: 320,
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 0.5,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
          name: 'Reborn Kid',
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
      colors:['#6c5ffc','#05c3fb','#f7b731','#fd6074','#49b6f5'],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'Fiction Books Sales',
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function (val: string) {
            return val + 'K';
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
          name: 'Reborn Kid',
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
      colors:['#6c5ffc','#05c3fb','#f7b731','#fd6074','#49b6f5'],

      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: '100% Stacked Bar',
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.chartOptions4 = {
      series: [
        {
          name: 'Males',
          data: [
            0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1,
            4.2, 4.5, 3.9, 3.5, 3,
          ],
        },
        {
          name: 'Females',
          data: [
            -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
            -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
          ],
        },
      ],
   
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        zoom: {
          enabled: false
        },
      },
    colors: ["#6c5ffc", "#05c3fb"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val: { toString: () => any }) {
            return val.toString();
          },
        },
        y: {
          formatter: function (val: number) {
            return Math.abs(val) + '%';
          },
        },
      },
      xaxis: {
        categories: [
          '85+',
          '80-84',
          '75-79',
          '70-74',
          '65-69',
          '60-64',
          '55-59',
          '50-54',
          '45-49',
          '40-44',
          '35-39',
          '30-34',
          '25-29',
          '20-24',
          '15-19',
          '10-14',
          '5-9',
          '0-4',
        ],
        title: {
          text: 'Percent',
          style: {
            color: "#8c9097",
        }
        },
        labels: {
          formatter: function (val: string) {
            return Math.abs(Math.round(parseInt(val, 10))) + '%';
          },
        },
      },
    };
    this.chartOptions5 = {
      series: [
        {
            name: 'Actual',
            data: [
                {
                    x: '2011',
                    y: 12,
                    goals: [
                        {
                            name: 'Expected',
                            value: 14,
                            strokeWidth: 2,
                            strokeDashArray: 2,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 44,
                    goals: [
                        {
                            name: 'Expected',
                            value: 54,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 54,
                    goals: [
                        {
                            name: 'Expected',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 66,
                    goals: [
                        {
                            name: 'Expected',
                            value: 61,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 81,
                    goals: [
                        {
                            name: 'Expected',
                            value: 66,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 67,
                    goals: [
                        {
                            name: 'Expected',
                            value: 70,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ['#05c3fb'],
    dataLabels: {
        formatter: function (val: any, opt: { w: { config: { series: { [x: string]: { data: { [x: string]: { goals: any; }; }; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals

            if (goals && goals.length) {
                return `${val} / ${goals[0].value}`
            }
            return val
        }
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#00E396', '#775DD0']
        }
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
    };
    this.chartOptions6 = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690]
    }],
    chart: {
        type: 'bar',
        height: 320,
        zoom: {
          enabled: false
        },
    },
    annotations: {
        xaxis: [{
            x: 500,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396',
                },
                text: 'X annotation',
            }
        }],
        yaxis: [{
            y: 'July',
            y2: 'September',
            label: {
                text: 'Y annotation'
            }
        }]
    },
    colors: ["#6c5ffc"],
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        reversed: true,
        axisTicks: {
            show: true
        }
    }
    };
    this.chartOptions7 = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      colors:['#9673e4','#05c3fb','#f6c364','#ea6d59','#64c1f6','#b3768a','#46c9a4','#05c3fb'],
      chart: {
        type: 'bar',
        height: 320,
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },


      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
        },
        formatter: function (
          val: string,
          opt: {
            w: { globals: { labels: { [x: string]: string } } };
            dataPointIndex: string | number;
          }
        ) {
          return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'India',
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Custom DataLabels',
        align: 'center',
        floating: true,
      },
      subtitle: {
        text: 'Category Names as DataLabels inside bars',
        align: 'center',
      },
      tooltip: {
        theme: 'dark',
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
      },
    };
    this.chartOptions8 = {
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        zoom: {
          enabled: false
        },
        dropShadow: {
            enabled: true,
            blur: 1,
            opacity: 0.25
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '60%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
    },
    colors: ["#6c5ffc", "#05c3fb", "#f7b731", "#49b6f5"],
    title: {
        text: 'Compare Sales Strategy',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val: string) {
                return val + "K"
            }
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'right',
        offsetY: 40
    }
    };
    this.chartOptions9 = {
      series: [
        {
          name: 'coins',
          data: [
            2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12,
            12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21,
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '100%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        colors: ['#fff'],
        width: 0.2,
      },
      labels: Array.from({ length: 39 }).map(function (el, index) {
        return index + 1;
      }),
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        title: {
          text: 'Weight',
        },
      },
      grid: {
        position: 'back',
      },
      title: {
        text: 'Paths filled by clipped image',
        align: 'right',
        offsetY: 30,
      },
      fill: {
        type: 'image',
        opacity: 0.87,
        image: {
          src: ['./assets/images/media/media-64.jpg'],
          width: 700,
          height: 410,
        },
      },
    };
  }
  ngAfterViewInit(): void {
      // this.setChartWidth();Width();
    this.cdr.detectChanges();
  }
  

}
