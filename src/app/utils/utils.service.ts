import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../feed/interfaces/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

url = "http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  obtenerUsuarios(){
    const url = `${this.url}usuariosDto`;

    return this.http.get<Usuario[]>(url);

  }

  follow(idSeguido:number,idSeguidor:number){

    const url = `${this.url}usuario/follow/${idSeguido}/${idSeguidor}`;

    return this.http.get(url);
  }
  unfollow(idSeguido:number,idSeguidor:number){

    const url = `${this.url}usuario/unfollow/${idSeguido}/${idSeguidor}`;

    return this.http.get(url);
  }

  obtenerSeguidos(idUsuario:number){

    const url = `${this.url}usuario/seguidosId/${idUsuario}`

    return this.http.get<number[]>(url);
  }
}
