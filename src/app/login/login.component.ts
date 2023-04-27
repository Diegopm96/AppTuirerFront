import { Component } from '@angular/core';

import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: any = '';
  password: any = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookies: CookieService
  ) {}

  login() {
    const login = {
      email: this.email,
      password: this.password,
    };
    console.log(login);
    this.loginService.login(login).subscribe((Response) => {
      this.obtenerUsuarioLogueado();
      this.router.navigate(['/']);
    });
  }

  obtenerUsuarioLogueado() {
    this.loginService.obtenerUsuarioLogueado().subscribe((response) => {
      console.log(response);
      sessionStorage.setItem('usuario', JSON.stringify(response));
      

    });
  }
}
