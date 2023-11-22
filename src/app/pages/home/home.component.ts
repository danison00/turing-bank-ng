import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameUser = "Danison"
  saldo = "1200.0"
  hiddenBalance = true;
  showBalance = false;



  constructor() { }

  ngOnInit() {
    this.saldo = this.formattedBalance(this.saldo);
  }
  hideenBalance() {
    this.hiddenBalance = !this.hiddenBalance;
    this.showBalance = !this.showBalance;
  }

  formattedBalance(balance: string) {

    var valorDepoisVirgula;
    if (!balance.includes(".")) {
      valorDepoisVirgula = "00";

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



    return  aux1 + "," + valorDepoisVirgula;

  }
}
