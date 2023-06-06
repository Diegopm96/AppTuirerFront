import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { UsuariosMinComponent } from './usuarios-min/usuarios-min.component';
import { BarraDerechaComponent } from './barra-derecha/barra-derecha.component';
import { SharedModule } from '../shared/shared.module';
import { BuscarUsuariosComponent } from './buscar-usuarios/buscar-usuarios.component';
@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosMinComponent,
    BarraDerechaComponent,
    BuscarUsuariosComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    SharedModule
  ],
  exports:[
    UsuariosComponent,
    BarraDerechaComponent
  ]
})
export class UtilsModule { }
