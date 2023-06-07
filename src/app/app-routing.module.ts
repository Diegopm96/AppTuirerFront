import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TuitsPropiosComponent } from './feed/components/tuits-propios/tuits-propios.component';
import { TuitMostrarComponent } from './feed/components/tuit/tuit-mostrar/tuit-mostrar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './utils/usuarios/usuarios.component';
import { BuscarUsuariosComponent } from './utils/buscar-usuarios/buscar-usuarios.component';
import { MensajeriaService } from './mensajeria.service';
import { MensajesComponent } from './mensajes/mensajes.component';

const routes: Routes = [
  {
    path:'',
    component:TuitMostrarComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'propios',
    component:TuitsPropiosComponent,
    canActivate:[AuthGuard]

  },

  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'registro',
    component: RegistroComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'usuarios',
    component:BuscarUsuariosComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'mensajes',
    component:MensajesComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
