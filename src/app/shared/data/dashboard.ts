
//Chart js
export let ChartOptions:any= {
	series: [
		{
			  type: 'column',
			  data: [19, 10, 15, 8, 6, 10, 13],
			  color: '#05c3fb',
		}
	  ],
	  chart: {
		sparkline: {
		  enabled: true
		},
		stacked: false,
		height: 67,
		width:100,
		zoom:{
			enabled:false
		}
	  },
	  plotOptions: {
		bar: {
			borderRadius: 3,
			columnWidth: '42%',
			horizontal: false,
			borderRadiusApplication: "end"
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		show: true,
		width: 0,
	  },
	  xaxis: {
		categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
	  },
	  tooltip: {
		enabled: false,
		}
};
export let ChartOptions1:any= {
	series: [
        {
			data: [ 45, 23, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 36, 36],
        },
    ],
    chart: {
		type: 'line',
		width: 100,
		height: 67,
		sparkline: {
		  enabled: true
		},
		zoom: {
            enabled: false,
          },
	  },
    stroke: {
        curve: 'smooth',
        width: [2.8]
    },
    colors: ["#f46ef4"],
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function () {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
	yaxis: {
	  min: 20,
	  max: 100,
	},
}
export let ChartOptions2:any= {
	series: [
		{
			  type: 'column',
			  data: [10, 12, 5, 6, 3, 11, 12],
			  color: '#4ecc48',
		}
	  ],
	  chart: {
	
		sparkline: {
		  enabled: true
		},
		stacked: false,
		height: 67,
		width:100,
		zoom:{
			enabled:false
		}
	  },
	  plotOptions: {
		bar: {
		  	borderRadius: 3,
			columnWidth: '42%',
			horizontal: false,
			borderRadiusApplication: "end"
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		show: true,
		width: 0,
		// colors: ["transparent"]
	  },
	  xaxis: {
		categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
	  },
	  yaxis: {
		min: 0,
		max: 15,
	  },
	  tooltip: {
		enabled: false,
		}
}
export let ChartOptions3:any= {
	series: [
        {
			data: [ 28, 56, 36, 32, 48, 54, 37, 58, 66, 53, 21, 24, 14, 45, 0, 67],
        },
    ],
    chart: {
		type: 'line',
		width: 100,
		height: 67,
		sparkline: {
		  enabled: true
		},
		zoom: {
            enabled: false,
          },
	  },
	  stroke: {
		  curve: 'smooth',
		  width: [2.7],
		  lineCap: 'round',
	  },
    colors: ["#F7B731"],
	yaxis: {
	  min: 0,
	  max: 120,
	},
  
}
export let RevenueChartData: any = {
	chart: {
	  height: 345,
	  toolbar: {
		show: false,
	  },
	  zoom :{
		enabled:false
	  },
	  dropShadow: {
		enabled: true,
		enabledOnSeries: undefined,
		top: 7,
		left: 0,
		blur: 1,
		color: ["var(--primary-color)", "var(--primary02)", "rgb(255, 90, 41)"],
		opacity: 0.05,
	  },
	},
	grid: {
	  show: true,
	  borderColor: "rgba(119, 119, 142, 0.3)",
	  strokeDashArray: 4,
	},
	dataLabels: {
	  enabled: false,
	},
	stroke: {
	  width: [3, 3],
	  curve: "smooth",
	  lineCap: 'rounded',
	},
	legend: {
	  show: true,
	  position: "top",
	  horizontalAlign: "center",
	  fontWeight: 600,
	  fontSize: "11px",
	  labels: {
		colors: "#74767c",
	  },
	  markers: {
		size: 4,
		strokeWidth: 0,
		strokeColor: '#fff',
		fillColors: "rgba(108, 95, 252, 0.8",
		radius: 5,
		customHTML: undefined,
		onClick: undefined,
		offsetX: 0,
		offsetY: 0
	  },
	},
	series: [
	  {
		name: "Total Sales",
		data: [100, 210, 180, 454, 454, 230, 260, 656, 656, 350, 350, 210],
		type: "area",
	  },
	  {
		name: "Total Orders",
		data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 454],
		type: "line",
	  },
	],
	fill: {
	  type: ['gradient', 'solid'],
	  gradient: {
		shadeIntensity: 1,
		opacityFrom: 0.4,
		opacityTo: 0.1,
		type: "vertical",
		stops: [0, 90, 100],
		colorStops: [
		  [
			{
			  offset: 0,
			  color: "var(--primary08)",
			  opacity: 1
			},
			{
			  offset: 75,
			  color: "var(--primary08)",
			  opacity: 0.3
			},
			{
			  offset: 100,
			  color: 'var(--primary02)',
			  opacity: 1
			}
		  ],
		  [
			{
			  offset: 0,
			  color: 'rgb(255, 90, 41)',
			  opacity: 1
			},
			{
			  offset: 75,
			  color: 'rgb(255, 90, 41)',
			  opacity: 1
			},
			{
			  offset: 100,
			  color: 'rgb(255, 90, 41)',
			  opacity: 1
			}
		  ],
		]
	  }
	},
	colors: ["var(--primary-color)", "#61c9fc"],
	yaxis: {
	  min:0,
	  title: {
		style: {
		  color: "#b0bac9",
		  fontSize: "14px",
		  fontFamily: "poppins, sans-serif",
		  fontWeight: 600,
		  cssClass: "apexcharts-yaxis-label",
		},
	  },
	},
	xaxis: {
	  type: "day",
	  categories: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	  ],
	  axisBorder: {
		show: true,
		color: "rgba(119, 119, 142, 0.08)",
		offsetX: 0,
		offsetY: 0,
	  },
	  axisTicks: {
		show: true,
		borderType: "solid",
		color: "#b0bac9",
		width: 6,
		offsetX: 0,
		offsetY: 0,
	  },
	  labels: {
		rotate: -90,
		style: {
		  colors: "#8c9097",
		  fontSize: "11px",
		  fontWeight: 600,
		  cssClass: "apexcharts-xaxis-label",
		},
	  },
	},
  }

  export let RecentOrdersData = {
	series: [
        {
          data: [27, 50, 28, 50, 28, 30, 22],
          color: '#05c3fb'
        },
        {
          data: [32, 58, 68, 65, 40, 68, 58],
          color: '#ec82ef'
        }
      ],
      chart: {
        type: "bar",
        height: 225,
        sparkline: {
          enabled: true
        },
		zoom: {
            enabled: false,
          },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '9',
          horizontal: false,
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
		width: 0.1,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      }
	  }