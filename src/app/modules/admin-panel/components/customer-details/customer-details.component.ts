import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  customer$!:Observable<Customer>;

  // customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.customerService.getCustomerById(id).subscribe(customer => this.customer = customer);
    this.customer$ = this.customerService.getCustomerById(id);
  }


  deleteCustomer(): void {
    // Logique pour supprimer le client
  }

  viewOrders(): void {
    // Logique pour afficher les commandes du client
  }

  deactivateAccount(): void {
    // Logique pour désactiver le compte du client
  }

}
