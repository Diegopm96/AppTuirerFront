import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Tuit } from '../../interfaces/tuit-interface';


@Component({
  selector: 'app-tuits-propios',
  templateUrl: './tuits-propios.component.html'
})
export class TuitsPropiosComponent implements OnInit {
  constructor(private feedService: FeedService) {}
  ngOnInit(): void {
    this.obtenerTuitsUsuario();
  }

  tuits: Tuit[] = [];

  obtenerTuitsUsuario(): void {
    this.feedService.obtenerTuitsUsuario()
    .subscribe((tuits) => {
      
      this.tuits = tuits;
      this.tuits.reverse();
      console.log(tuits)
    });
  }
}
