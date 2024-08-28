import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {

  // public chart: any;

  // ngOnInit(): void {
  //   this.createChart();
  // }

  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
	// 							 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	//        datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
	// 								 '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }  
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }












  
  // ngOnInit() {
  //   this.initializeSalesChart();
  //   this.initializeOrdersChart();
  //   this.initializeUsersChart();
  //   this.initializeRevenueChart();
  // }

  // initializeSalesChart() {
  //   const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //       datasets: [{
  //         label: 'Sales',
  //         data: [1200, 1900, 3000, 5000, 2300, 3200],
  //         backgroundColor: '#42A5F5',
  //         borderColor: '#1E88E5',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  // initializeOrdersChart() {
  //   const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //       datasets: [{
  //         label: 'Orders',
  //         data: [50, 75, 150, 200, 180, 220],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  // initializeUsersChart() {
  //   const ctx = document.getElementById('usersChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['New Users', 'Returning Users'],
  //       datasets: [{
  //         label: 'Users',
  //         data: [300, 200],
  //         backgroundColor: ['#FF6384', '#36A2EB'],
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       responsive: true
  //     }
  //   });
  // }

  // initializeRevenueChart() {
  //   const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Product A', 'Product B', 'Product C'],
  //       datasets: [{
  //         label: 'Revenue',
  //         data: [5000, 3000, 2000],
  //         backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       responsive: true
  //     }
  //   });
  // }




  // ngOnInit() {
  //   this.initializeSalesChart();
  //   this.initializeOrdersChart();
  //   this.initializeUsersChart();
  //   this.initializeRevenueChart();
  // }

  // initializeSalesChart() {
  //   const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //       datasets: [{
  //         label: 'Ventes',
  //         data: [1200, 1900, 3000, 5000, 2300, 3200],
  //         backgroundColor: '#42A5F5',
  //         borderColor: '#1E88E5',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Ventes Mensuelles',
  //           font: {
  //             size: 18
  //           }
  //         },
  //         legend: {
  //           display: false
  //         }
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  // initializeOrdersChart() {
  //   const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //       datasets: [{
  //         label: 'Commandes',
  //         data: [50, 75, 150, 200, 180, 220],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1,
  //         fill: true
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Commandes Mensuelles',
  //           font: {
  //             size: 18
  //           }
  //         },
  //         legend: {
  //           display: false
  //         }
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  // initializeUsersChart() {
  //   const ctx = document.getElementById('usersChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Nouveaux Utilisateurs', 'Utilisateurs Récurrents'],
  //       datasets: [{
  //         label: 'Utilisateurs',
  //         data: [300, 200],
  //         backgroundColor: ['#FF6384', '#36A2EB'],
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Répartition des Utilisateurs',
  //           font: {
  //             size: 18
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  // initializeRevenueChart() {
  //   const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
  //   new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Produit A', 'Produit B', 'Produit C'],
  //       datasets: [{
  //         label: 'Revenus',
  //         data: [5000, 3000, 2000],
  //         backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Revenus par Produit',
  //           font: {
  //             size: 18
  //           }
  //         }
  //       }
  //     }
  //   });
  // }















  confirmedOrdersCount: number = 150;
  unconfirmedOrdersCount: number = 30;
  outOfStockProductsCount: number = 5;

  ngOnInit() {
    // this.initializeSalesChart();
    // this.initializeOrdersChart();
    // this.initializeUsersChart();
    // this.initializeRevenueChart();
  }

  initializeSalesChart() {
    // const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    // new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //     datasets: [{
    //       label: 'Ventes',
    //       data: [200, 300, 500, 150, 400, 329],
    //       backgroundColor: '#42A5F5',
    //       borderColor: '#1E88E5',
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       title: {
    //         display: false
    //       },
    //       legend: {
    //         display: false
    //       }
    //     },
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
  }

  initializeOrdersChart() {
    // const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
    // new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //     datasets: [{
    //       label: 'Commandes',
    //       data: [50, 75, 150, 200, 180, 220],
    //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //       borderColor: 'rgba(75, 192, 192, 1)',
    //       borderWidth: 1,
    //       fill: true
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       title: {
    //         display: false
    //       },
    //       legend: {
    //         display: false
    //       }
    //     },
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
  }

  initializeUsersChart() {
    // const ctx = document.getElementById('usersChart') as HTMLCanvasElement;
    // new Chart(ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: ['Nouveaux Utilisateurs', 'Utilisateurs Récurrents'],
    //     datasets: [{
    //       label: 'Utilisateurs',
    //       data: [300, 200],
    //       backgroundColor: ['#FF6384', '#36A2EB'],
    //       hoverOffset: 4
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       title: {
    //         display: false
    //       }
    //     }
    //   }
    // });
  }

  initializeRevenueChart() {
    // const ctx = document.getElementById('revenueChart') as HTMLCanvasElement;
    // new Chart(ctx, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['Produit A', 'Produit B', 'Produit C'],
    //     datasets: [{
    //       label: 'Revenus',
    //       data: [5000, 3000, 2000],
    //       backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
    //       hoverOffset: 4
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       title: {
    //         display: false
    //       }
    //     }
    //   }
    // });
  }
}
