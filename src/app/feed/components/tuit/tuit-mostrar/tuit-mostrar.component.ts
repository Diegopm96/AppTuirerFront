import { Component, OnInit } from '@angular/core';
import { Tuit } from 'src/app/feed/interfaces/tuit-interface';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-tuit-mostrar',
  templateUrl: './tuit-mostrar.component.html',
})
export class TuitMostrarComponent implements OnInit   {
  tuits: Tuit[] = [];
  contenido:string ='';
  usuario:any = null;
  constructor(private feedService: FeedService) {
  }

  ngOnInit(): void {

    this.usuario= this.feedService.usuarioLogueado();

    this.obtenerTuits();
  }

  obtenerTuits(): void {
    if(this.usuario!==null){

      this.feedService.obtenerTodosTuits().subscribe((tuits) => {
        this.tuits = tuits;
        this.tuits.reverse();
        console.log(tuits);
      });
    }
}


}
