// // SIDEBAR TOGGLE

// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//   if(!sidebarOpen) {
//     sidebar.classList.add("sidebar-responsive");
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if(sidebarOpen) {
//     sidebar.classList.remove("sidebar-responsive");
//     sidebarOpen = false;
//   }
// }



// ---------- CHARTS ----------


// BAR CHART - Both

      
var options3 = {
  series: [{
  name: "INTERNATIONAL MOVIE",
  data: [56.84, 39.36, 25.64, 24.29, 24.02, 23.82, 19.64, 15.73 , 14.73, 13.55]
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
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
  },
  xaxis: {
    categories: ['Adventure', 'Animation', 'Horror', 'Action', 'Fantasy', 'Family', 'Romance',
      'Drama', 'Crime', 'Crime'
    ],
    title: {
      text: 'Popularity',
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
      text: 'Top 10 Genre',
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


// BAR CHART - Mainstream
      
var options4 = {
  series: [{
  name: "US MOVIE",
  data: [78.82, 46.45, 39.68, 29.66, 24.23, 21.35, 20.29, 18.44, 17.08, 15.46]
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
  categories:  ["Adventure",
  "Animation",
  "Fantasy",
  "Action",
  "Romance",
  "Horror",
  "Mystery",
  "Crime",
  "Science Fiction",
  "Drama",
  ],
  title: {
    text: 'Popularity',
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
    text: 'Top 10 Genre',
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

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

// BAR CHART - 88 Rising
      
var options5 = {
  series: [{
    name: "Budget",
    data: [78, 128.6, 88, 17.7, 28.5, 0.7, 22.9, 75, 110.8, 30, 13, 0, 40, 22.5, 105.5, 42.5, 155, 22],
  }, {
    name: "Revenue",
    data: [227.6, 522.9, 429.56, 72, 78, 28.6, 61.6, 542, 477, 0, 78, 0, 92, 45, 135, 149, 167, 68.3],
  }],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
    "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance",
    "Science Fiction", "Thriller", "War", "Western"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: 
  [
    {
      title: {
        text: "Budget (Million)",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Revenue (Million)",
        style: {
          color:  "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
  };

var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();

// AREA CHART - 88 Rising & Mainstream timeline
      
var options6 = {
series: [{
  name: "MOVIES PER GENRE",
  data: [1, 1, 1, 1, 1, 1, 4, 6, 7, 10, 12, 12, 12, 14, 25, 31, 39, 78]
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
  categories:  ["Western",
  "Mystery",
  "Music",
  "History",
  "War",
  "Family",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Animation",
  "Horror",
  "Crime",
  "Thriller",
  "Documentary",
  "Adventure",
  "Action",
  "Comedy",
  "Drma"
],
  title: {
    text: 'Number of Movies',
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
    text: 'Artist Name',
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
var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();

// PIE CHART

var options7 = {
  series: [56.85, 39.36, 25.64, 24.29, 24.01],
  chart: {
  foreColor: '#fff',
  width: 380,
  type: 'pie',
},
labels: ['Adventure', 'Animation', 'Horror', 'Action', 'Fantasy'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
chart7.render();

// PIE CHART 2

var options8 = {
  series: [78.82, 46.44, 39.68, 29.66, 24.23],
  chart: {
  foreColor: '#fff',
  width: 380,
  type: 'pie',
},
labels: ['Adventure', 'Animation', 'Fantasy', 'Action', 'Romance'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      colors: [
        "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"
      ],
    }
  }
}]
};

var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
chart8.render();

  // DEBUT TIME CHART

var options9 = {
  series: [

  {
    name: "Top Artists Debut Years",
    data: [
      {
        x: '',
        y: [
          new Date(1996, 10, 12).getTime(),
          new Date(2013, 4, 12).getTime()
        ],
      },
    ],
  },
  {
    name: "Top 88rising Artists Debut Years",
    data: [
      {
        x: '',
        y: [
          new Date(2015, 6, 15).getTime(),
          new Date(2020, 1, 13).getTime()
        ],
      },
    ],
  },
],
chart: {
foreColor: '#fff',
height: 350,
type: 'rangeBar'
},
plotOptions: {
bar: {
  horizontal: true,
  barHeight: '50%',
  rangeBarGroupRows: true
}
},

fill: {
type: 'solid'
},
xaxis: {
type: 'datetime',
labels: {
  style: {
    colors: "#f5f7ff",
  },
},
},
legend: {
position: 'right',
labels: {
  style: {
    colors: "#f5f7ff",
  },
},
},
tooltip: {
custom: function(opts) {
  const fromYear = new Date(opts.y1).getFullYear()
  const toYear = new Date(opts.y2).getFullYear()
  const values = opts.ctx.rangeBar.getTooltipValues(opts)

  return (
    ''
  )
}
}
};

var chart9 = new ApexCharts(document.querySelector("#chart9"), options9);
chart9.render();

