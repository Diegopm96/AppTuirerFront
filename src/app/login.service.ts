import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login/interfaces/login-interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

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

          return body;
        })
      );
  }


  getToken(){
    return localStorage.getItem('token');
  }
}
