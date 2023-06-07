import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat, Mensaje } from './mensajes/interfaces/chat-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  url:string='http://localhost:8080/api/chat'

  constructor(private http:HttpClient) { }



obtenerChatUsuario(idUsuario:number):Observable<Chat[]>{

  const url = `${this.url}/usuario/${idUsuario}`;

  return this.http.get<Chat[]>(url);

}

crearChat(idUsuarioEmisor:number,idUsuarioReceptor:number){

  const url = `${this.url}/${idUsuarioEmisor}/${idUsuarioReceptor}`;

  return this.http.get<Chat>(url);

}

crearMensaje(idChat:number, mensaje:Mensaje){

  let url = this.url+'/mensaje/'+idChat;

  return this.http.post<Mensaje[]>(url,mensaje);
}
}
