import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccData } from 'src/app/models/createAcc';
import { CreateAccountService } from 'src/app/service/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  alertInput = false;
  textAlert = "";

  password = "";
  username = "";
  nome = "";
  cpf = "";
  email = "";
  telefone = "";

  quickStepTwo = false;
  modalSuccess = false;
  spinnerOnCreate = false;
  spinnerOnNext = false;


  constructor(private createAccServ: CreateAccountService, private router: Router) { }

  next() {
    if (this.password.trim() === "" || this.username.trim() === "") {
      this.alertInput = true;
      return;
    }
    
    this.spinnerOnNext = true;
    this.createAccServ.verifyUsernameAlreadyExists(this.username).subscribe({
      next: (v) => {
        this.quickStepTwo = true;
        
      },
      error: (e) => {
        this.textAlert = "Username indisponível";
      },
      complete: () => {
        console.info('complete')
        this.spinnerOnNext = false;
      }
    });

  }
  back() {
    this.quickStepTwo = false;
  }

  onPasswordChange(password: string) {
    this.password = password;
  }

  onUsernameChange(username: string) {
    this.username = username;
  }
  onCpfChange(cpf: string) {
    this.cpf = cpf;
  }
  onEmailChange(email: string) {
    this.email = email;
  }
  onTelefoneChange(telefone: string) {
    this.telefone = telefone;
  }
  onNameChange(nome: string) {
    this.nome = nome;
  }
  removeAlertInput() {
    this.alertInput = false;
    this.textAlert = "";

  }
  redirectLogin(){
    this.router.navigate(["/login"]);
  }
  create() {

    if (this.nome.trim() === "" || this.email.trim() === "" ||  this.telefone.trim() === "" || this.cpf.trim() === "") {
      this.alertInput = true;
      return;
    }

    this.spinnerOnCreate = true;
    const data: CreateAccData = {

      cpf: this.cpf,
      name: this.nome,
      telephone: this.telefone,
      email: this.email,
      typeAccount: "CURRENT",
      login: {
        username: this.username,
        password: this.password

      }
    }

    this.createAccServ.createAcc(data).subscribe({


      next: () => {
        this.modalSuccess = true;
      },
      error: ()=>{
        alert("Aconteceu um erro!")
      },
      complete: () => {
        this.spinnerOnCreate = false;

      }
    }

    );
  }
}

