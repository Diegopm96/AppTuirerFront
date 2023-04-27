import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Tuit } from '../../interfaces/tuit-interface';
import { Usuario } from '../../interfaces/usuario-interface';


@Component({
  selector: 'app-tuits-propios',
  templateUrl: './tuits-propios.component.html'
})
export class TuitsPropiosComponent implements OnInit {
  usuario:any = null;
  tuits: Tuit[] = [];
  

  constructor(private feedService: FeedService) {}
  ngOnInit(): void {
    this.usuario=this.feedService.usuarioLogueado()
    this.obtenerTuitsUsuario();
  }

  obtenerTuitsUsuario(): void {
    this.feedService.obtenerTuitsUsuario(this.usuario.id)
    .subscribe((tuits) => {

      this.tuits = tuits;
      this.tuits.reverse();
      console.log(tuits)
    });
  }
}
