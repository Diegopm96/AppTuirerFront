import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TuitsPropiosComponent } from './feed/components/tuits-propios/tuits-propios.component';
import { TuitMostrarComponent } from './feed/components/tuit/tuit-mostrar/tuit-mostrar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

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

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
