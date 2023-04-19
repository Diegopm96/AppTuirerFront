import { Component, Input } from '@angular/core';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',

})
export class ComentarComponent {

  contenido:string = ''


  @Input() idTuit:number=0;

  constructor(private feedService:FeedService){}

  crearComentario() {
    console.log(this.contenido);

    this.feedService
      .crearComentario(this.contenido, 2,this.idTuit)
      .subscribe((response) => console.log(response));
    this.contenido = '';
    window.location.reload()
  }
}
