import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}



@Component({
  selector: 'app-admin-dashboard-sidenav',
  templateUrl: './admin-dashboard-sidenav.component.html',
  styleUrl: './admin-dashboard-sidenav.component.css',
  // animations:[  // original
  //   trigger('fadeInOut', [
  //     transition(':enter',[
  //       style({opacity:0}),
  //       animate('350ms',
  //       style({opacity:1})
  //         )
  //     ]),
  //     transition(':leave',[style({opacity:1}),animate('150ms',style({opacity:0}))]),
  //   ]),
  // ]

  animations: [
    trigger('slideInOut', [
      state('true', style({
        transform: 'translateX(0)'
      })),
      state('false', style({
        transform: 'translateX(-100%)'
      })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out'))
    ])
  ]

  // animations: [
  //   trigger('slideInOut', [
  //       state('void', style({
  //           transform: 'translateX(-100%)',
  //           opacity: 0
  //       })),
  //       state('*', style({
  //           transform: 'translateX(0)',
  //           opacity: 1
  //       })),
  //       transition('void => *', animate('250ms ease-in')),
  //       transition('* => void', animate('250ms ease-out'))
  //   ])
  // ]


  // animations: [
  //   trigger('slideInOut', [
  //     state('open', style({
  //       transform: 'translateX(0)',
  //       opacity: 1
  //     })),
  //     state('closed', style({
  //       transform: 'translateX(-100%)',
  //       opacity: 0
  //     })),
  //     transition('closed => open', [
  //       animate('0.5s ease-out', keyframes([
  //         style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
  //         style({ transform: 'translateX(15px)', opacity: 0.5, offset: 0.6 }),
  //         style({ transform: 'translateX(0)', opacity: 1, offset: 1 })
  //       ]))
  //     ]),
  //     transition('open => closed', [
  //       animate('0.5s ease-in', keyframes([
  //         style({ transform: 'translateX(0)', opacity: 1, offset: 0 }),
  //         style({ transform: 'translateX(15px)', opacity: 0.5, offset: 0.4 }),
  //         style({ transform: 'translateX(-100%)', opacity: 0, offset: 1 })
  //       ]))
  //     ])
  //   ])
  // ]
  



})


export class AdminDashboardSidenavComponent implements OnInit {
  

  @Input() navigationData:any;
  @Output() OnToggledidenav :EventEmitter<SideNavToggle>=new EventEmitter();
  collapsed=false;
  screenWidth=0;



  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }



  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed=false;
      this.OnToggledidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
    }
  }
  

  opensidenav(){
    this.collapsed=!this.collapsed;
    this.OnToggledidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

  closeSidenav(){
    this.collapsed=false
    this.OnToggledidenav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }
  

}
