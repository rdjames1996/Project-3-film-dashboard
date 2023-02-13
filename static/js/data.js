// name: "Average Production Budget"
// data: [37.36, 30.20, 35.22, 22.24, 30.08, 30.11, 16.76, 20.57, 30.95, 14.91]
// name: "Total Worldwide Box Office"
// data: [612.90, 53.68, 43.66, 20.94, 16.03, 10.80, 92.33, 84.44, 82.45, 78.59]
  
// Bar Chart - Production Budget
      
var options2 = {
  series: [{
  name: "Average Production Budget",
  data: [37.36, 30.20, 35.22, 22.24, 30.08, 30.11, 16.76, 20.57, 30.95, 14.91]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories:  ["United States",
  "United Kingdom",
  "China",
  "France",
  "Japan",
  "Germany",
  "South Korea",
  "Canada",
  "Australia",
  "India",
  ],
  title: {
    text: 'Production Budget',
    style: {
      color: "#f5f7ff",
    },
  },
  labels: {
    style: {
      colors: "#f5f7ff",
    },
  },
},
yaxis: {
  title: {
    text: 'Countries',
    style: {
      color: "#f5f7ff",
    },
  },
  labels: {
    style: {
      colors: "#f5f7ff",
    },
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + " million"
    }
  }
}
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

// Bar Chart - Box Office
      
var options3 = {
  series: [{
    name: "Worldwide Box Office",
    data: [612.90, 53.68, 43.66, 20.94, 16.03, 10.80, 92.33, 84.44, 82.45, 78.59]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories:  ["United States",
    "United Kingdom",
    "China",
    "France",
    "Japan",
    "Germany",
    "South Korea",
    "Canada",
    "Australia",
    "India"
  ],
    title: {
      text: 'Total Gross ($)',
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: 'Production Country',
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " million"
      }
    }
  }
  };

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
