import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Logic to handle form submission, e.g., send to a server
    console.log('Form submitted:', this.contactForm);
    alert('Votre message a été envoyé avec succès !');
  }
}
