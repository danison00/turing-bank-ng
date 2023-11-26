import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountData } from 'src/app/models/accountData';
import { AccountService } from 'src/app/service/account.service';
import { SharedAccountDataHomeService } from 'src/app/service/shared-account-data-home.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {


  @Input() hidden = true;
  @Output() eventClick: EventEmitter<void> = new EventEmitter<void>();

  accountData: AccountData = {
    name: '',
    cpf: '',
    email: '',
    telephone: '',
    number: '',
    balance: '',
    openingDate: '',
    deposits: [],
    tranfersReceived: [],
    tranfersSend: [],
    favoritesAccounts: []
  };

  constructor(private accServ: AccountService, private sharedServ: SharedAccountDataHomeService) {

    this.accountData = {
      name: accServ.accountData.name,
      cpf: accServ.accountData.cpf,
      email: accServ.accountData.email,
      telephone: accServ.accountData.telephone,
      number: accServ.accountData.number,
      openingDate: accServ.accountData.openingDate,
      balance: accServ.accountData.balance,
      deposits: accServ.accountData.deposits,
      favoritesAccounts: accServ.accountData.favoritesAccounts,
      tranfersReceived: accServ.accountData.tranfersReceived,
      tranfersSend: accServ.accountData.tranfersSend
    };

  }


ngOnInit(){
}
onEventClick(){

  this.sharedServ.emitirEvento();
}
}
