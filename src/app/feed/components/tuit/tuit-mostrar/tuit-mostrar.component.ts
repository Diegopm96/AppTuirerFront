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
  
  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.obtenerTuits();
  }

  obtenerTuits(): void {
    this.feedService.obtenerTodosTuits().subscribe((tuits) => {
      this.tuits = tuits;
      this.tuits.reverse();
      console.log(tuits);
    });
  }
}
