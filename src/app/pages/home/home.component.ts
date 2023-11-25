import { Subscription, filter } from 'rxjs';
import { AccountData } from '../../models/accountData';
import { AccountService } from './../../service/account.service';
import { Component, OnInit } from '@angular/core';
import { SharedAccountDataHomeService } from 'src/app/service/shared-account-data-home.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  subscription: Subscription | undefined;

  modal = false;

  constructor(private accountServ: AccountService, private sharedServ: SharedAccountDataHomeService, private router: Router) {

  }

  private accountData!: AccountData;



  ngOnInit() {
    this.subscription = this.accountServ.getData().subscribe(
      (value) => {
        this.accountData = value;
      });

      this.sharedServ.getEvento$().subscribe(()=> this.slide1());

      this.router.events.pipe(filter((event)=> event instanceof NavigationEnd)).subscribe(
        (event) =>{
          if(event.toString().split(' ')[5].split(")")[0].replace("'", "").replace("'", "") == "/home"){
            this.slide1();
          }else{
            this.slide2();
          }
        }
      );
  }

  slide2() {

    const slide2Checkbox = document.getElementById('slide2-control') as HTMLInputElement;
    slide2Checkbox.checked = true;
  }
  addData(ac: AccountData) {

  }

  slide1() {

    this.router.navigate(["home"]);
    const slide2Checkbox = document.getElementById('slide1-control') as HTMLInputElement;
    slide2Checkbox.checked = true;

  }





}

