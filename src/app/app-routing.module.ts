import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuitsPropiosComponent } from './feed/components/tuits-propios/tuits-propios.component';
import { TuitMostrarComponent } from './feed/components/tuit/tuit-mostrar/tuit-mostrar.component';

const routes: Routes = [
  {
    path:'',
    component:TuitMostrarComponent,
    pathMatch:'full'
  },
  {
    path:'propios',
    component:TuitsPropiosComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
