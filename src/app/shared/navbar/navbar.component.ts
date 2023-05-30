import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

constructor(private cookies:CookieService){

}

  ngOnInit(): void {
   this.comprobarSesion()
  }

  sesionAbierta:boolean=false;


  cerrarSesion(){
    localStorage.clear();
    sessionStorage.clear();
    this.cookies.delete('usuarioLogueado')
    window.location.reload();
  }

  comprobarSesion(){
    sessionStorage.getItem('usuario')
    ?this.sesionAbierta=true
    :this.sesionAbierta=false;
  }

}

