import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit {

  customer: Customer | undefined;
  customer$!:Observable<Customer>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(id).subscribe(customer => this.customer = customer);

    // this.customer
  }

  updateCustomer(): void {
    // Logique pour mettre à jour le client
    if(this.customer){
      console.log(this.customer)
      this.customerService.updateCustomer(this.customer).subscribe()
    }
    
  }

  cancelUpdate(){

  }

}
