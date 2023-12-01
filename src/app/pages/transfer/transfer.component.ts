import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositDataAccount } from 'src/app/models/DepositDataAccount';
import { Transfer } from 'src/app/models/transfer';
import { AccountService } from 'src/app/service/account.service';
import { SharedAccountDataHomeService } from 'src/app/service/shared-account-data-home.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  modal = false;
  textAlert: string = '';
  alertInputAccountNumber = false;
  alertInputValue = false;
  accountNumber: string = '';
  value: string = '';
  modalSuccess = false;
  modalDanger = false;

  transfer: Transfer = {
    accountDestination: '',
    name: '',
    value: 0,
    saveDestination: false,
  };

  constructor(
    private accountServ: AccountService,
    private sharedServ: SharedAccountDataHomeService,
    private router: Router
  ) {}

  removeAlertInput() {
    this.alertInputAccountNumber = false;
    this.alertInputValue = false;
  }
  onAccountNumber(accountNumber: string) {
    this.accountNumber = accountNumber;
  }
  onValue(value: string) {
    this.value = value;
  }
  checkAccountNumber() {
    if (this.accountNumber.trim() == '') this.alertInputAccountNumber = true;
    if (this.value.trim() == '') this.alertInputValue = true;
    if (!this.value.includes(',')) this.alertInputValue = true;

    const value = this.getNumber(this.value);

    this.accountServ
      .checkAccoutExist(this.accountNumber)
      .subscribe((accountData: DepositDataAccount | boolean | Transfer) => {
        if (typeof accountData == 'boolean') {
          this.textAlert = 'Conta não encontrada';
          return;
        }

        this.transfer = {
          name: accountData.name,
          accountDestination: this.accountNumber,
          value: this.getNumber(this.value),
          saveDestination: false,
        };
        this.modal = true;
      });
  }
  confirm() {
    this.modal = false;

    this.accountServ.transferir(this.transfer).subscribe(
      (resp) => {
        this.modalSuccess = true;
      },
      (error) => {
        console.log(error);
        this.modalDanger = true;
      }
    );
  }
  getNumber(value: string) {
    return parseFloat(
      value.split(' ')[1].replaceAll('.', '').replace(',', '.')
    );
  }
  back() {
    this.sharedServ.emitirEvento();
  }
  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
