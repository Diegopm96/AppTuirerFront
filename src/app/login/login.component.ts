import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: any = '';
  password: any = '';
  mensaje: Message[] = [];
  visible: boolean = false;
  succes: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookies: CookieService
  ) {}
  ngOnInit() {
    sessionStorage.clear();
  }

  login() {
    const login = {
      nombreUsuario: this.email,
      password: this.password,
    };

    console.log(login);
    console.log(this.mensaje);

    this.loginService.login(login).subscribe(
      (response) => {
        this.succes = true;
        this.comprobarLogin();
        this.obtenerUsuarioLogueado();
        setTimeout(() => {
          this.router.navigate(['/']);
          
        }, 1000);
      },
      (error) => {
        this.comprobarLogin();
      }
    );
  }

  obtenerUsuarioLogueado() {
    this.loginService.obtenerUsuarioLogueado().subscribe((response) => {
      if (response) {
        console.log(response);
        sessionStorage.setItem('usuario', JSON.stringify(response));
      }
    });
  }

  comprobarLogin() {
    if (!this.succes) {
      this.mensaje = [
        {
          severity: 'error',
          summary: 'Login incorrecto',
          detail: 'Contraseña o usuario incorrecto',
        },
      ];

      this.password = '';
    } else {
      this.mensaje = [{ severity: 'success', summary: 'Login correcto' }];
    }
  }

  irRegistro() {
    this.router.navigate(['registro']);
  }
}
