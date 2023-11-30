import { Component } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { SharedAccountDataHomeService } from 'src/app/service/shared-account-data-home.service';
import { DepositDataAccount } from '../../models/DepositDataAccount';
import { AccountData } from 'src/app/models/accountData';
import { Router } from '@angular/router';
import { Transfer } from '../../models/transfer';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {

  value: string = "";
  accountNumber: string = "";
  textAlert: string = "";
  alertInputValue = false;
  alertInputAccountNumber = false;

  modal = false;
  modalDanger = false;
  modalSuccess = false;

  depositDataAccount: DepositDataAccount = {
    name: "",
    accountNumber: '',
    value: 0.0
  }


  constructor(private sharedServ: SharedAccountDataHomeService, private accountServ: AccountService, private router: Router) { }



  back() {
    this.sharedServ.emitirEvento();
  }

  onValue(value: string) {
    this.value = value;

  }
  onAccountNumber(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  checkAccountNumber() {

    if (this.accountNumber.trim() == "") this.alertInputAccountNumber = true;
    if (this.value.trim() == "") this.alertInputValue = true;
    if (!this.value.includes(',')) this.alertInputValue = true;

    const value = this.getNumber(this.value);

    this.accountServ.checkAccoutExist(this.accountNumber).subscribe(
      (depositAccountData: DepositDataAccount | boolean | Transfer) => {

        if (typeof (depositAccountData) == "boolean") {

          this.textAlert = "Conta não encontrada";
          return;

        }

        this.depositDataAccount = {
          name: depositAccountData.name,
          accountNumber: this.accountNumber,
          value: this.getNumber(this.value)
        }
        this.modalSuccess = true;


      }
    );

  }
  confirmDeposit() {

    this.accountServ.depositar(this.depositDataAccount).subscribe((resp) => {
      if (resp) {
        alert("deposito realizado!")
        this.router.navigate(["home"])

      }
      else alert("Errro!")

    })



  }

  getNumber(value: string) {
    return parseFloat(value.split(" ")[1].replaceAll(".", "").replace(",", "."));
  }

  removeAlertInput() {
    this.alertInputAccountNumber = false;
    this.alertInputValue = false;
  }




}
