var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var menuToggle = document.getElementById("menuToggle");
var closeSidebarBtn = document.getElementById("closeSidebarBtn");

function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add("open");
  sidebar.classList.add("sidebar-responsive");
  sidebarOpen = true;
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove("open");
  sidebar.classList.remove("sidebar-responsive");
  sidebarOpen = false;
}

function closesidebar() {
  closeSidebar();
}

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    if (sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", closeSidebar);
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    sidebar.classList.remove("open");
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
});

// bar chart

var barOptions = {
  series: [{
    data: [12, 9, 6, 4, 3]
  }],
  chart: {
    type: 'bar',
    height: 250,
    toolbar: { show: false },
    background: 'transparent',
    foreColor: '#e5ecf4'
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 0,
      columnWidth: '40%'
    }
  },
  dataLabels: { enabled: false },
  grid: {
    borderColor: 'rgba(255,255,255,0.08)',
    strokeDashArray: 3,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } }
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    labels: {
      style: { colors: '#dfe7f3', fontSize: '12px' }
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      style: { colors: '#dfe7f3', fontSize: '12px' }
    },
    min: 0,
    max: 12
  },
  colors: ['#4361ee', '#f25f5c', '#2ec4b6', '#ef476f', '#ff9f1c'],
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
    labels: { colors: '#ebf1f8' }
  },
  tooltip: { enabled: true }
};

if (document.querySelector('#bar-chart')) {
  var barChart = new ApexCharts(document.querySelector('#bar-chart'), barOptions);
  barChart.render();
}


// area chart
var areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [45, 52, 38, 58, 42, 60, 50],
      color: '#e53935'
    },
    {
      name: 'Sales Orders',
      data: [30, 36, 28, 40, 34, 44, 38],
      color: '#2ecc71'
    }
  ],
  chart: {
    type: 'area',
    height: 260,
    toolbar: { show: false },
    background: 'transparent',
    foreColor: '#dfe7f3'
  },
  colors: ['#e53935', '#2ecc71'],
  stroke: {
    curve: 'smooth',
    width: 4,
    colors: ['#e53935', '#2ecc71']
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.08)',
    strokeDashArray: 4,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } }
  },
  markers: {
    size: 3,
    colors: ['#e53935', '#2ecc71'],
    strokeWidth: 0
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      style: { colors: '#dfe7f3', fontSize: '12px' }
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      style: { colors: '#dfe7f3', fontSize: '12px' }
    },
    min: 0,
    max: 80
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    labels: {
      colors: '#edf3fa',
      useSeriesColors: false
    },
    markers: {
      width: 10,
      height: 10,
      radius: 10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  tooltip: {
    shared: true,
    intersect: false
  }
};

if (document.querySelector('#area-chart')) {
  var areaChart = new ApexCharts(document.querySelector('#area-chart'), areaChartOptions);
  areaChart.render();
}
