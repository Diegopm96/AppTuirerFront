import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tuit } from 'src/app/feed/interfaces/tuit-interface';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-tuit-crear',
  templateUrl: './tuit-crear.component.html',

})
export class TuitCrearComponent implements OnInit{
  constructor(private feedService: FeedService) {

  }
  ngOnInit(): void {
    this.usuario = this.feedService.usuarioLogueado()
  }


  contenido: any = '';
  usuario:any=null

  obtenerTuits(): void {
    this.feedService.obtenerTuits().subscribe((tuits) => {
      console.log(tuits);
    });
  }

  // crearTuit(): void {
  //   console.log(this.contenido);
  //   let tuit:string = String(this.contenido)
  //   console.log(tuit)
  //   console.log(new Date().toLocaleString())
  //   this.fededService.crearTuit(tuit,2,new Date().toLocaleString())
  //   .subscribe()
  // }
  crearTuit() {
    console.log(this.contenido);

    this.feedService
      .crearTuit(this.contenido, this.usuario.id)
      .subscribe((response) => console.log(response));
    this.contenido = '';
    window.location.reload()
  }
}
