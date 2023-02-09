// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive")
    }
}

// Creating chart coding for vizualization
// options = {
//     chart: {
//       type: 'bar'
//     },
//     plotOptions: {
//       bar: {
//         horizontal: true
//       }
//     },
//     series: [{
//       data: [{
//         x: 'category A',
//         y: 10
//       }, {
//         x: 'category B',
//         y: 18
//       }, {
//         x: 'category C',
//         y: 13
//       }]
//     }]
//   }


