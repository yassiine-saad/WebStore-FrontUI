import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  telephone: string = '';
  address: string = '';
  password!: string;

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit(): void {
    const newCustomer: Customer = {
      id: NaN,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      email: this.email,
      telephone: this.telephone,
      address: this.address
    };

    this.customerService.addCustomer(newCustomer)
      .subscribe(() => {
        // Rediriger vers la liste des clients après l'ajout réussi
        this.router.navigate(['/customers']);
      });
  }

}
