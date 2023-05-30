import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-derecha',
  templateUrl: './barra-derecha.component.html'
})
export class BarraDerechaComponent {

mostrar:boolean = false;

constructor(){
  sessionStorage.getItem('usuario')?this.mostrar=true:null
}

}
