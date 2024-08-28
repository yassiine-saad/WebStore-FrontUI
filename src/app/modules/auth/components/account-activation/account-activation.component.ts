import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrl: './account-activation.component.css'
})
export class AccountActivationComponent {


  sucess:boolean = false;
  failure:boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.token = this.route.snapshot.paramMap.get('token');
    // if (!this.token) {
    //   // Gérer le cas où aucun jeton n'est fourni
    //   this.router.navigate(['/']);
    // }
  }
  
  // activateAccount(code: string): void {
  //   // this.authService.activateAccount(this.token, code).subscribe(
  //   //   () => {
  //   //     // Rediriger l'utilisateur vers une page de succès ou de connexion
  //   //     this.router.navigate(['/login']);
  //   //   },
  //   //   error => {
  //   //     // Gérer les erreurs d'activation du compte
  //   //     console.error('Erreur lors de l\'activation du compte :', error);
  //   //     // Rediriger l'utilisateur vers une page d'erreur
  //   //     this.router.navigate(['/activation-error']);
  //   //   }
  //   // );
  // }

  activateAccount(code: string): void {
    // Envoyer le code à l'API
    console.log('Code à envoyer à l\'API :', code);
    // Ici, vous enverrez le code à l'API via votre service HTTP

    this.authService.activateAccount(code).subscribe(
      () => {
      // Rediriger l'utilisateur vers une page de succès ou de connexion
      alert("sucess")
      this.sucess = true
      this.failure = false
      // this.router.navigate(['/login']);
      },
      error => {
      // Gérer les erreurs d'activation du compte
      console.error('Erreur lors de l\'activation du compte :', error);
      this.failure = true
      this.sucess = false
      // Rediriger l'utilisateur vers une page d'erreur
      // this.router.navigate(['/activation-error']);
    }
    );

  }
}
