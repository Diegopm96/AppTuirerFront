import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login/interfaces/login-interface';
import { map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './feed/interfaces/usuario-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private cookies:CookieService) {}

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
          const token = bearerToken.replace('Bearer ','');

          localStorage.setItem('token', token);
          this.cookies.set("usuarioLogueado",login.email)

          return body;
        })
      );
  }


  getToken(){
    return localStorage.getItem('token');
  }

  obtenerUsuarioLogueado() {
    const email = this.cookies.get('usuarioLogueado');
    const url = `${this.url}/api/usuario/email/${email}`;

    return this.http.get<Usuario>(url);
  }
}
