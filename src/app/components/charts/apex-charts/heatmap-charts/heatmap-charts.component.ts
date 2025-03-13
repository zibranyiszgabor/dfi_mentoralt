import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MatCommonModule } from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

@Component({
  selector: 'app-heatmap-charts',
  standalone: true,
  imports: [MatCommonModule,NgApexchartsModule,SharedModule,SpkApexChartsComponent],
  templateUrl: './heatmap-charts.component.html',
  styleUrl: './heatmap-charts.component.scss'
})
export class HeatmapChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;
  chartOptions3:any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Metric1',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric9',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#6c5ffc'],
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'W1',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W2',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W3',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W4',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W5',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W6',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W7',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W8',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W9',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W10',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W11',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W12',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W13',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W14',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W15',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#6c5ffc", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'],
      xaxis: {
        type: 'category',
        categories: [
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '01:00',
          '01:30',
        ],
      },
      title: {
        text: 'HeatMap Chart (Different color shades for each series)',
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Jan',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Feb',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Mar',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Apr',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'May',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Jun',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Jul',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Aug',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Sep',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: 'low',
                    color: '#6c5ffc'
                },
                {
                    from: 6,
                    to: 20,
                    name: 'medium',
                    color: '#05c3fb'
                },
                {
                    from: 21,
                    to: 45,
                    name: 'high',
                    color: '#f7b731'
                },
                {
                    from: 46,
                    to: 55,
                    name: 'extreme',
                    color: '#49b6f5'
                }
                ]
            }
        }
    },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'HeatMap Chart with Color Range',
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'Metric1',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        zoom: {
          enabled: false
        },
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: false,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: 'rgba(var(--primary-rgb))'
                },
                {
                    from: 51,
                    to: 100,
                    color: '#05c3fb'
                },
                ],
            },

        }
    },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
        },
      },
      xaxis: {
        type: 'category',
      },
      title: {
        text: 'Rounded (Range without Shades)',
      },
    };
  }

  public generateData(count: number, yrange: { min: any; max: any }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
