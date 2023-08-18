import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 })
        )
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  public isAuth: any;
  //? TO-DO: check SideNavToggle type
  @Output() onToggleSidenav: EventEmitter<any> = new EventEmitter();
  public collapsed = false;
  public screenWidth = 0;
  // public allNavData = navbarData; //from nav-data.ts
  public navData: any = [];
  public menu: boolean = false;
  public scrollFlag: string = '';
  public textColor: string = '';
  public hideSideNav = false;


  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.navData = [
      {
        routeLink: '/usuarios',
        icon: "assets/icons/users.png",
        label: 'Usuarios'
      },
      {
        routeLink: '/rutas',
        icon: "assets/icons/mensajes.png",
        label: 'Rutas'
      },
      {
        routeLink: '/calificaciones',
        icon: "assets/icons/list.png",
        label: 'Calificaciones'
      },
    ];
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  async logout() {
  }
  openChangePasswordModal() {
    
  }

}
