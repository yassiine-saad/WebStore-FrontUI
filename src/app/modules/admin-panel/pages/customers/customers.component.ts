import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, Customers } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  // paginator!:MatPaginator
  dataSource!: MatTableDataSource<Customer>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email',"actions"];

  // pageSize = 5; // Taille de la page par défaut
  totalCustomers = 5; // Nombre total de clients
  // currentPage = 0; // Page actuelle


  // totalPages!: number;
  // totalElements!: number;
  // // currentPage: number;
  // // pageSize: number;


  totalPages!: number;
  totalElements!: number;
  currentPage!: number;
  pageSize!: number;


  
  customers$!:Observable<Customer[]>;

  
  constructor(private customerService: CustomerService, private router: Router) { }



  
  ngOnInit(): void {
    this.currentPage = 0;
    this.pageSize = 5; // Taille de la page par défaut
    this.loadCustomers();
  }


  loadCustomers(): void {
    this.customers$ = this.customerService.getCustomers(this.currentPage, this.pageSize)
      .pipe(
        map((response: Customers) => {
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
          return response.content; // Retourne la liste des clients
        })
      );
  }

  onPageChange(pageEvent: PageEvent): void {
    // this.currentPage = page;

    this.currentPage = pageEvent.pageIndex
    this.pageSize = pageEvent.pageSize
    this.loadCustomers();
    console.log("event",pageEvent)
  }




  // onPageChange(event: any): void {
  //   // this.currentPage = event.pageIndex;
  //   // this.pageSize = event.pageSize;
  //   // this.getCustomers();
  //   // this.currentPage = page;
  //   this.loadCustomers();
  //   alert();
  // }

  // ngOnInit(): void {
  //   // const customers: Customer[] = [];
  //   // this.dataSource = new MatTableDataSource(customers);
  //   this.getCustomers();
  // }




  // getCustomers(): void {
  //   // this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  //   this.customers$ = this.customerService.getCustomers();
  // }

  addCustomer(){
    this.router.navigate(['/admin/dashboard/customers/add']);
    // this.router.navigateByUrl('/reactive-state/candidates');
  }


  editCustomer(customer: Customer): void {
    this.router.navigate(['/admin/dashboard/customers',customer.id,'edit']);
  }



  deleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer.id).subscribe()
  }


  viewDetails(customer: Customer): void {
    this.router.navigate(['/admin/dashboard/customers/',customer.id]);
  }



  // editCustomer(): void {
  //   this.router.navigate(['/edit-customer', this.customerId]);
  // }

  // deleteCustomer(): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
  //     this.customerService.deleteCustomer(this.customerId).subscribe(
  //       () => {
  //         // Suppression réussie, naviguez vers la liste des clients
  //         this.router.navigate(['/customers']);
  //       },
  //       error => {
  //         // Gérer les erreurs
  //       }
  //     );
  //   }
  // }
  // // Implémentez des méthodes de filtrage et de pagination si nécessaire

}
