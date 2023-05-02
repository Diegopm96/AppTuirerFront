import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tuit } from 'src/app/feed/interfaces/tuit-interface';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-tuit-crear',
  templateUrl: './tuit-crear.component.html',
})
export class TuitCrearComponent implements OnInit {
  constructor(private feedService: FeedService) {}
  ngOnInit(): void {
    this.usuario = this.feedService.usuarioLogueado();
    this.usuario == null ? window.location.reload() : null;
  }

  contenido: any = '';
  usuario: any = null;

  obtenerTuits(): void {
    this.feedService.obtenerTuits().subscribe((tuits) => {
      console.log(tuits);
    });
  }

  crearTuit() {
    console.log(this.contenido);

    this.feedService
      .crearTuit(this.contenido, this.usuario.id)
      .subscribe((response) => console.log(response));
    this.contenido = '';
    window.location.reload();
  }
}
