import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { UsuariosMinComponent } from './usuarios-min/usuarios-min.component';
import { BarraDerechaComponent } from './barra-derecha/barra-derecha.component';
@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosMinComponent,
    BarraDerechaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    ButtonModule
  ],
  exports:[
    UsuariosComponent,
    BarraDerechaComponent
  ]
})
export class UtilsModule { }
