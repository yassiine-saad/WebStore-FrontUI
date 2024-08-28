import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    // this.registerForm = this.fb.group({
    //   firstname: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     console.log(this.registerForm.value)
  //     this.authService.register(this.registerForm.value).subscribe((rep) => {

        
  //       this.router.navigate(['auth/account-activation']);
  //     },err=>{alert('err')});
  //   }
  // }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.authService.register(this.registerForm.value).subscribe(

        (response) => {
                  this.snackBar.open('Inscription réussie', 'Fermer', { duration: 3000 });
                  this.router.navigate(['auth/account-activation']);
                },
        (error) => {
                  this.snackBar.open('Erreur lors de l\'inscription', 'Fermer', { duration: 3000 });
                }

      );
    }
  }

  // onSubmit_2(): void {
  //   if (this.registerForm.valid) {
  //     const { firstname, lastname, email, password } = this.registerForm.value;
  //     this.authService.register({ firstname, lastname, email, password }).subscribe(
  //       (response) => {
  //         this.snackBar.open('Inscription réussie', 'Fermer', { duration: 3000 });
  //         this.router.navigate(['/login']);
  //       },
  //       (error) => {
  //         this.snackBar.open('Erreur lors de l\'inscription', 'Fermer', { duration: 3000 });
  //       }
  //     );
  //   }
  // }


  navigateToLogin(): void {
    this.router.navigate(['auth/login']);
  }
}