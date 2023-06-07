import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
import { Chat, Mensaje } from './interfaces/chat-interface';
import { FeedService } from '../feed/services/feed.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
})
export class MensajesComponent {
  chats: Chat[] = [];
  usuario: any = null;
  visible: boolean = false;
  contenido: string = '';
  constructor(
    private mensajeriaService: MensajeriaService,
    private feedService: FeedService
  ) {
    this.usuario = this.feedService.usuarioLogueado();
    this.obtenerChats();
  }

  obtenerChats() {
    if (this.usuario) {
      this.mensajeriaService
        .obtenerChatUsuario(this.usuario.id)
        .subscribe((response) => {
          this.chats = response;
          console.log(response);
        });
    }
  }
  showDialog() {
    this.visible === true ? (this.visible = false) : (this.visible = true);
  }

  crearChat(idReceptor: number) {
    this.mensajeriaService.crearChat(this.usuario.id, idReceptor).subscribe();
  }

  crearMensaje(idChat:number) {
    const obj: Mensaje = {
      id: 0,
      contenido: this.contenido,
      chat: undefined,
      fecha: undefined,
      usuario: {
        id: this.usuario.id,
      }
    };

    this.mensajeriaService.crearMensaje(idChat,obj).subscribe(response=>{
      console.log(response);
    })
    location.reload()
  }
}
