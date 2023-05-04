import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
   this.comprobarSesion()
  }

  sesionAbierta:boolean=false;


  cerrarSesion(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

  comprobarSesion(){
    sessionStorage.getItem('usuario')
    ?this.sesionAbierta=true
    :this.sesionAbierta=false;
  }

}

