import { Subscription, filter, Observable } from 'rxjs';
import { AccountData } from '../../models/accountData';
import { AccountService } from './../../service/account.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedAccountDataHomeService } from 'src/app/service/shared-account-data-home.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {



  subscription: Subscription | undefined;
  modal = false;
  loading = true;

  observable: Observable<AccountData> = new Observable<AccountData>();


  constructor(private accountServ: AccountService, private sharedServ: SharedAccountDataHomeService, private router: Router) {

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionRouterHome.unsubscribe();
    
  }

  private accountData!: AccountData;


  subscriptionRouterHome!: Subscription;
  ngOnInit() {
    this.observable = this.accountServ.getData();

    this.subscription = this.observable.subscribe(
      (value) => {
        this.accountData = value;
        this.loading = false;
      });

    this.sharedServ.getEvento$().subscribe(() => this.slide1());

    this.subscriptionRouterHome = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(
      (event) => {
        if (event.toString().split(' ')[5].split(")")[0].replace("'", "").replace("'", "") == "/home")
          this.slide1();
        else
          this.slide2();

      }
    );
  }

  @ViewChild('slide2Control') slide2Checkbox!: ElementRef<HTMLInputElement>;
  @ViewChild('slide1Control') slide1CheckBox!: ElementRef<HTMLInputElement>;

  slide2() {
    this.slide2Checkbox.nativeElement.checked = true;
  }
  addData(ac: AccountData) {

  }

  slide1() {
    this.router.navigate(["home"]);
    this.slide1CheckBox.nativeElement.checked = true;
  }





}

