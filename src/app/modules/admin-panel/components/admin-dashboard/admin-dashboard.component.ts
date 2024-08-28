import { Component } from '@angular/core';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  sidNavCollapsed =false
  screenWidth=0

  navigationData = [
    {routelink:'overview',icon:'home',label:'Index', badge: 0}, // Ajustez la valeur du badge selon vos besoins
    {routelink:'products',icon:'store',label:'Produits', badge: 0}, // Par exemple, 5 nouveaux produits
    {routelink:'orders',icon:'shopping_cart',label:'Commandes', badge: 2}, // Par exemple, 2 nouvelles commandes
    {routelink:'customers',icon:'people',label:'Clients', badge: 0}, // Ajustez la valeur du badge selon vos besoins
    {routelink: 'settings',icon: 'settings',label: 'Paramètres', badge: 0} // Ajustez la valeur du badge selon vos besoins
];


  
  OnToggledidenav(data:SideNavToggle):void{
    this.screenWidth=data.screenWidth
    this.sidNavCollapsed=data.collapsed
  }

  getBodyClass(): string {
    let styleClass='';
    if(this.sidNavCollapsed && this.screenWidth > 768){
      styleClass='body-trimmed'
    }else if(this. sidNavCollapsed && this.screenWidth <= 768){
      styleClass='body-md-screen'
    }

    return styleClass;
  }


}
