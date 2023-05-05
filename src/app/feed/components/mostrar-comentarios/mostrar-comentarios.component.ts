import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Comentario } from '../../interfaces/comentario-interface';

@Component({
  selector: 'app-mostrar-comentarios',
  templateUrl: './mostrar-comentarios.component.html',
})
export class MostrarComentariosComponent implements OnInit {
  @Input() idTuit: number = 0;
  comentarios: Comentario[] = [];

  constructor(private feedService: FeedService) {

  }
  ngOnInit(){
    this.obtenerComentariosTuit();
  }

  obtenerComentariosTuit(): void {
    this.feedService
      .obtenerComentariosTuit(this.idTuit)
      .subscribe((comentarios) => {
        this.comentarios = comentarios;


      });
  }
}
