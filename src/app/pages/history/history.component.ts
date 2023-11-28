import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/models/transfer';
import { AccountService } from 'src/app/service/account.service';

interface deposit {
  dateAndHour: string,
  value: string
}
interface TransferReceived {
  name: string,
  accountOrigin: string,
  value: string,
  dateAndHour: string
}



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {



  deposits: deposit[] = [];
  transfersReceived: TransferReceived[] = [];
  transferSend: TransferReceived[] = []

  loading = true;


  constructor(private accountServ: AccountService) { }
  ngOnInit(): void {

    this.accountServ.getData().subscribe(
      (data) => {
        this.deposits = [];
        data.deposits.forEach(deposit => {
          this.deposits.push(deposit)
        })

        this.transfersReceived = [];
        data.tranfersReceived.forEach((tranfer) => {
          this.transfersReceived.push(tranfer);
        })

        this.transferSend = [];
        data.tranfersSend.forEach((tranfer) => {
          this.transferSend.push(tranfer);
        })
        this.loading = false;
      }
    );

  }

  view1(element: string) {
    console.log(this.deposits);
    const input = document.getElementById("input-" + element) as HTMLInputElement;
    input.checked = true;
    const btns = Array.from(document.getElementsByClassName("button") as HTMLCollection)

    btns.forEach(btn => {
      const b = btn as HTMLButtonElement;
      b.style.color = "black";
    })

    const btn = document.getElementById(element) as HTMLButtonElement;
    btn.style.color = "yellowgreen"

    const range = document.getElementById("range") as HTMLDivElement;

    switch (element) {
      case "btn1":
        range.style.left = "3%"
        break;
      case "btn2":
        range.style.left = "36%"
        break;
      case "btn3":
        range.style.left = "69%"
        break;

      default:
        break;
    }
  }
}
