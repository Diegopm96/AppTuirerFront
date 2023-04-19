import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tuit } from '../interfaces/tuit-interface';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario-interface';
@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

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

      idUsuario: idUsuario,
      idTuitComentado: idTuit,
    };

    return this.http.post<Comentario>(url, comentario);
  }

  obtenerTuitsUsuario(): Observable<Tuit[]> {
    // Crear variable de sesion con el id del usuario logueado

    const url = `${this.url}/tuits/${2}`;
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
}
