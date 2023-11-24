import { Router } from '@angular/router';
import { LoginServiceService } from './../../service/login-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private loginService: LoginServiceService, private router: Router) { }

  username: string = "";
  password: string = "";
  textAlert = "";
  alertInput = false;

  public realizarlogin(): void {

    if (this.username.trim() === "" || this.password.trim() === "") {
      this.alertInput = true;
      return;
    }

    this.loginService.login(this.username, this.password).subscribe(
      {
        next: (v) => {
          if (v.statusCode == 200) {
            this.router.navigate(["/home"])
          }
          if (v.statusCode == 400) {

            this.textAlert = "usuário ou senha inválidos"
            this.alertInput = true;
          }
        },
        error: (e) => {
          console.log(e);

        },
        complete: () => console.info('complete')
      }

    );
  }


  onUsername(username: string) {
    this.username = username;
  }
  onPassword(password: string) {
    this.password = password;
  }
  removeAlertInput() {
    this.textAlert = "";
    this.alertInput = false;
  }

}
