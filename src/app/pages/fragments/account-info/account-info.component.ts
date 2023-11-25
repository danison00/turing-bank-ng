import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { AccountData } from '../../../models/accountData';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  saldo = "1200.0"
  hiddenBalance = true;
  showBalance = false;

  accountData: AccountData ={
    balance: "",
    name: '',
    cpf: '',
    email: '',
    telephone: '',
    number: '',
    openingDate: '',
    deposits: [],
    tranfersReceived: [],
    tranfersSend: [],
    favoritesAccounts: []
  }

  constructor(private accServ: AccountService) { }

  ngOnInit() {

    this.accServ.getData().subscribe(
      (data) => {
        this.accountData = data;

      },
      (err) => { },
      () => {
        this.formattedBalance()
      });


  }
  hideenBalance() {
    this.hiddenBalance = !this.hiddenBalance;
    this.showBalance = !this.showBalance;
  }

  formattedBalance(): string {

    try {

      var balance: string =  String( this.accountData.balance);

      var valorDepoisVirgula;

      if(balance == "0") return "0,00"


      if (!balance.includes(".")) {
        valorDepoisVirgula = "00";
        if(balance.length <=3 ){
          console.log(balance+","+valorDepoisVirgula, "jnhjbhbh");

          return balance+","+valorDepoisVirgula;
        }

      } else {
        valorDepoisVirgula = balance.split(".")[1];
      }

      var aux1 = balance.split(".")[0];


      for (var i = aux1.length; i > 0; i--)
        if (i % 3 == 0 && aux1.length - i != 0) {
          var part1 = aux1.substring(0, aux1.length - i);
          var part2 = aux1.substring(aux1.length - i);
          aux1 = part1 + "." + part2;
        }



      return aux1 + "," + valorDepoisVirgula;
    } catch (error) {
      console.error(error);

      return ""
    }

  }

}
