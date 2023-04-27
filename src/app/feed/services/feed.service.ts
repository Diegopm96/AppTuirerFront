import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tuit } from '../interfaces/tuit-interface';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario-interface';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../interfaces/usuario-interface';
@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private url: string = 'http://localhost:8080/api';

  private  json = String(sessionStorage.getItem('usuario'));


  constructor(private http: HttpClient, private cookies: CookieService) {}

  obtenerTuits(): Observable<Tuit[]> {

    const url = this.url + '/tuits';
    console.log(url);
    return this.http.get<Tuit[]>(url);
  }

  crearTuit(contenido: string, idUsuario: number): Observable<Tuit> {
    const url = this.url + '/tuit';
    const tuit: Tuit = {
      id: undefined,
      contenido: contenido,
      usuario: {
        id: idUsuario,
      },
    };

    return this.http.post<Tuit>(url, tuit);
  }

  crearComentario(
    contenido: string,
    idUsuario: number,
    idTuit: number
  ): Observable<Comentario> {
    const url = this.url + '/comentario';
    const comentario: Comentario = {
      id: undefined,
      contenido: contenido,

      usuario: {
        id: idUsuario,
      },
      idTuitComentado: idTuit,
    };

    return this.http.post<Comentario>(url, comentario);
  }

  obtenerTuitsUsuario(id:number): Observable<Tuit[]> {
    // Crear variable de sesion con el id del usuario logueado

    const url = `${this.url}/tuits/${id}`;
    return this.http.get<Tuit[]>(url);
  }

  obtenerTodosTuits(): Observable<Tuit[]> {
    const url = `${this.url}/tuits`;
    return this.http.get<Tuit[]>(url);
  }

  obtenerComentariosTuit(idTuit: number): Observable<Comentario[]> {
    const url = `${this.url}/comentario/tuit/${idTuit}`;

    return this.http.get<Comentario[]>(url);
  }

  obtenerUsuarioLogueado() {
    const email = this.cookies.get('usuarioLogueado');
    const url = `${this.url}/usuario/email/${email}`;

    return this.http.get<Usuario>(url);
  }

  usuarioLogueado(){
    if(null!=sessionStorage.getItem('usuario')){
      const usuario:Usuario = JSON.parse(this.json)
      return usuario
    }
    return null;
  }
}
