import { ChartConfiguration, ChartType } from 'chart.js';
import { ApexOptions } from 'apexcharts';

//Chart js
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    x: {
      ticks: {
        color: '#c8ccdb',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
        stepSize: 50,
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#77778e',
      },
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Order',
      data: [30, 150, 65, 160, 70, 130, 70, 120],
      borderWidth: 3,
      backgroundColor: 'transparent',
      borderColor: 'rgba(183, 179, 220,0.5)',
      pointBackgroundColor: '#ffffff',
      pointRadius: 0,
      borderDash: [4, 3],
      barPercentage: 0.7,
      tension: 0.5
    },
    {
      label: 'Sale',
      data: [50, 90, 210, 90, 150, 75, 200, 70],
      borderWidth: 3,
      backgroundColor: 'transparent',
      borderColor: '#6c5ffc',
      pointBackgroundColor: '#ffffff',
      pointRadius: 0,
      barPercentage: 0.7,
      tension: 0.5
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
};

//Radical usiing Apex charts
export let apexChartOptions: ApexOptions | any= {
  series: [83],
  colors: ['#6c5ffc'],
  chart: {
    height: 265,
    type: 'radialBar',
    offsetX: 0,
    offsetY: 0,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: '50%',
        imageWidth: 50,
        imageHeight: 50,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        strokeWidth: '80%',
        background: 'transparent',
      },
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 30,
        },
        value: {
          offsetY: -10,
          fontSize: '22px',
          color: undefined,
          formatter: function (val: any) {
            return val + '%';
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#6c5ffc'],
      inverseColors: !0,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: [''],
};
