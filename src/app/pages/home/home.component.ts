import { Subscription } from 'rxjs';
import { AccountData } from './../../interfaces/accountData';
import { AccountService } from './../../service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  viewDeposit = new View(false);
  viewTransfer = new View(false);
  viewHistory = new View(false);
  viewFav = new View(false);
  viewPig = new View(false);
  viewAccountData = new View(false);

  views = [this.viewDeposit, this.viewTransfer, this.viewHistory, this.viewFav, this.viewPig, this.viewAccountData];

  subscription: Subscription | undefined;

  constructor(private accountServ: AccountService) {

  }

  private accountData!: AccountData;
  ngOnInit() {
    this.subscription = this.accountServ.getData().subscribe(
      (value) => {
        this.accountData = value;
      },
      (err) =>{

      },
      () =>{

      }
      );


  }

  slide2(event: number) {

    this.views.forEach((view) => { view.value = false })
    this.views[event].value = true;

    const slide2Checkbox = document.getElementById('slide2-control') as HTMLInputElement;
    slide2Checkbox.checked = true;
  }
  addData(ac :AccountData){

  }

  slide1() {
    const slide2Checkbox = document.getElementById('slide1-control') as HTMLInputElement;
    slide2Checkbox.checked = true;

  }





}

class View {
  value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }
}
