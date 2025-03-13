import { ChartConfiguration, ChartType, Color } from 'chart.js';

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Profits',
      data: [20, 420, 210, 354, 580, 320, 480],
      tension: 0.5,
      borderWidth: 3,
      backgroundColor: 'transparent',
      borderColor: '#6c5ffc',
      pointBorderColor: '#6c5ffc',
      pointBackgroundColor: '#ffffff',
      pointRadius: 2,
    },
  ],
  labels: ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'],
};

//BarChart1
export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 150,
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: '#77778e',
      },
      grid: {
        display: false,
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};

export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [];
export let barChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [200, 450, 290, 367, 256, 543, 345],
      label: 'Sales',
      borderWidth: 2,
      backgroundColor: '#9877f9',
      borderColor: '#9877f9',
      pointBackgroundColor: '#ffffff',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};

//Bar Chart 2
export let barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};

export let barChart2Type: ChartType = 'bar';
export let barChart2Legend = true;
export let barChart2Plugins = [];

export let barChart2Data: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#6c5ffc',
      borderWidth: 0,
      backgroundColor: '#6c5ffc',
    },
    {
      label: 'Data2',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: '#53caed',
      borderWidth: 0,
      backgroundColor: '#53caed',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};

//Area Chart
export let AreaChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
};
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [22, 44, 67, 43, 76, 45, 12],
      borderColor: 'rgba(113, 76, 190, 0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(113, 76, 190, 0.5)',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Data2',
      data: [16, 32, 18, 26, 42, 33, 44],
      borderColor: 'rgba(235, 111, 51 ,0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(	235, 111, 51, 0.7)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
};

//DoughNut Chart and Pie chart data
export let PieChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#6c5ffc', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
};
export let PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  // animation: {
  //   animateScale: true,
  //   animateRotate: true,
  // },
};
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

//Radar Chart
export let radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      angleLines: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142,0.2)',
      },
    },
    y: {
      angleLines: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142,0.2)',
      },
    },
  },
};

export let radarChartType: ChartType = 'radar';
export let radarChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [65, 59, 66, 45, 56, 55, 40],
      borderColor: 'rgba(113, 76, 190, 0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(113, 76, 190, 0.5)',
    },
    {
      label: 'Data2',
      data: [28, 12, 40, 19, 63, 27, 87],
      borderColor: 'rgba(235, 111, 51,0.8)',
      borderWidth: 1,
      backgroundColor: 'rgba(235, 111, 51,0.4)',
    },
  ],
  labels: [
    ['Eating', 'Dinner'],
    ['Drinking', 'Water'],
    'Sleeping',
    ['Designing', 'Graphics'],
    'Coding',
    'Cycling',
    'Running',
  ],
};

//Polar Chart
export let polarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
  scales: {
    x: {
      
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let polarChartType: ChartType = 'polarArea';
export let polarChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [18, 15, 9, 6, 19],
      backgroundColor: ['#6c5ffc', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
      hoverBackgroundColor: [
        '#6c5ffc',
        '#53caed',
        '#01b8ff',
        '#f16d75',
        '#29ccbb',
      ],
      borderColor: 'transparent',
    },
  ],
  labels: ['Data1', 'Data2', 'Data3', 'Data4'],
};
