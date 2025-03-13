import { ChartConfiguration, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
let root:any = document.querySelector(':root')
const primaryColor = getComputedStyle(root)?.getPropertyValue("--primary-bg-color")
const singleColor2 =  '#7fbdff'
const singleColor3 =  getComputedStyle(root)?.getPropertyValue("--bs-pink")

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    y: {
      ticks: {
        color: "rgba(171, 167, 167,0.9)",
        stepSize: 5,
      },
      beginAtZero: true, // Force axis to start at zero
      suggestedMin: 0, // Suggest minimum value
      suggestedMax: 50, // Suggest maximum value to control scale
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let lineChartType: ChartType = 'line';
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(115, 93, 255)',
    borderColor: 'rgb(68, 84, 195)',
    data: [0, 10, 5, 2, 20, 30, 45],
    tension: 0.1,
}],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//Solid Color
export let solidColor: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType: ChartType = 'bar';
export let solidColorLegend = true;
export let solidColorPlugins = [DataLabelsPlugin];
export let solidColorData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      hoverBackgroundColor: primaryColor,
      hoverBorderColor: primaryColor,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//Solid Color 2
export let solidColor2: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType2: ChartType = 'bar';
export let solidColorLegend2 = true;
export let solidColorPlugins2 = [DataLabelsPlugin];
export let solidColorData2: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: singleColor2,
      borderColor: singleColor2,
      hoverBackgroundColor: singleColor2,
      hoverBorderColor: singleColor2,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//Solid Color 3
export let solidColor3: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType3: ChartType = 'bar';
export let solidColorLegend3 = true;
export let solidColorPlugins3 = [DataLabelsPlugin];
export let solidColorData3: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: singleColor3,
      borderColor: singleColor3,
      hoverBackgroundColor: singleColor3,
      hoverBorderColor: singleColor3,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//BarChart1
export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
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
        display: true,
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [DataLabelsPlugin];
export let barChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(115, 93, 255, 0.2)',
      'rgba(255, 90, 41, 0.2)',
      'rgba(12, 199, 99, 0.2)',
      'rgba(12, 156, 252, 0.2)',
      'rgba(254, 84, 84, 0.2)',
      'rgba(12, 215, 177, 0.2)',
      'rgba(255, 154, 19, 0.2)'
  ],
  borderColor: [  
      'rgb(115, 93, 255)',
      'rgb(255, 90, 41)',
      'rgb(12, 199, 99)',
      'rgb(12, 156, 252)',
      'rgb(254, 84, 84)',
      'rgb(12, 215, 177)',
      'rgb(255, 154, 19)'
  ],
    borderWidth: 1
}],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};

//BarChart2
export let barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      stacked: true,
      ticks: {
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      stacked: true,
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
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
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#007bff',
      borderWidth: 1,
      fill: true
    }, {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#58a2f1',
      borderWidth: 1,
      fill: true
    }, {
      data: [20, 30, 28, 33, 45, 65],
      backgroundColor: '#c9e1fb',
      borderWidth: 1,
      fill: true
    }
  ],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

//Mixed Chart Data
export let MixedChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let MixedChart2Type: ChartType = 'bar';
export let MixedChart2Legend = true;
export let MixedChart2Plugins = [];
export let MixedChart2Data: ChartConfiguration['data'] = {
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(115, 93, 255)',
    backgroundColor: 'rgba(115, 93, 255, 0.2)'
}, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(255, 90, 41)'
}],
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
};

//Area Chart
export let AreaChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  hover: {
    mode: 'nearest',
    intersect: true,
  },

  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e'
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
  },
};

export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: '#f7557a',
      borderWidth: 1,
      backgroundColor: 'rgba(247, 85, 122,.5)',
      pointBackgroundColor:'rgba(247, 85, 122,.5)',
      pointHoverBackgroundColor:'rgba(113, 76, 190, 0.5)',
      fill:'origin'
      
    },
    {
      label: 'Data2',
      data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
      borderColor: '#007bff',
      borderWidth: 1,
      backgroundColor: 'rgba(0,123,255,.3)',
      pointBackgroundColor:'rgba(0,123,255,.3)',
      pointHoverBackgroundColor:'rgba(235, 111, 51 , 0.5)',
      fill:'origin'
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

//DoughNut Chart and Pie chart data

export let PieChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(115, 93, 255)',
      'rgb(255, 90, 41)',
      'rgb(12, 199, 99)'
  ],
    hoverOffset: 4
}],
  labels: ['Jan', 'Feb', 'Mar' ],
};
export let PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
};
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

//Radar Chart
export let radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: "rgba(171, 167, 167, 0.2)", // Change grid line color
      },
      angleLines: {
        color: "rgba(171, 167, 167, 0.5)", // Change radial axis (spoke) line color
      },
      ticks: {
        color: "rgba(171, 167, 167, 0.9)", // Change tick color
      },
    },
  },
};

export let radarChartType: ChartType = 'radar';
export let radarChartData: ChartConfiguration['data'] = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
],
datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(115, 93, 255, 0.2)',
    borderColor: 'rgb(115, 93, 255)',
    pointBackgroundColor: 'rgb(115, 93, 255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(115, 93, 255)'
}, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(255, 90, 41, 0.2)',
    borderColor: 'rgb(255, 90, 41)',
    pointBackgroundColor: 'rgb(255, 90, 41)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 90, 41)'
}]
};

//Polar Chart
export let polarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: "rgba(171, 167, 167, 0.2)", // Change grid line color
      },
      angleLines: {
        color: "rgba(171, 167, 167, 0.5)", // Change radial axis (spoke) line color
      },
      ticks: {
        color: "rgba(171, 167, 167, 0.9)", // Change tick color
      },
    },
  },
};

export let polarChartType: ChartType = 'polarArea';
export let polarChartData: ChartConfiguration['data'] = {
  labels: [
    'Blue',
    'Red',
    'Green',
    'Gray',
    'Yellow',
],
datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
        'rgb(115, 93, 255)',
           'rgb(255, 90, 41)',
        'rgb(12, 199, 99)',
        'rgb(201, 203, 207)',
        'rgb(255, 154, 19)',
    ]
}]
};

//CHARTJS Scatter CHART
export let ScatterChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let ScatterChartType: ChartType = 'scatter';
export let ScatterChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
        x: -10,
        y: 0
    }, {
        x: 0,
        y: 10
    }, {
        x: 10,
        y: 5
    }, {
        x: 0.5,
        y: 5.5
    }],
    backgroundColor: 'rgb(115, 93, 255)'
}],
 
};

//CHARTJS BUBBLE CHART
export let bubbleChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let bubbleChartType: ChartType = 'bubble';
export let bubbleChartData: ChartConfiguration['data'] = {
  datasets: [{
    label: 'First Dataset',
    data: [{
        x: 20,
        y: 30,
        r: 15
    }, {
        x: 40,
        y: 10,
        r: 10
    }],
    backgroundColor: 'rgb(115, 93, 255)'
}]
};

