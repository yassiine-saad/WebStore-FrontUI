import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {

        const role = this.authService.getRole();
        // alert(`Role de l'utilisateur: ${role}`);
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role == 'ROLE_USER') {
          this.router.navigate(['/shop']);
        }else {
          // alert("user and/or password are not correct")
          this.snackBar.open('Erreur de connexion', 'Fermer', { duration: 3000 });
        }
  

      });
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  navigateToResetPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

}



// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router,
//     private snackBar: MatSnackBar
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       this.authService.login(this.loginForm.value).subscribe(
//         (response) => {
//           this.snackBar.open('Connexion réussie', 'Fermer', { duration: 3000 });
//           this.router.navigate(['/shop']);
//         },
//         (error) => {
//           this.snackBar.open('Erreur de connexion', 'Fermer', { duration: 3000 });
//         }
//       );
//     }
//   }

//   onResetPassword(): void {
//     const email = this.loginForm.get('email')?.value;
//     if (email) {
//       this.authService.requestPasswordReset(email).subscribe(
//         (response) => {
//           this.snackBar.open('Email de réinitialisation envoyé', 'Fermer', { duration: 3000 });
//         },
//         (error) => {
//           this.snackBar.open('Erreur d\'envoi de l\'email', 'Fermer', { duration: 3000 });
//         }
//       );
//     } else {
//       this.snackBar.open('Veuillez entrer votre email pour réinitialiser le mot de passe', 'Fermer', { duration: 3000 });
//     }
//   }
// }
