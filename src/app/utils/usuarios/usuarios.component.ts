import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UtilsModule } from '../utils.module';
import { UtilsService } from '../utils.service';
import { Usuario } from 'src/app/feed/interfaces/usuario-interface';
import { FeedService } from '../../feed/services/feed.service';
import { MensajeriaService } from 'src/app/mensajeria.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  usuario:any = null;
  usuarios: Usuario[] = [];
  seguidos: number[] = [];
  @Input() min: boolean = false;
  @Input() chat: boolean = false;

  constructor(
    private utilsService: UtilsService,
    private feedService: FeedService,
    private mensajeriaService:MensajeriaService
  ) {}
  ngOnInit(): void {
    this.usuario= this.feedService.usuarioLogueado();
    sessionStorage.getItem('token') ? this.obtenerUsuarios() : null;
    this.obtenerSeguidos();
    this.usuariosAleatorios();
  }

  obtenerUsuarios() {
    this.utilsService.obtenerUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
      if (this.min) {
        console.log(this.usuariosAleatorios());
        for (let n of this.usuariosAleatorios()) {
          this.usuarios.push(usuarios[n]);
        }
      } else {
        this.usuarios = usuarios;
      }
    });
  }

  follow(idSeguido: number) {
    const idSeguidor = this.feedService.usuarioLogueado()?.id;

    if (idSeguidor) {
      this.utilsService.follow(idSeguido, idSeguidor).subscribe();

      location.reload();
    }
  }

  unfollow(idSeguido: number) {
    const idSeguidor = this.feedService.usuarioLogueado()?.id;

    if (idSeguidor) {
      this.utilsService.unfollow(idSeguido, idSeguidor).subscribe();

      location.reload();
    }
  }

  obtenerSeguidos() {
    const idSeguidor = this.feedService.usuarioLogueado()?.id;

    if (idSeguidor) {
      this.utilsService.obtenerSeguidos(idSeguidor).subscribe((response) => {
        this.seguidos = response;
        console.log(this.seguidos);
      });
    }
  }

  comprobarSeguimiento(idSeguido: number) {
    if (this.seguidos) {
      return this.seguidos.includes(idSeguido) ? true : false;
    }
    return null;
  }

  usuariosAleatorios() {
    const list: number[] = [];

    for (let i = 0; i <= 3; i++) {
      let n = Math.floor(Math.random() * 5);

      if (!list.includes(n)) {
        console.log(list.push(n));
      } else {
        i -= 1;
      }
    }
    return list;
  }
  crearChat(idReceptor:number){

    this.mensajeriaService.crearChat(this.usuario.id,idReceptor).subscribe(response=>{
      console.log(response)
      location.reload()
    });

  }

}
