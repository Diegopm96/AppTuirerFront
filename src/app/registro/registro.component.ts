import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { Usuario } from '../feed/interfaces/usuario-interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  usuario: string = '';
  password: string = '';
  email: string = '';
  emailConfirmacion: string = '';
  mensajeEmail: Message[] = [];
  mensajePassword: Message[] = [];
  mensajeNombreUsuario: Message[] = [];
  mensajeSuccess:Message[]=[]
  constructor(private router: Router, private loginService: LoginService) {}

  confirmacionEmail(): boolean {
    if (this.email !== this.emailConfirmacion) {
      this.mensajeEmail = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'Los emails no son iguales',
        },
      ];
      return false;
    }
    return true;
  }

  comprobarPassword(): boolean {
    if (this.password.length < 8) {
      this.mensajePassword = [
        {
          severity: 'warn',
          summary: 'Prueba otra contraseña',
          detail: 'Contraseña demasiado corta',
        },
      ];
      return false;
    }
    return true;
  }

  ExisteNombreUsuario(): boolean {
    this.loginService
      .comprobarUsuarioExistente(this.usuario)
      .subscribe((res) => {
        if (res) {
          this.mensajeNombreUsuario = [
            {
              severity: 'warn',
              summary: 'Usuario existente',
              detail: 'Prueba con otro nombre de usuario',
            },
          ];
          return false;
        } else return true;
      });
    return false;
  }
  registro() {
    if (
      !this.ExisteNombreUsuario() &&
      this.comprobarPassword() &&
      this.confirmacionEmail()
    ) {

        const usuario:Usuario = {
          id:0,
          email:this.email,
          nombreUsuario:this.usuario,
          password:this.password
        };

        this.loginService.registro(usuario).subscribe(response=>{
          if(response){
            console.log(response)
            this.mensajeSuccess = [
              {
                severity: 'success',
                summary: 'Registro terminado!'
              },
            ];
            setTimeout(()=>{
              this.router.navigate(['login'])
            },2000);
          }
        })
    }else{
      console.log('no entra')
    }
  }

}
