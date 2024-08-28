import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.resetPasswordForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // onSubmit() {
  //   if (this.resetPasswordForm.valid) {
  //     // Your reset password logic here
  //   }
  // }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.authService.requestPasswordReset(this.resetPasswordForm.value.email).subscribe(
        response => {
          this.snackBar.open('Un lien de réinitialisation a été envoyé à votre adresse email.', 'Fermer', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['auth/login']);
        },
        error => {
          this.snackBar.open('Erreur lors de l\'envoi du lien de réinitialisation : ' + error.error.message, 'Fermer', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['auth/login']);
        }
      );
    }
  }



}
