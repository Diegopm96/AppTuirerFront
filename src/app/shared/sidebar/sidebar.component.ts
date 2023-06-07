import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];
  mostrar: boolean = false;


  ngOnInit() {
    sessionStorage.getItem('usuario') ? (this.mostrar = true) : false;

    console.log('Mostrar?', this.mostrar);
    console.log(sessionStorage.getItem('token'));

    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: '/',
          },
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink: '/propios',
          },
          {
            separator: true,
          },
          {
            label: 'Buscar usuarios',
            icon: 'pi pi-users',
            routerLink: '/usuarios',
          },
          {
            separator: true,
          },
          {
            label: 'Nuevo mensaje',
            icon: 'pi pi-envelope',
            routerLink:'/mensajes'
          },
        ],
      },
    ];
  }
}
