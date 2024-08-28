import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {


  username: string | undefined;
  email: string | undefined;
  role: string | undefined;
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // constructor(private authService: AuthService, private userService: UserService) { }

  constructor(){
    this.username = "yassinesaad"
    this.role = "ADMIN"
    this.email = "yassine@exemple.com"
  }

  // ngOnInit(): void {
  //   this.getUserInfo();
  // }

  // getUserInfo(): void {
  //   // Appel à un service pour obtenir les informations de l'utilisateur
  //   this.userService.getUserInfo().subscribe(userInfo => {
  //     this.username = userInfo.username;
  //     this.email = userInfo.email;
  //     this.role = userInfo.role;
  //   });
  // }

  updatePassword(): void {
  //   // Logique pour mettre à jour le mot de passe de l'utilisateur
  //   if (this.newPassword === this.confirmPassword) {
  //     this.authService.updatePassword(this.currentPassword, this.newPassword).subscribe(() => {
  //       // Mot de passe mis à jour avec succès
  //       this.currentPassword = '';
  //       this.newPassword = '';
  //       this.confirmPassword = '';
  //     }, error => {
  //       // Gérer les erreurs de mise à jour du mot de passe
  //     });
  //   } else {
  //     // Afficher un message d'erreur indiquant que les mots de passe ne correspondent pas
  //   }
  }

  exportData(): void {
  //   // Logique pour exporter les données de l'application
  }


}
