import { Component, OnInit } from '@angular/core';
import { Tuit } from 'src/app/feed/interfaces/tuit-interface';
import { FeedService } from 'src/app/feed/services/feed.service';
import { UtilsService } from '../../../../utils/utils.service';

@Component({
  selector: 'app-tuit-mostrar',
  templateUrl: './tuit-mostrar.component.html',
})
export class TuitMostrarComponent implements OnInit   {
  tuits: Tuit[] = [];
  contenido:string ='';
  usuario:any = null;
  seguidos:number[]=[];
  constructor(private feedService: FeedService, private utilsService:UtilsService) {

  }

  ngOnInit(): void {

    this.usuario= this.feedService.usuarioLogueado();



      this.obtenerTuits();


    this.obtenerSeguidos(this.usuario.id)


    // this.getTuits()
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

obtenerSeguidos(idUsuario:number){

  if(idUsuario){
    this.utilsService.obtenerSeguidos(idUsuario).subscribe(response=>{
      this.seguidos=response;
      console.log(this.seguidos)
    });
  }
}

comprobarSeguimiento(idSeguido: number) {
  if(idSeguido===this.usuario.id){
    return true;
  }
  if (this.seguidos) {
    return this.seguidos.includes(idSeguido) ? true : false;
  }
  return null;
}

}
