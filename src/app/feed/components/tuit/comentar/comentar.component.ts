import { Component, Input, OnInit } from '@angular/core';
import { Like } from 'src/app/feed/interfaces/like-interface';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
})
export class ComentarComponent implements OnInit {
  @Input() idTuit: number = 0;
  isLike: boolean = false;
  likes: Like[] = [];
  iconLike = 'pi-heart';
  contenido: string = '';
  usuario: any = null;
  visible: boolean = false;
  checked: boolean = false;

  ngOnChanges() {
    this.obtenerLikesTuit();
  }
  constructor(private feedService: FeedService) {

  }

  ngOnInit(): void {
    this.usuario = this.feedService.usuarioLogueado();
    this.likes?this.comprobarLike():null
  }

  crearComentario() {
    this.feedService
      .crearComentario(this.contenido, this.usuario.id, this.idTuit)
      .subscribe((response) => console.log(response));
    this.contenido = '';
    window.location.reload();
  }
  showDialog() {
    this.visible = true;
  }
  noShowDialog() {
    this.contenido = '';
    this.visible = false;
  }

  like() {
    // this.comprobarLike()
    if (!this.isLike) {
      this.feedService
        .crearLike(this.usuario.id, this.idTuit)
        .subscribe((response) => {
          console.log(response);
          // window.location.reload();
          this.ngOnChanges();
        });
      this.isLike = true;
      this.fillLike();
    }
  }

  obtenerLikesTuit() {
    this.feedService.obtenerLikesIdTuit(this.idTuit).subscribe((response) => {
      response != null ? (this.likes = response) : (this.likes = []);
      console.log(response);
    });
  }

  comprobarLike() {
    if (this.likes) {
      for (let like of this.likes) {
        console.log(this.likes);
        if (like.usuario.id === this.usuario.id) {
          this.isLike = true;
          console.log(like.usuario.id);
        } else {
        }
      }
    }
  }

  fillLike() {
    if (this.isLike) {
      this.iconLike += '-fill';
    }
  }
}
