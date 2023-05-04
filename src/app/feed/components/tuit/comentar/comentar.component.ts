import { Component, Input } from '@angular/core';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
})
export class ComentarComponent {
  likeIcon:String = "pi-heart"
  isLike:boolean = false;
  contenido: string = '';
  usuario: any = null;
  visible: boolean = false;
  checked: boolean = false;
  @Input() idTuit: number = 0;

  constructor(private feedService: FeedService) {
    this.usuario = this.feedService.usuarioLogueado();
  }

  crearComentario() {
    console.log(this.contenido);

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

  like(){
    if(false==this.isLike){

      this.isLike= true;
      this.likeIcon = "pi-heart-fill"
    }else{
      this.isLike= false;
      this.likeIcon = "pi-heart"
      
    }
  }
 
}
