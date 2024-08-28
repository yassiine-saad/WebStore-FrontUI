import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard-header',
  templateUrl: './admin-dashboard-header.component.html',
  styleUrl: './admin-dashboard-header.component.css'
})
export class AdminDashboardHeaderComponent {

  fullName: string | null = null;

  @Input() collapsed=false;
  @Input() screenWidth=0;

  usrData!:any;
  currentTime!: string;

  constructor(private authService: AuthService){}


  ngOnInit(): void {


    if (this.authService.isAuthenticated()) {
      this.fullName = this.authService.getFullName();
    }

  }

  


  ngAfterViewInit(): void {}

  

  logout(){
    
  }




  
  getHeadClass() :string {

    let styleClass ='';
    if(this.collapsed && this.screenWidth > 768){
     styleClass='head-trimmed'
    } else {
     styleClass='head-md-screen';
    }

    return styleClass
  }

}


export const userItems=[
  {
    icon:'supervised_user_circle',
    label:'Mon profile',
    routerLink:'settings'

  },
  {
    icon:'settings',
    label:'Parametre',
    routerLink:'settings'
  },
  {
    icon:'vpn_key',
    label:'unlock',
    routerLink:''
  },
  {
    icon:'power_settings_new',
    label:'log out',
    routerLink:''
  }
]