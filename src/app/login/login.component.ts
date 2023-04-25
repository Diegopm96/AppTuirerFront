import { Component } from '@angular/core';

import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: any = '';
  password: any = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    const login = {
      email: this.email,
      password: this.password,
    };
    console.log(login);
    this.loginService.login(login).subscribe((Response) => {
      this.router.navigate(['/']);
    });
  }
}
