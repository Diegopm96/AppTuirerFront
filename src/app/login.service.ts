import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login/interfaces/login-interface';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './feed/interfaces/usuario-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(login: Login) {
    const url = `${this.url}/login`;

    return this.http
      .post(url, login, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;

          const bearerToken = headers.get('Authorization')!;
          const token = bearerToken.replace('Bearer ', '');

          sessionStorage.setItem('token', token);
          this.cookies.set('usuarioLogueado', login.nombreUsuario);

          return body;
        })
      );
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  obtenerUsuarioLogueado() {
    const email = this.cookies.get('usuarioLogueado');
    const url = `${this.url}/api/usuario/nombre/${email}`;

    return this.http.get<Usuario>(url);
  }

  comprobarUsuarioExistente(nombreUsuario: string): Observable<boolean> {
    const url = `${this.url}/api/usuarioExiste/${nombreUsuario}`;

    return this.http.get<boolean>(url);
  }

  registro(usuario:Usuario){

    const url = `${this.url}/api/usuario`;

    return this.http.post<Usuario>(url,usuario);

  }


}
