import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuitCrearComponent } from './components/tuit/tuit-crear/tuit-crear.component';
import { TuitMostrarComponent } from './components/tuit/tuit-mostrar/tuit-mostrar.component';
// PrimeNg
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TuitsPropiosComponent } from './components/tuits-propios/tuits-propios.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ComentarComponent } from './components/tuit/comentar/comentar.component';
import { MostrarComentariosComponent } from './components/mostrar-comentarios/mostrar-comentarios.component';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [TuitCrearComponent, TuitMostrarComponent, TuitsPropiosComponent, ComentarComponent, MostrarComentariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    // PrimeNg
    InputTextareaModule,
    ButtonModule,
    TableModule,
    CardModule,
    AccordionModule,
    DividerModule,
    BadgeModule,
    DialogModule,
    AvatarModule

  ],
  exports: [TuitCrearComponent,TuitsPropiosComponent],
})
export class FeedModule {}
